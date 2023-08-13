import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { React, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'styled-react-modal';
import { UserContext } from '../../../context/userContext';
import noImageTask from '../../../media/no-image-found.png';
import styles from './EditProjectModal.module.css';

const StyledModal = Modal.styled`
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;`;

const EditProjectModal = ({ callbackEditProj, dataprop }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [opacity, setOpacity] = useState(0);
    const [data, setData] = useState(dataprop);
    const { user } = useContext(UserContext);
    const { id } = useParams();

    useEffect(() => {
        if (user) {
            axios.post('/project/' + id).then(({ data }) => {
                setData(data[0]);
            });
        }
    }, []);

    function handleChange(e) {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value,
        });
    }

    function toggleModal() {
        setOpacity(0);
        setIsOpen(!isOpen);
        callbackEditProj(!isOpen);
    }

    function afterOpen() {
        setTimeout(() => {
            setOpacity(1);
        }, 100);
    }

    function beforeClose() {
        return new Promise((resolve) => {
            setOpacity(0);
            setTimeout(resolve, 300);
        });
    }

    return (
        <>
            <StyledModal
                className={styles.addnewmodal}
                isOpen={isOpen}
                afterOpen={afterOpen}
                beforeClose={beforeClose}
                // onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}
                opacity={opacity}
                backgroundProps={{ opacity }}
            >
                <div className={styles.closeModal}>
                    <h4>
                        {data && data.title
                            ? `Edit  ${data.title}`
                            : 'Add New Project'}
                    </h4>
                    <FontAwesomeIcon
                        icon="fa-solid fa-rectangle-xmark"
                        style={{ color: 'gray' }}
                        onClick={toggleModal}
                    />
                </div>
                <div className={styles.imageGroupTitle}>
                    <div className={styles.imgGroupFlex}>
                        <div>
                            <label
                                className={styles.imgGroup}
                                htmlFor="taskImageUpload"
                            >
                                <img
                                    className={styles.taskImg}
                                    src={
                                        data && data.image
                                            ? `${process.env.REACT_APP_API_URL}/images/${data.image}`
                                            : noImageTask
                                    }
                                    alt="No Set"
                                />
                            </label>
                            {/* <input
                                type="file"
                                name="taskImageUpload"
                                id="taskImageUpload"
                                accept="image/*"
                                style={{ display: 'none' }}
                            /> */}
                        </div>

                        <FontAwesomeIcon
                            className={styles.imageEdit}
                            icon="fa-solid fa-square-pen"
                        />
                    </div>

                    <div className={styles.taskTitleGroup}>
                        <label htmlFor="taskTitle">Project Title</label>
                        <input
                            type="text"
                            name="taskTitle"
                            id="taskTitle"
                            placeholder="Add title here..."
                            value={data && data.title ? data.title : ''}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <label
                    className={styles.taskDescLabel}
                    htmlFor="taskDescription"
                >
                    Project Description
                </label>
                <textarea
                    className={styles.textareaDesc}
                    name="taskDescription"
                    id="taskDescription"
                    rows="10"
                    placeholder="Add description here..."
                    value={data && data.description ? data.description : ''}
                    onChange={handleChange}
                ></textarea>
                {/* <Wysiwyg onChange={handleContentChange} /> */}
                <hr className={styles.horizon} />
                <div className={styles.taskButtons}>
                    <button className={styles.buttonAdd} onClick={toggleModal}>
                        {data && data.title ? 'Edit Project' : 'Add Project'}
                    </button>
                    <button
                        className={styles.buttonCancel}
                        onClick={toggleModal}
                    >
                        Cancel
                    </button>
                </div>
            </StyledModal>
        </>
    );
};

export default EditProjectModal;
