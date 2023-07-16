import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../media/logo.webp';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.logo}>
                <img src={logo} alt="Meeting Minutes" />
            </div>
            <div>
                <div className={styles.wrapper}>
                    <ul className={styles.ul}>
                        <li className={styles.category}>
                            <FontAwesomeIcon icon="fa-solid fa-layer-group" />
                            PRODUCTS
                        </li>
                        <li>MMinutes Standard</li>
                        <li>MMinutes Plus</li>
                        <li>MMinutes Team</li>
                    </ul>
                    <ul className={styles.ul}>
                        <li className={styles.category}>
                            <FontAwesomeIcon icon="fa-solid fa-chart-simple" />
                            RESOURCES
                        </li>
                        <li>Support</li>
                        <li>Blog</li>
                        <li>What's new</li>
                        <li>Sitemap</li>
                        <li>How to</li>
                    </ul>
                    <ul className={styles.ul}>
                        <li className={styles.category}>
                            <FontAwesomeIcon icon="fa-solid fa-users-rectangle" />{' '}
                            COMPANY
                        </li>
                        <li>Mission</li>
                        <li>About us</li>
                        <li>Legal</li>
                    </ul>
                    <ul className={styles.ul}>
                        <li className={styles.category}>
                            <FontAwesomeIcon icon="fa-solid fa-hashtag" />{' '}
                            SOCIAL
                        </li>
                        <li>#Facebook</li>
                        <li>#Twitter</li>
                        <li>#Instagram</li>
                        <li>#Github</li>
                        <li>#Community</li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                © 2023 The Group Minutes LTD; registered in the United Kingdom.
            </div>
        </div>
    );
};

export default Footer;

library.add(fab, fas, far);
