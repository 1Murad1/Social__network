import React from "react";
import s from "./users.module.css";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User/User";


const Users = ({currentPage, onPageChanged, totalItemsCount, pageSize, users,    ...props}) => {

    return (
        <div className={s.users}>
            <h2>Users</h2>
            {
                users.map(u => <User key={u.id}
                                     user={u}
                                     followingIsProgress={props.followingIsProgress}
                                     unFollow={props.unFollow}
                                     follow={props.follow} />
                                     )}
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalItemsCount} pageSize={pageSize} />
        </div>
    )
}

export default Users;