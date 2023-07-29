import { Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import Layout from './components/Layout';
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
            <Route path="/dashboard" element={<DashboardLayout />}>
                {/* <Route index element /> */}
            </Route>
        </Routes>
    );
}

export default App;
