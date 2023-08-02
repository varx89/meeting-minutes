import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useParams } from 'react-router-dom';
import {
    default as projectBG,
    default as taskImage,
} from '../../media/projectBG.png';
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
            <div className={styles.sectionBG}>
                <div>
                    <div className={styles.taskmng}>
                        <span>To do</span>
                        <div className={styles.taskAdd}>
                            <FontAwesomeIcon
                                icon="fa-solid fa-circle-plus"
                                style={{ color: 'gray' }}
                            />
                        </div>
                        <article className={styles.taskRow}>
                            <div className={styles.taskTitle}>
                                <span>Media Outlets</span>
                                <FontAwesomeIcon
                                    icon="fa-solid fa-ellipsis"
                                    style={{ color: 'gray' }}
                                />
                            </div>

                            <div className={styles.taskClose}>
                                <div>
                                    <FontAwesomeIcon
                                        icon="fa-regular fa-calendar"
                                        style={{ paddingRight: '0.2rem' }}
                                    />
                                    10.04.23
                                </div>
                                <div>
                                    <FontAwesomeIcon icon="fa-solid fa-flag" />
                                    <FontAwesomeIcon
                                        icon="fa-brands fa-hotjar"
                                        style={{
                                            color: '#ff0000',
                                            paddingLeft: '0.25rem',
                                        }}
                                    />
                                </div>
                            </div>
                        </article>
                        <article className={styles.taskRow}>
                            <img src={taskImage} alt="" />
                            <div className={styles.taskTitle}>
                                <span>Media Outlets</span>
                                <FontAwesomeIcon
                                    icon="fa-solid fa-ellipsis"
                                    style={{ color: 'gray' }}
                                />
                            </div>

                            <div className={styles.taskClose}>
                                <div>
                                    <FontAwesomeIcon
                                        icon="fa-regular fa-calendar"
                                        style={{ paddingRight: '0.2rem' }}
                                    />
                                    10.04.23
                                </div>
                                <div>
                                    <FontAwesomeIcon icon="fa-solid fa-flag" />
                                    <FontAwesomeIcon
                                        icon="fa-brands fa-hotjar"
                                        style={{
                                            color: '#ff0000',
                                            paddingLeft: '0.25rem',
                                        }}
                                    />
                                </div>
                            </div>
                        </article>
                        <article className={styles.taskRow}>
                            <div className={styles.taskTitle}>
                                <span>Media Outlets</span>
                                <FontAwesomeIcon
                                    icon="fa-solid fa-ellipsis"
                                    style={{ color: 'gray' }}
                                />
                            </div>

                            <div className={styles.taskClose}>
                                <div>
                                    <FontAwesomeIcon
                                        icon="fa-regular fa-calendar"
                                        style={{ paddingRight: '0.2rem' }}
                                    />
                                    10.04.23
                                </div>
                                <div>
                                    <FontAwesomeIcon icon="fa-solid fa-flag" />
                                    <FontAwesomeIcon
                                        icon="fa-brands fa-hotjar"
                                        style={{
                                            color: '#ff0000',
                                            paddingLeft: '0.25rem',
                                        }}
                                    />
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;
