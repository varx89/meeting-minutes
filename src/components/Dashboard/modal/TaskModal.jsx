import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React, useState } from 'react';
import Modal from 'styled-react-modal';
import noimageTask from '../../../media/no-image-found.png';
import userImg from '../../../media/user.png';
import styles from './TaskModal.module.css';

const StyledModal = Modal.styled`
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;`;

const TaskModal = ({ callback }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [opacity, setOpacity] = useState(0);

    function toggleModal() {
        setOpacity(0);
        setIsOpen(!isOpen);
        callback(!isOpen);
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
                    <h4>Media Outlets</h4>
                    <FontAwesomeIcon
                        icon="fa-solid fa-rectangle-xmark"
                        style={{ color: 'gray' }}
                        onClick={toggleModal}
                    />
                </div>
                <div className={styles.imageGroupTitle}>
                    <img
                        className={styles.taskImg}
                        src={noimageTask}
                        alt="No Set"
                    />

                    <div className={styles.descContent}>
                        Description Description Description Description
                        Description Description Description
                        DescriptionDescription
                    </div>
                    <div className={styles.description}>
                        <img src={userImg} alt="Andrei Varcus" />
                        <span>Andrei Varcus</span>
                    </div>
                    <hr className={styles.horizontal} />
                    <div className={styles.taskClose}>
                        <div>
                            <FontAwesomeIcon
                                icon="fa-regular fa-calendar"
                                style={{
                                    color: 'black',
                                    paddingRight: '0.2rem',
                                }}
                            />
                            10.04.23 posted
                        </div>

                        <div>
                            <FontAwesomeIcon
                                icon="fa-solid fa-flag"
                                style={{ color: 'gray' }}
                            />

                            <FontAwesomeIcon
                                icon="fa-brands fa-hotjar"
                                style={{
                                    color: '#ff0000',
                                    paddingLeft: '0.5rem',
                                }}
                            />
                        </div>
                    </div>
                    <hr className={styles.horizontal} />
                    <div className={styles.comments}>
                        <div className={styles.commTitle}>Comments</div>
                        <div className={styles.commContent}>
                            <img src={userImg} alt="Andrei Varcus" />
                            <div className={styles.commContentUser}>
                                <div className={styles.commUser}>
                                    <span>Andrei Varcus</span>
                                    <div>
                                        <FontAwesomeIcon
                                            size="xs"
                                            icon="fa-regular fa-clock"
                                            style={{ paddingRight: '0.25rem' }}
                                        />
                                        15:30
                                    </div>
                                </div>
                                <span className={styles.commText}>
                                    Loren ipsum whatever test teste
                                    teststesttett
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Wysiwyg onChange={handleContentChange} /> */}
            </StyledModal>
        </>
    );
};

export default TaskModal;
