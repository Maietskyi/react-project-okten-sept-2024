import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useSearchParams} from "react-router";
import {useEffect} from "react";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {fetchUsers, setPage} from "../../redux/slices/userSlice.ts";
import {SearchComponent} from "../search-component/SearchComponent.tsx";
import {UserList} from "../user-component/UserList.tsx";
import {PaginationComponent} from "../pagination-component/PaginationComponent.tsx";

export const UsersComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const {users, total, currentPage, loading} = useSelector((state: RootState) => state.user);

    const [params] = useSearchParams();
    const page = Number(params.get('page')) || 1;
    const query = params.get('q') ?? '';

    useEffect(() => {
        if (page !== currentPage) {
            dispatch(setPage(page));
        }
    }, [dispatch, page, currentPage]);

    useEffect(() => {
        searchUser(page, query);
    }, [dispatch, page, query]);

    const totalPages = Math.ceil(total / 30);

    const handlePageChange = (page: number) => {
        dispatch(setPage(page));
        if (query != '') {
            navigate(`?page=${page}&q=${query}`);
        } else {
            navigate(`?page=${page}`);
        }
    };

    const searchUser = (page: number, query: string) => {
        dispatch(fetchUsers({page, query}));
    }

    const handleSendUser = (query: string) => {
        if (query != '') {
            navigate(`?page=1&q=${query}`);
        } else {
            navigate(`?page=1`);
        }
    };

    return (
        <div>
            <h1>User list</h1>
            <SearchComponent searchType="users" onSearch={handleSendUser} search={query}/>
            <ul>
                {loading ? (
                    <p>Loading...</p>
                ) : users.length > 0 ? (
                    users.map((user) => (
                        <li key={user.id}>
                            <UserList user={user}/>
                        </li>
                    ))
                ) : (
                    <p>No users</p>
                )}
            </ul>
            <PaginationComponent totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange}/>
        </div>
    );
};