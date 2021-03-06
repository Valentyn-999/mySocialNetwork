import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header = (props: PropsType) => {
    return (
        <header className={s.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSazfVRj6p91A0qqCy6ZyLgaBoILmQYprjkvw&usqp=CAU'/>

            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    :   <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>

    )
}

export default Header;