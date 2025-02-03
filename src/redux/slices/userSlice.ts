import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser.ts";
import {fetchUserData, getUserByIdApi, getUsersApi} from "../../services/api.service.ts";

interface UserState {
    firstName: string;
    image: string | null;
    loading: boolean;
    error: string | null;
    users: IUser[];
    total: number;
    currentPage: number;
    user: IUser | null;
    selectedUser: IUser | null;
}

const initialState: UserState = {
    firstName: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string).firstName : "",
    image: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string).image : null,
    loading: false,
    error: null,
    users: [],
    total: 0,
    currentPage: 1,
    user: null,
    selectedUser: null,
};

export const fetchUsers = createAsyncThunk<
    { users: IUser[]; total: number },
    { query: string, page: number },
    { rejectValue: string }
>(
    "user/fetchUsers",
    async ({page, query}, {rejectWithValue}) => {
        try {
            const data = await getUsersApi(page, query);
            return {users: data.users, total: data.total};
        } catch (error) {
            console.log(error);
            return rejectWithValue("Failed to get user list");
        }
    }
);

export const fetchUser = createAsyncThunk<IUser, void, { rejectValue: string }>(
    "user/fetchUser",
    async (_, {getState, rejectWithValue}) => {
        const state = getState() as { auth: { accessToken: string | null } };
        const accessToken = state.auth.accessToken;

        if (!accessToken) {
            return rejectWithValue("User is not authorized.");
        }
        try {
            return await fetchUserData(accessToken);
        } catch (error) {
            console.error("Error in fetchUser:", error);
            return rejectWithValue("Failed to retrieve user data");
        }
    }
);

export const fetchUserById = createAsyncThunk("user/fetchUserById", async (id: number) => {
    return await getUserByIdApi(id);
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.firstName = action.payload.firstName;
                state.image = action.payload.image;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload.users;
                state.total = action.payload.total;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchUserById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.selectedUser = action.payload;
                state.loading = false;

                if (!state.users.find(user => user.id === action.payload.id)) {
                    state.users.push(action.payload);
                }
            })
            .addCase(fetchUserById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Помилка отримання даних";
            });
    },
});

export const {setPage, setSelectedUser} = userSlice.actions;
export default userSlice.reducer;