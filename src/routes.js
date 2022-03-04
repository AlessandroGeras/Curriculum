import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/pages/home/home";
import Jobs from "./Components/pages/jobs/jobs";
import Skills from "./Components/pages/skills/skills";

const MainRoutes = () => {
    return(
        <Routes>
            <Route
                path="/Curriculum"
                element={<Home />}
            />
            <Route
                path="/jobs"
                element={<Jobs />}
            />
             <Route
                path="/skills"
                element={<Skills />}
            />
        </Routes>
    )
}

export default MainRoutes;