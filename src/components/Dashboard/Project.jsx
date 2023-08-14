import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { BaseModalBackground, ModalProvider } from 'styled-react-modal';
import GroupTasks from './GroupTasks';
import styles from './Project.module.css';
import ProjectNav from './ProjectNav';

const Project = () => {
    // const { user } = useContext(UserContext);
    // const { id } = useParams();

    // const [apiData, setApiData] = useState(user);

    // useEffect(() => {
    //     if (user) {
    //         axios.get('/project/' + id).then(({ data }) => {
    //             setApiData(data[0]);
    //         });
    //     }
    // }, [user, id]);

    //information to pass
    const infoDB = [
        {
            id: 1,
            title: 'To Do',
            task: [
                {
                    id: 1,
                    taskTitle: 'Buy Beer',
                    taskDescription: 'Buy beer from market',
                    startDate: '07/14/2023',
                },
                {
                    id: 2,
                    taskTitle: 'Buy Chips',
                    taskDescription: 'Chips from market',
                    startDate: '08/11/2023',
                },
                {
                    id: 3,
                    taskTitle: 'Buy Salami',
                    taskDescription: 'Salami from market',
                    startDate: '06/11/2023',
                },
            ],
        },
        {
            id: 2,
            title: 'Today',
            task: [
                {
                    id: 1,
                    taskTitle: 'Buy Chocolate',
                    taskDescription: 'Buy Chcocolate from market',
                    startDate: '05/07/2023',
                },
                {
                    id: 2,
                    taskTitle: 'Buy Fish',
                    taskDescription: 'Fish from market',
                    startDate: '07/11/2023',
                },
            ],
        },
    ];

    const [data, setData] = useState(infoDB);

    const groupName = useRef();

    function newGroup() {
        if (groupName.current.value) {
            setData((prev) => [
                ...prev,
                {
                    id: data.length + 1,
                    title: groupName.current.value,
                    task: [],
                },
            ]);
        }
        toast.success(groupName.current.value + ' added successfully!');
    }
    function handleAddTask(newData) {
        const { taskTitle, taskDescription, startDate, groupID } = newData;
        setData((prevData) =>
            prevData.map((item) => {
                if (item.id === groupID) {
                    return {
                        ...item,
                        task: [
                            ...item.task,
                            {
                                id: item.task.length + 1,
                                taskTitle: taskTitle,
                                taskDescription: taskDescription,
                                startDate: startDate,
                            },
                        ],
                    };
                }
                return item;
            })
        );
    }

    function handleEditTask(newData) {
        const { taskTitle, taskDescription, taskId, groupID } = newData;
        const data = { taskTitle: taskTitle, taskDescription: taskDescription };
        setData((prevData) =>
            prevData.map((item) => {
                if (item.id === groupID) {
                    return {
                        ...item,
                        task: item.task.map((elem) => {
                            if (elem.id === taskId) {
                                return {
                                    ...elem,
                                    ...data,
                                };
                            }
                            return elem;
                        }),
                    };
                }
                return item;
            })
        );
    }

    const FadingBackground = styled(BaseModalBackground)`
        opacity: ${(props) => props.opacity};
        transition: all 0.3s ease-in-out;
    `;
    return (
        <ModalProvider backgroundComponent={FadingBackground}>
            <section>
                <ProjectNav />
                <div className={styles.sectionBG}>
                    <div className={styles.tasksGrid}>
                        {data &&
                            data.map((group) => {
                                return (
                                    <GroupTasks
                                        key={group.id}
                                        groupsTasks={group}
                                        propAddSubmit={handleAddTask}
                                        propEditSubmit={handleEditTask}
                                    />
                                );
                            })}

                        <div className={styles.taskmng}>
                            <span className={styles.newGroup}>
                                New Group Tasks
                            </span>
                            <div className={styles.taskAddNew}>
                                <span className={styles.newGroup}>
                                    Group Tasks
                                </span>
                                <input
                                    ref={groupName}
                                    className={styles.input}
                                    maxLength={22}
                                    type="text"
                                    name="project"
                                    id="project"
                                    placeholder={`Group's name...`}
                                    required
                                />
                                <FontAwesomeIcon
                                    onClick={() => newGroup()}
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
