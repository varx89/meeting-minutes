import React from 'react';
import bodyIcon from '../media/notes.png';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.body}>
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    Organize your work and life, finally.
                </h2>
                <div className={styles.homeBody}>
                    <img src={bodyIcon} alt="Uprising" />
                    <div className={styles.hero}>
                        Become more organized, calm and focused on your tasks.
                        Ranked in top <span>#5</span> task manager and to-do
                        list apps
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
