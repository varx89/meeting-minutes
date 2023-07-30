import React from 'react';
import logo from '../../media/logo.webp';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <img src={logo} alt="Meeting Minutes" />
            </div>
            <div className={styles.copyright}>
                © 2023 The Group Minutes LTD; registered in the United Kingdom.
            </div>
        </footer>
    );
};

export default Footer;
