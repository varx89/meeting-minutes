import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styles from './Grouptasks.module.css';
import AddTaskModal from './modal/AddTaskModal';
import EditTaskModal from './modal/EditTaskModal';
import TaskModal from './modal/TaskModal';

const GroupTasks = ({ groupsTasks, propAddSubmit, propEditSubmit }) => {
    // const initialProject = {
    //     project: '',
    //     textAreaDesc: '',
    // };

    const [isAddModal, setAddModal] = useState(false);
    const [isEditModal, setEditModal] = useState(false);
    const [isTaskModal, setTaskModal] = useState(false);
    //select id from modal in order to update
    const [selectedItemId, setSelectedItemId] = useState(null);

    function handleTaskClickEdit(itemId) {
        setSelectedItemId(itemId);
    }

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
        <>
            <div className={styles.taskmng}>
                <span className={styles.groupTasksTitle}>
                    {groupsTasks.title}
                </span>
                <div className={styles.taskAdd} onClick={showAddModal}>
                    <FontAwesomeIcon
                        icon="fa-solid fa-circle-plus"
                        style={{ color: 'gray' }}
                    />
                </div>

                {isAddModal && (
                    <AddTaskModal
                        key={groupsTasks.id}
                        groupID={groupsTasks.id}
                        callbackAddEdit={addTask}
                        propAddSubmit={propAddSubmit}
                    />
                )}

                {groupsTasks.task &&
                    groupsTasks.task.length > 0 &&
                    groupsTasks.task.map((task, index) => {
                        return (
                            <>
                                {isEditModal && (
                                    <EditTaskModal
                                        key={task.id}
                                        callbackEdit={editTask}
                                        tasks={groupsTasks.task}
                                        taskID={selectedItemId}
                                        propEditSubmit={propEditSubmit}
                                    />
                                )}
                                {isTaskModal && (
                                    <TaskModal
                                        key={task.id}
                                        callback={viewTask}
                                    />
                                )}
                                <article
                                    key={task.id}
                                    className={styles.taskRow}
                                >
                                    {/* <img
                                        onClick={viewTaskModal}
                                        src={taskImage}
                                        alt=""
                                    /> */}
                                    <div className={styles.taskTitle}>
                                        <span onClick={viewTaskModal}>
                                            {task.taskTitle}
                                        </span>
                                        <FontAwesomeIcon
                                            onClick={() => {
                                                showEditModal();
                                                handleTaskClickEdit(task.id);
                                            }}
                                            icon="fa-solid fa-pen-to-square"
                                            style={{ color: 'gray' }}
                                        />
                                    </div>

                                    <div className={styles.taskClose}>
                                        <div>
                                            <FontAwesomeIcon
                                                icon="fa-regular fa-calendar"
                                                style={{
                                                    paddingRight: '0.2rem',
                                                }}
                                            />
                                            {task.startDate}
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
                            </>
                        );
                    })}
            </div>
        </>
    );
};

export default GroupTasks;
