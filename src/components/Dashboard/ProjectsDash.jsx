import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import moment from 'moment/moment';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContext } from '../../context/userContext';
import styles from './ProjectsDash.module.css';

const Projects = () => {
    const initialProject = {
        project: '',
        textAreaDesc: '',
    };
    const { user } = useContext(UserContext);

    const [apiData, setApiData] = useState(user);
    const [addProject, setAddProject] = useState(initialProject);

    useEffect(() => {
        if (user) {
            axios.get('/projects').then(({ data }) => {
                setApiData(data);
            });
        }
    }, [user, addProject]);

    const handleChange = (e) => {
        const value = e.target.value;
        setAddProject({
            ...addProject,
            [e.target.name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put('/addproject', addProject);
            if (response.data.error) {
                toast.error(response.data.error);
            } else if (response.data.success) {
                setAddProject({});
                toast.success(response.data.success);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section>
            <div>
                <h1 className={styles.h1}>To Do Projects</h1>
                <div className={styles.body}>
                    {apiData && apiData.length >= 1
                        ? apiData.map((project, index) => {
                              return (
                                  <article
                                      key={index}
                                      className={styles.project}
                                  >
                                      <ul className={styles.ulDesc}>
                                          <li>
                                              <h4>
                                                  <FontAwesomeIcon
                                                      icon="fa-solid fa-diagram-project"
                                                      style={{
                                                          color: '#37282d',
                                                      }}
                                                      size="xs"
                                                  />
                                                  <span
                                                      className={
                                                          styles.projTitle
                                                      }
                                                  >
                                                      {project.title}
                                                  </span>
                                              </h4>
                                              <div className={styles.critical}>
                                                  <FontAwesomeIcon
                                                      icon="fa-solid fa-flag"
                                                      style={{ color: 'gray' }}
                                                      size="xs"
                                                  />
                                                  <span
                                                      className={
                                                          styles.projTitle
                                                      }
                                                  >
                                                      0
                                                  </span>
                                                  <FontAwesomeIcon
                                                      icon="fa-brands fa-hotjar"
                                                      style={{
                                                          color: '#ff0000',
                                                      }}
                                                      size="xs"
                                                  />
                                                  <span
                                                      className={
                                                          styles.projTitle
                                                      }
                                                  >
                                                      0
                                                  </span>
                                              </div>
                                          </li>
                                          <li>
                                              <span
                                                  className={styles.description}
                                              >
                                                  {project.description}
                                              </span>
                                          </li>
                                          <li>
                                              <div
                                                  className={styles.statusGrid}
                                              >
                                                  <span className={styles.date}>
                                                      <FontAwesomeIcon icon="fa-regular fa-calendar-plus" />
                                                      Date
                                                  </span>
                                                  <span className={styles.date}>
                                                      <FontAwesomeIcon icon="fa-regular fa-calendar-xmark" />
                                                      End
                                                  </span>
                                                  <span
                                                      className={styles.dateB}
                                                  >
                                                      {moment(
                                                          project.startDate
                                                      ).format('YYYY-MM-DD')}
                                                  </span>
                                                  <span
                                                      className={styles.dateB}
                                                  >
                                                      {project.closeDate
                                                          ? moment(
                                                                project.closetDate
                                                            ).format(
                                                                'YYYY-MM-DD'
                                                            )
                                                          : 'Ongoing'}
                                                  </span>
                                              </div>
                                          </li>
                                          <li>
                                              <Link
                                                  className={styles.viewProject}
                                                  to={
                                                      '/auth/dashboard/project/' +
                                                      project._id
                                                  }
                                              >
                                                  Manage
                                              </Link>
                                          </li>
                                      </ul>
                                  </article>
                              );
                          })
                        : ''}

                    <article className={styles.project}>
                        <form
                            onSubmit={handleSubmit}
                            className={styles.newProject}
                        >
                            <span>Add new project</span>
                            <input
                                className={styles.input}
                                maxLength={16}
                                type="text"
                                name="project"
                                id="project"
                                value={addProject.project}
                                placeholder={`Project's name...`}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                className={styles.textAreaProj}
                                name="textAreaDesc"
                                id="textAreaDesc"
                                cols="30"
                                rows="2"
                                value={addProject.textAreaDesc}
                                placeholder="Description..."
                                onChange={handleChange}
                                required
                            ></textarea>
                            <button type="submit" className={styles.submit}>
                                <FontAwesomeIcon
                                    icon="fa-solid fa-circle-plus"
                                    style={{ color: 'gray' }}
                                    size="xl"
                                />
                            </button>
                        </form>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Projects;
