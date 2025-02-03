export const retrieveLocalStorage = <T>(key: string): T | null => {
    const object = localStorage.getItem(key);

    if (!object) return null;

    try {
        return JSON.parse(object) as T;
    } catch (error) {
        return object as T;
    }
};

export const setTokenToStorage = (key: string, token: string) => {
    localStorage.setItem(key, token);
};

export const removeTokenFromStorage = (key: string) => {
    localStorage.removeItem(key);
};

export const clearAuthData = (): void => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
};