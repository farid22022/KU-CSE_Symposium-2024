import './Main.css'
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import NavBar from "../../Pages/Shared/NavBar/NavBar";


const Main = () => {
    const location = useLocation();
    const noNavBarFooter = /login|signup/.test(location.pathname);
    return (
        <div className={`main-container } transition-all duration-1000 border-2`}>
            { noNavBarFooter || <NavBar/>}
            <Outlet />
            { noNavBarFooter || <Footer />}
        </div>
    );
};

export default Main;
