import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EventList } from "../pages/EventList";

export const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<EventList />} />
            </Routes>
        </BrowserRouter>
    )
}