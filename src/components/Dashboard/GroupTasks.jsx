import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { default as taskImage } from '../../media/projectBG.png';
import styles from './Grouptasks.module.css';

const GroupTasks = () => {
    return (
        <div className={styles.taskmng}>
            <span>To do</span>
            <div className={styles.taskAdd}>
                <FontAwesomeIcon
                    icon="fa-solid fa-circle-plus"
                    style={{ color: 'gray' }}
                />
            </div>

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
        </div>
    );
};

export default GroupTasks;
