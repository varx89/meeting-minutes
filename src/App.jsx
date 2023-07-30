import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Projects from './pages/Dashboard/Projects';
import Home from './pages/Home';
import Login from './pages/Login';
import Redirect from './pages/Redirect';
import Signup from './pages/Signup';

function App() {
    return (
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
            </Route>
        </Routes>
    );
}

export default App;

library.add(fab, fas, far);
