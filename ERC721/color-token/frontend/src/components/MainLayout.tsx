import { FC, ReactNode } from "react";

type Props = {
    Navbar: ReactNode;
    Sidebar: ReactNode;
};

const MainLayout: FC<Props> = ({ children, Navbar, Sidebar }) => {
    return (
        <div id="wrapper" className="mb-1">
            {Sidebar}
            {Navbar}
            {children}
        </div>
    );
};

export default MainLayout;
