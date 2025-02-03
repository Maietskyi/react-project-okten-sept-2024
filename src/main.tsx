import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import {store} from "./redux/store.ts";
import {Provider} from "react-redux";
import {routes} from "./routes/router.tsx";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={routes}/>
    </Provider>
)
