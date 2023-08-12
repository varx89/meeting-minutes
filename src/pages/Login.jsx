import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import bodyIcon from '../media/login.png';
import styles from './Login.module.css';

const Login = () => {
    const initialUser = {
        email: '',
        password: '',
    };
    const [user, setUser] = useState(initialUser);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({
            ...user,
            [e.target.name]: value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', user);
            if (response.data.error) {
                toast.error(response.data.error);
            } else {
                setUser({});
                toast.success('Succesfully logged in!');
                navigate('/auth/dashboard');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.body}>
            <div className={styles.section}>
                <div className={styles.homeBody}>
                    <img src={bodyIcon} alt="Uprising" />
                    <div className={styles.hero}>
                        <h2 className={styles.sectionTitle}>
                            Have Account? Login now!
                        </h2>
                        <form onSubmit={handleLogin}>
                            <label htmlFor="email">
                                Email {`<demo@demo.com>`}
                            </label>
                            <input
                                type="email"
                                placeholder="demo@demo.com"
                                id="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                autoComplete="false"
                                required
                            />
                            <label htmlFor="password">
                                Password {`<adminbob123>`}
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                id="password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                autoComplete="false"
                                required
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
                                    onClick={() => navigate('/auth/signup')}
                                    className={styles.button}
                                    type="button"
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
