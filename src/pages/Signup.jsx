import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import bodyIcon from '../media/login.png';
import styles from './Signup.module.css';

const Signup = () => {
    const initialUser = {
        email: '',
        fullName: '',
        password: '',
        cPassword: '',
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

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/register', user);
            if (response.data.error) {
                toast.error(response.data.error);
            } else {
                setUser({});
                toast.success('Succesfully registered!');
                navigate('/auth/login');
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
                            New User? Register now!
                        </h2>
                        <form onSubmit={handleRegister}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="demo@demo.com"
                                id="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                placeholder="Bob Marley"
                                id="fullName"
                                name="fullName"
                                value={user.fullName}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                autoComplete="off"
                                placeholder="password"
                                id="password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="cpassword">Password again</label>
                            <input
                                type="password"
                                autoComplete="off"
                                placeholder="confirm password"
                                id="cPassword"
                                name="cPassword"
                                value={user.cPassword}
                                onChange={handleChange}
                                required
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
