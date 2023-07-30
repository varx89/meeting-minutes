import React from 'react';
import { useParams } from 'react-router-dom';

const Project = () => {
    const { id } = useParams();
    return (
        <section>
            <div>Project: {id}</div>
        </section>
    );
};

export default Project;
