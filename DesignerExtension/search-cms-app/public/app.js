import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Choose from "./components/choose";
import Setup from "./components/setup";
import Finish from "./components/finish";
import Final from "./components/final"; // New page
import FinishPage from "./components/finishpage";
function MainLayout({ children, activeStep, setActiveComponent }) {
    return (React.createElement("div", { className: "container" },
        React.createElement(Navbar, null),
        React.createElement("div", { className: "main-layout" },
            React.createElement(Sidebar, { activeStep: activeStep, setActiveComponent: setActiveComponent }),
            React.createElement("div", { className: "main-content" }, children))));
}
function App() {
    const [activeStep, setActiveStep] = useState(0);
    const handleSetActiveComponent = (component) => {
        if (component === "choose")
            setActiveStep(0);
        else if (component === "setup")
            setActiveStep(1);
        else if (component === "finish")
            setActiveStep(2);
    };
    return (React.createElement(Router, null,
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(MainLayout, { activeStep: activeStep, setActiveComponent: handleSetActiveComponent },
                    activeStep === 0 && React.createElement(Choose, { setActiveComponent: handleSetActiveComponent }),
                    activeStep === 1 && React.createElement(Setup, { setActiveComponent: handleSetActiveComponent }),
                    activeStep === 2 && React.createElement(Finish, null)) }),
            React.createElement(Route, { path: "/final", element: React.createElement(Final, null) }),
            React.createElement(Route, { path: "/finishpage", element: React.createElement(FinishPage, null) }))));
}
export default App;
