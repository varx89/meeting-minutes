import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React, useState } from 'react';
import { toast } from 'react-toastify';
import Modal from 'styled-react-modal';
import noImageTask from '../../../media/no-image-found.png';
import styles from './EditTaskModal.module.css';

const StyledModal = Modal.styled`
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;`;

const EditTaskModal = ({
    callbackEdit,
    propEditSubmit,
    groupID,
    tasks,
    taskID,
}) => {
    const initialForm = {
        taskId: taskID,
        taskTitle: taskID ? tasks[taskID].taskTitle : '',
        taskDescription: taskID ? tasks[taskID].taskDescription : '',
        startDate: taskID
            ? tasks[taskID].startDate
            : new Date().toLocaleDateString(),
        groupID: groupID,
    };

    const [isOpen, setIsOpen] = useState(true);
    const [opacity, setOpacity] = useState(0);
    const [form, setForm] = useState(initialForm);

    function toggleModal() {
        setOpacity(0);
        setIsOpen(!isOpen);
        callbackEdit(!isOpen);
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

    function onSubmit(e) {
        e.preventDefault();
        toggleModal();
        //callback propeditsubmit
        propEditSubmit(form);
        setForm(initialForm);
        toast.success(form.taskTitle + ' task edited successfully!');
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    return (
        <>
            <StyledModal
                isOpen={isOpen}
                afterOpen={afterOpen}
                beforeClose={beforeClose}
                // onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}
                opacity={opacity}
                backgroundProps={{ opacity }}
            >
                <form onSubmit={onSubmit} className={styles.addnewmodal}>
                    <div className={styles.closeModal}>
                        <h4>Edit {form.taskTitle}</h4>
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
                                        src={noImageTask}
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
                                value={form.taskTitle}
                                onChange={handleChange}
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
                        value={form.taskDescription}
                        onChange={handleChange}
                    ></textarea>
                    <input
                        type="hidden"
                        name="startDate"
                        id="startDate"
                        value={form.startDate}
                        onChange={handleChange}
                    />
                    {/* <Wysiwyg onChange={handleContentChange} /> */}
                    <hr className={styles.horizon} />
                    <div className={styles.taskButtons}>
                        <button type="submit" className={styles.buttonAdd}>
                            Edit Task
                        </button>
                        <button
                            className={styles.buttonCancel}
                            onClick={toggleModal}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </StyledModal>
        </>
    );
};

export default EditTaskModal;
