import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../media/logo.webp';
import userImage from '../../media/user.png';
import styles from '../Dashboard/Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="Meeting Minutes" />
                <span>Standard</span>
            </div>
            <ul className={styles.menu}>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li className={styles.rightSidebar}>
                    <div className={styles.account}>
                        <img
                            className={styles.user}
                            src={userImage}
                            alt="Account"
                        />
                        <Link to="#">Andrei Varcus</Link>
                        <FontAwesomeIcon icon="fa-solid fa-gear" />
                    </div>
                    <div className={styles.account}>
                        <div>Task Manager</div>
                        <FontAwesomeIcon icon="fa-solid fa-sliders" size="xs" />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Header;
