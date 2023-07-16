import React from 'react';
import styles from './Body.module.css';
import Particle from './Particle';

const Body = () => {
    return (
        <div className={styles.body}>
            <Particle />
            <p className={styles.sectionTitle}>Body</p>
        </div>
    );
};

export default Body;
