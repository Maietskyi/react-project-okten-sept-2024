import {FC} from "react";
import {IUser} from "../../models/IUser.ts";
import "./UserList.css";
import {Link} from "react-router";

interface UserCardProps {
    user: IUser;
}

export const UserList: FC<UserCardProps> = ({user}) => {
    return (
        <div className="user-card">
            <Link className="user-card-flex" to={`/users/${user.id}`}>
                <img src={user.image} alt={user.firstName} width="50"/>
                <h3>{user.firstName} {user.lastName}</h3>
                <p>Phone: {user.phone}</p>
                <p>Email: {user.email}</p>
            </Link>
        </div>
    );
};