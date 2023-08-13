import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import logo from '../../media/logo.webp';
import userImage from '../../media/user.png';
import styles from '../Dashboard/Header.module.css';

const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src={logo} alt="Meeting Minutes" />
                    <span>Standard</span>
                </div>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/auth/dashboard">Dashboard</Link>
                    </li>
                    <li className={styles.rightSidebar}>
                        <div className={styles.account}>
                            <img
                                className={styles.user}
                                src={userImage}
                                alt="Account"
                            />
                            <Link to="#">{user && user.fullName}</Link>
                            <FontAwesomeIcon icon="fa-solid fa-gear" />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;
