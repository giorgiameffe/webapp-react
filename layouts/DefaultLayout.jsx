import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import GlobalContext from "../contexts/GlobalContext";
import { useContext } from "react";
import Footer from "../components/Footer";

function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext);

    return (
        <>
            <Header />
            <main className="container-main">
                <Outlet />
            </main>
            <Footer />
            {isLoading && <Loader />}
        </>
    )
}

export default DefaultLayout;