import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { default as projimg } from '../../media/no-image-found.png';
import styles from './ProjectNav.module.css';
import EditProjectModal from './modal/EditProjectModal';

const ProjectNav = () => {
    const { user } = useContext(UserContext);
    const { id } = useParams();

    const [apiData, setApiData] = useState(user);

    useEffect(() => {
        if (user) {
            axios.get('/project/' + id).then(({ data }) => {
                setApiData(data[0]);
            });
        }
    }, [user, id]);

    const [isProjectModal, setProjectModal] = useState(false);

    function editProject(payload) {
        setProjectModal(payload);
    }
    function showEditProjModal() {
        setProjectModal((prevState) => !prevState);
    }

    return (
        <nav className={styles.project}>
            <img
                src={
                    apiData && apiData.image
                        ? `${process.env.REACT_APP_API_URL}/images/${apiData.image}`
                        : projimg
                }
                alt={id}
                onClick={showEditProjModal}
            />
            <div className={styles.projGroupDesc}>
                <span className={styles.projectName}>
                    {apiData && apiData.title}
                    <FontAwesomeIcon
                        onClick={showEditProjModal}
                        style={{ color: 'gray', paddingLeft: '0.5rem' }}
                        size="xs"
                        icon="fa-solid fa-pen-to-square"
                    />
                    {isProjectModal && (
                        <EditProjectModal
                            callbackEditProj={editProject}
                            dataprop={apiData}
                        />
                    )}
                </span>
                <span className={styles.projectDesc}>
                    {apiData && apiData.description}
                </span>
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
                {/* <div className={styles.projectMenu}>
                    <FontAwesomeIcon
                        style={{ color: 'gray' }}
                        icon="fa-solid fa-users"
                    />
                    Members&#128317;
                </div> */}
            </div>
        </nav>
    );
};

export default ProjectNav;
