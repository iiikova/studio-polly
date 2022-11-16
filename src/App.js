import Layout from "./components/Layout/Layout";
import Navigation from "./components/Navigation/Navigation";
import Router from "./Router";
import {Outlet} from "react-router";

function App() {
    return (
        <>
            <Navigation/>
            <Router/>
            <Outlet/>
        </>
    );
}

export default App;
