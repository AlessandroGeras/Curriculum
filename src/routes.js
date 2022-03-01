import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from "./Components/pages/index";
import Jobs from "./Components/pages/jobs/jobs";
import Skills from "./Components/pages/skills/skills";

const MainRoutes = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<Index />}
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