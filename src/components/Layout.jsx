import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './Layout.module.css';

const Layout = () => {
    return (
        <div className={styles.body}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
