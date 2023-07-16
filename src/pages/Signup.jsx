import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import bodyIcon from '../media/login.png';
import styles from './Signup.module.css';

const Signup = () => {
    return (
        <div className={styles.body}>
            <div className={styles.section}>
                <div className={styles.homeBody}>
                    <img src={bodyIcon} alt="Uprising" />
                    <div className={styles.hero}>
                        <h2 className={styles.sectionTitle}>
                            New User? Register now!
                        </h2>
                        <form>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="demo@demo.com"
                                id="email"
                            />
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                id="fullName"
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder="password"
                                id="password"
                            />
                            <label htmlFor="cpassword">Password again</label>
                            <input
                                type="password"
                                placeholder="password"
                                id="cpassword"
                            />
                            <div className={styles.loginButtons}>
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

export default Signup;
