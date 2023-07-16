import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../media/logo.webp';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="Meeting Minutes" />
            </div>
            <ul className={styles.menu}>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>What's new</li>
                <li>Pricing</li>
                <li>Support</li>
                <li className={styles.login}>
                    <Link to="/auth/login">Log in</Link>
                </li>
                <li className={styles.signup}>
                    <Link to="/auth/signup">Sign up</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
