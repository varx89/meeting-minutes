import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Project from './components/Dashboard/Project';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Projects from './pages/Dashboard/Projects';
import Home from './pages/Home';
import Login from './pages/Login';
import Redirect from './pages/Redirect';
import Signup from './pages/Signup';

axios.defaults.baseURL = process.env.REACT_APP_API_URL; //http://localhost:8000/process.env.REACT_APP_AXIOS_URL
axios.defaults.withCredentials = true;

function App() {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/signup" element={<Signup />} />
                    <Route path="*" element={<Redirect />} />
                </Route>
                <Route path="/auth/dashboard" element={<Dashboard />}>
                    <Route index element={<Projects />} />
                    <Route
                        path="/auth/dashboard/project/:id"
                        element={<Project />}
                    />
                    <Route path="*" element={<Redirect />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

library.add(fab, fas, far);
