import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function DefaultLayout() {

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </>
    )
}

export default DefaultLayout;