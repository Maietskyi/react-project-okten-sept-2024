import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import './HomeComponent.css';
import {AppDispatch, RootState} from "../../redux/store.ts";
import {fetchUser} from "../../redux/slices/userSlice.ts";

export const HomeComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {isAuthenticated} = useSelector((state: RootState) => state.auth);
    const {firstName, image, loading, error} = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(fetchUser());
        }
    }, [dispatch, isAuthenticated]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="home-page">
            <h1>Welcome to the world of cooking!</h1>
            {!isAuthenticated ? (
                <div className="auth-message">
                    <p><Link to="/login">login</Link> to view users and recipes.</p>
                </div>
            ) : (
                <div className="welcome-message">
                    {image && <img src={image} alt="User Logo" className="user-logo"/>}
                    <p>Welcome back, dear {firstName ? firstName : " user"}! Enjoy browsing our content.</p>
                </div>
            )}
        </div>
    );
};
