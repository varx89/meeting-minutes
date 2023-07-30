import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Dashboard/Header';
import styles from './DashBoardLayout.module.css';
import Footer from './Footer';

const DashboardLayout = () => {
    return (
        <div className={styles.body}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default DashboardLayout;
