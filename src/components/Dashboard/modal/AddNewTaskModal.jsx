import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Modal from 'styled-react-modal';
import styles from './AddNewTaskModal.module.css';

const StyledModal = Modal.styled`
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;`;

const AddNewTaskModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);

    function toggleModal(e) {
        setOpacity(0);
        setIsOpen(!isOpen);
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
        <div>
            <div onClick={toggleModal} className={styles.taskAdd}>
                <FontAwesomeIcon
                    icon="fa-solid fa-circle-plus"
                    style={{ color: 'gray' }}
                />
            </div>
            <StyledModal
                className={styles.addnewmodal}
                isOpen={isOpen}
                afterOpen={afterOpen}
                beforeClose={beforeClose}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}
                opacity={opacity}
                backgroundProps={{ opacity }}
            >
                <div className={styles.closeModal}>
                    <FontAwesomeIcon
                        icon="fa-solid fa-rectangle-xmark"
                        style={{ color: 'gray' }}
                        onClick={toggleModal}
                    />
                </div>
                <span>Add New Task</span>
                <label htmlFor="taskTitle">Task Title</label>
                <input type="text" name="taskTitle" id="taskTitle" />
                <label htmlFor="taskDescription">Task Description</label>
                <textarea
                    name="taskDescription"
                    id="taskDescription"
                    cols="30"
                    rows="10"
                ></textarea>
                <label htmlFor="taskImageUpload">Task image</label>
                <input
                    type="file"
                    name="taskImageUpload"
                    id="taskImageUpload"
                />
                <button onClick={toggleModal}>Add Task</button>
                <button onClick={toggleModal}>Close me</button>
            </StyledModal>
        </div>
    );
};

export default AddNewTaskModal;
