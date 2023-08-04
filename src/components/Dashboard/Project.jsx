import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { BaseModalBackground, ModalProvider } from 'styled-react-modal';
import GroupTasks from './GroupTasks';
import styles from './Project.module.css';
import ProjectNav from './ProjectNav';

const FadingBackground = styled(BaseModalBackground)`
    opacity: ${(props) => props.opacity};
    transition: all 0.3s ease-in-out;
`;

const Project = () => {
    return (
        <ModalProvider backgroundComponent={FadingBackground}>
            <section>
                <ProjectNav />
                <div className={styles.sectionBG}>
                    <div className={styles.tasksGrid}>
                        <GroupTasks />
                        <div className={styles.taskmng}>
                            <span className={styles.newGroup}>
                                New Group Tasks
                            </span>
                            <div className={styles.taskAddNew}>
                                <span className={styles.newGroup}>
                                    Group Tasks
                                </span>
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
        </ModalProvider>
    );
};

export default Project;
