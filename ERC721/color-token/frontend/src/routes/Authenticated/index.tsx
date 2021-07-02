import qs from "query-string";
import { Navigate, Outlet } from "react-router-dom";

import MainLayout from "../../components/MainLayout";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Authenticated = () => {
    return (
        <MainLayout Navbar={<Navbar />} Sidebar={<Sidebar />}>
            <Outlet />
        </MainLayout>
    );
};

export default Authenticated;
