import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import bodyIcon from '../media/login.png';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.body}>
            <div className={styles.section}>
                <div className={styles.homeBody}>
                    <img src={bodyIcon} alt="Uprising" />
                    <div className={styles.hero}>
                        <h2 className={styles.sectionTitle}>
                            Have Account? Login now!
                        </h2>
                        <form>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="demo@demo.com"
                                id="email"
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder="password"
                                id="password"
                            />
                            <div className={styles.loginButtons}>
                                <button
                                    className={styles.button}
                                    type="submit"
                                    name="login"
                                    id="login"
                                >
                                    <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
                                    Login
                                </button>
                                <button
                                    className={styles.button}
                                    type="submit"
                                    name="signup"
                                    id="signup"
                                >
                                    <FontAwesomeIcon icon="fa-solid fa-user-plus" />
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
