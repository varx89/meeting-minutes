import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useParams } from 'react-router-dom';
import projectBG from '../../media/projectBG.png';
import styles from './Project.module.css';

const Project = () => {
    const { id } = useParams();
    return (
        <section>
            <nav className={styles.project}>
                <img src={projectBG} alt={id} />
                <span className={styles.projectName}>{id}</span>
                <div className={styles.projectGroupMenu}>
                    <div className={styles.projectMenu}>
                        <FontAwesomeIcon icon="fa-solid fa-border-all" />
                        Board
                    </div>
                    <div className={styles.projectMenu}>
                        <FontAwesomeIcon icon="fa-solid fa-chart-column" />
                        Charts
                    </div>
                    <div className={styles.projectMenu}>
                        <FontAwesomeIcon icon="fa-solid fa-users" />
                        Members&#128317;
                    </div>
                </div>
            </nav>
            <div className={styles.sectionBG}>hello</div>
        </section>
    );
};

export default Project;
