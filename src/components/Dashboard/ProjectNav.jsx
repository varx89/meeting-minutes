import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useParams } from 'react-router-dom';
import projectBG from '../../media/projectBG.png';
import styles from './ProjectNav.module.css';

const ProjectNav = () => {
    const { id } = useParams();
    return (
        <nav className={styles.project}>
            <img src={projectBG} alt={id} />
            <div className={styles.projGroupDesc}>
                <span className={styles.projectName}>
                    {id}{' '}
                    <FontAwesomeIcon
                        style={{ color: 'gray' }}
                        size="xs"
                        icon="fa-solid fa-pen-to-square"
                    />
                </span>
                <span className={styles.projectDesc}>Description</span>
            </div>

            <div className={styles.projectGroupMenu}>
                <div className={styles.projectMenu}>
                    <FontAwesomeIcon
                        style={{ color: 'gray' }}
                        icon="fa-solid fa-border-all"
                    />
                    Board
                </div>
                <div className={styles.projectMenu}>
                    <FontAwesomeIcon
                        style={{ color: 'gray' }}
                        icon="fa-solid fa-chart-column"
                    />
                    Charts
                </div>
                <div className={styles.projectMenu}>
                    <FontAwesomeIcon
                        style={{ color: 'gray' }}
                        icon="fa-solid fa-users"
                    />
                    Members&#128317;
                </div>
            </div>
        </nav>
    );
};

export default ProjectNav;
