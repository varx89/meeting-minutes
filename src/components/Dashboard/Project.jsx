import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import GroupTasks from './GroupTasks';
import styles from './Project.module.css';
import ProjectNav from './ProjectNav';

const Project = () => {
    return (
        <section>
            <ProjectNav />
            <div className={styles.sectionBG}>
                <div className={styles.tasksGrid}>
                    <GroupTasks />
                    <div className={styles.taskmng}>
                        <span className={styles.newGroup}>New Group Tasks</span>
                        <div className={styles.taskAddNew}>
                            <span className={styles.newGroup}>Group Tasks</span>
                            <input
                                className={styles.input}
                                maxLength={22}
                                type="text"
                                name="project"
                                id="project"
                                placeholder={`Group's name...`}
                                required
                            />
                            <FontAwesomeIcon
                                icon="fa-solid fa-circle-plus"
                                style={{ color: 'gray' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;
