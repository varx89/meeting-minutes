import React from 'react';
import logo from '../media/logo.webp';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="Meeting Minutes" />
            </div>
            <ul className={styles.menu}>
                <li>Home</li>
                <li>What's new</li>
                <li>Pricing</li>
                <li>Support</li>
                <li className={styles.login}>Log in</li>
                <li className={styles.signup}>Sign up</li>
            </ul>
        </div>
    );
};

export default Header;
