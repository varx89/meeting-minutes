import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectsDash.module.css';

const Projects = () => {
    return (
        <section>
            <div>
                <h1 className={styles.h1}>To Do Projects</h1>
                <div className={styles.body}>
                    <article className={styles.project}>
                        <ul>
                            <li>
                                <h4>
                                    <FontAwesomeIcon
                                        icon="fa-solid fa-diagram-project"
                                        style={{ color: '#37282d' }}
                                        size="xs"
                                    />
                                    FFFFFGHDRTED
                                </h4>
                                <div className={styles.critical}>
                                    <FontAwesomeIcon
                                        icon="fa-solid fa-flag"
                                        style={{ color: 'gray' }}
                                    />
                                    0
                                    <FontAwesomeIcon
                                        icon="fa-brands fa-hotjar"
                                        style={{ color: '#ff0000' }}
                                    />
                                    2
                                </div>
                            </li>
                            <li>
                                <span className={styles.description}>
                                    Project for new products introduction in
                                    lines
                                </span>
                            </li>
                            <li>
                                <div className={styles.statusGrid}>
                                    <span className={styles.date}>
                                        <FontAwesomeIcon icon="fa-regular fa-calendar-plus" />
                                        Date
                                    </span>
                                    <span className={styles.date}>
                                        <FontAwesomeIcon icon="fa-regular fa-calendar-xmark" />
                                        End
                                    </span>
                                    <span className={styles.dateB}>
                                        15.03.2023
                                    </span>
                                    <span className={styles.dateB}>
                                        Ongoing
                                    </span>
                                </div>
                            </li>
                            <li>
                                <Link
                                    className={styles.viewProject}
                                    to="/auth/dashboard/project/FFFFFFGHDRTED"
                                >
                                    Manage
                                </Link>
                            </li>
                        </ul>
                    </article>
                    <article className={styles.project}>
                        <div className={styles.newProject}>
                            <span>Add new project</span>
                            <input
                                className={styles.input}
                                maxLength={12}
                                type="text"
                                name="project"
                                id="project"
                                placeholder={`Project's name...`}
                                required
                            />
                            <FontAwesomeIcon
                                icon="fa-solid fa-circle-plus"
                                style={{ color: 'gray' }}
                                size="xl"
                            />
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Projects;
