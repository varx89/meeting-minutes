import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React, useState } from 'react';
import Modal from 'styled-react-modal';
import noImageTask from '../../../media/no-image-found.png';
import styles from './AddEditTaskModal.module.css';

const StyledModal = Modal.styled`
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;`;

const AddEditTaskModal = ({ callbackAddEdit, data }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [opacity, setOpacity] = useState(0);

    function toggleModal() {
        setOpacity(0);
        setIsOpen(!isOpen);
        callbackAddEdit(!isOpen);
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
                        {data && data.taskTitle
                            ? `Edit  ${data.taskTitle}`
                            : 'Add New Task'}
                    </h4>
                    <FontAwesomeIcon
                        icon="fa-solid fa-rectangle-xmark"
                        style={{ color: 'gray' }}
                        onClick={toggleModal}
                    />
                </div>
                <div className={styles.imageGroupTitle}>
                    <div className={styles.imgGroupFlex}>
                        <div style={{ position: 'relative' }}>
                            <label
                                className={styles.imgGroup}
                                htmlFor="taskImageUpload"
                            >
                                <img
                                    className={styles.taskImg}
                                    src={
                                        data && data.taskImg
                                            ? data.taskImg
                                            : noImageTask
                                    }
                                    alt="No Set"
                                />
                            </label>
                            <input
                                type="file"
                                name="taskImageUpload"
                                id="taskImageUpload"
                                accept="image/*"
                                style={{ display: 'none' }}
                            />
                        </div>

                        <FontAwesomeIcon
                            className={styles.imageEdit}
                            icon="fa-solid fa-square-pen"
                        />
                    </div>

                    <div className={styles.taskTitleGroup}>
                        <label htmlFor="taskTitle">Task Title</label>
                        <input
                            type="text"
                            name="taskTitle"
                            id="taskTitle"
                            placeholder="Add title here..."
                            value={data && data.taskTitle ? data.taskTitle : ''}
                        />
                    </div>
                </div>

                <label
                    className={styles.taskDescLabel}
                    htmlFor="taskDescription"
                >
                    Task Description
                </label>
                <textarea
                    className={styles.textareaDesc}
                    name="taskDescription"
                    id="taskDescription"
                    rows="10"
                    placeholder="Add description here..."
                    value={
                        data && data.taskDescription ? data.taskDescription : ''
                    }
                ></textarea>
                {/* <Wysiwyg onChange={handleContentChange} /> */}

                <div className={styles.taskButtons}>
                    <button className={styles.buttonAdd} onClick={toggleModal}>
                        {data && data.taskTitle ? 'Edit Task' : 'Add Task'}
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

export default AddEditTaskModal;
