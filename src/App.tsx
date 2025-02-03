import './App.css'
import {Menu} from "./components/menu-component/Menu.tsx";
import {Outlet} from "react-router";

function App() {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    )
}

export default App;