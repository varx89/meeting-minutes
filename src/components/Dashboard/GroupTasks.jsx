import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import taskimg, { default as taskImage } from '../../media/projectBG.png';
import styles from './Grouptasks.module.css';
import AddEditTaskModal from './modal/AddEditTaskModal';
import TaskModal from './modal/TaskModal';

const GroupTasks = () => {
    const data = {
        taskTitle: 'Hello Task',
        taskDescription: 'loren ipsum dolores sit amet whatever',
        taskImg: taskimg,
    };
    const [isAddModal, setAddModal] = useState(false);
    const [isEditModal, setEditModal] = useState(false);
    const [isTaskModal, setTaskModal] = useState(false);

    function addTask(payload) {
        setAddModal(payload);
    }
    function editTask(payload) {
        setEditModal(payload);
    }
    function viewTask(payload) {
        setTaskModal(payload);
    }

    function showAddModal() {
        setAddModal((prevState) => !prevState);
    }
    function showEditModal() {
        setEditModal((prevState) => !prevState);
    }
    function viewTaskModal() {
        setTaskModal((prevState) => !prevState);
    }
    return (
        <div className={styles.taskmng}>
            <span className={styles.groupTasksTitle}>To do</span>
            <div className={styles.taskAdd} onClick={showAddModal}>
                <FontAwesomeIcon
                    icon="fa-solid fa-circle-plus"
                    style={{ color: 'gray' }}
                />
            </div>
            {isAddModal && <AddEditTaskModal callbackAddEdit={addTask} />}
            {isEditModal && (
                <AddEditTaskModal callbackAddEdit={editTask} data={data} />
            )}
            {isTaskModal && <TaskModal callback={viewTask} />}
            <article className={styles.taskRow}>
                <img onClick={viewTaskModal} src={taskImage} alt="" />
                <div className={styles.taskTitle}>
                    <span onClick={viewTaskModal}>Media Outlets</span>
                    <FontAwesomeIcon
                        onClick={showEditModal}
                        icon="fa-solid fa-pen-to-square"
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
