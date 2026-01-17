import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../features/auth/pages/Login";
import Dashboard from "../../features/project/pages/Dashboard";
import Tasks from "../../features/project/pages/Tasks";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/tasks" element={<Tasks/>}/>
            </Routes>
        </BrowserRouter>
    )
}