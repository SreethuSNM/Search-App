import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Choose from "./components/choose";
import Setup from "./components/setup";
import Finish from "./components/finish";

function MainLayout({ children, activeStep, setActiveComponent }) {
  return (
    <div className="container">
      <Navbar />
      <div className="main-layout">
        <Sidebar activeStep={activeStep} setActiveComponent={setActiveComponent} />
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
}

function App() {
  const [activeStep, setActiveStep] = useState(0);

  const handleSetActiveComponent = (component) => {
    if (component === "choose") setActiveStep(0);
    else if (component === "setup") setActiveStep(1);
    else if (component === "finish") setActiveStep(2);
  };

  return (
    <MainLayout activeStep={activeStep} setActiveComponent={handleSetActiveComponent}>
      {activeStep === 0 && <Choose setActiveComponent={handleSetActiveComponent} />}
      {activeStep === 1 && <Setup setActiveComponent={handleSetActiveComponent} />}
      {activeStep === 2 && <Finish />}
    </MainLayout>
  );
}

export default App;
