import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EventList } from "../pages/EventList";
import { Layout } from "../pages/Layout";

export const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route path='/' element={<EventList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}