import './App.css'
import {Menu} from "./components/menu-component/Menu.tsx";
import {Outlet} from "react-router";

function App() {
    return (
        <div className="app-component">
            <Menu/>
            <Outlet/>
        </div>
    )
}

export default App;