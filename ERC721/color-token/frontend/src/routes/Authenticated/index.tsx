import MainLayout from "../../components/MainLayout";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Authenticated = () => {
    return (
        <MainLayout Navbar={<Navbar />} Sidebar={<Sidebar />}>
        </MainLayout>
    );
};

export default Authenticated;
