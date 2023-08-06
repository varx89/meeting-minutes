import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import projimg from '../../media/no-image-found.png';
import projectBG from '../../media/projectBG.png';
import styles from './ProjectNav.module.css';
import EditProjectModal from './modal/EditProjectModal';

const ProjectNav = () => {
    const data = {
        projTitle: 'FFFFFFGHDRTEDx',
        projDesc: 'loren ipsum dolores sit amet whatever x',
        projImg: projimg,
    };
    const [isProjectModal, setProjectModal] = useState(false);
    const { id } = useParams();

    function editProject(payload) {
        setProjectModal(payload);
    }
    function showEditProjModal() {
        setProjectModal((prevState) => !prevState);
    }

    return (
        <nav className={styles.project}>
            <img src={projectBG} alt={id} />
            <div className={styles.projGroupDesc}>
                <span className={styles.projectName}>
                    {id}
                    <FontAwesomeIcon
                        onClick={showEditProjModal}
                        style={{ color: 'gray', paddingLeft: '0.5rem' }}
                        size="xs"
                        icon="fa-solid fa-pen-to-square"
                    />
                    {isProjectModal && (
                        <EditProjectModal
                            callbackEditProj={editProject}
                            data={data}
                        />
                    )}
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
