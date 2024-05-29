import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EventListScreen } from "../pages/EventListScreen";
import { Layout } from "../pages/Layout";
import { EventDetailScreen } from "../pages/EventDetailScreen";

export const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route path='/' element={<EventListScreen />} />
                    <Route path='/detail' element={<EventDetailScreen />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}