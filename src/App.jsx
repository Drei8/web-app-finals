import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from './components/Menu';
import LandingPage from './components/LandingPage';
import GetMeasurements from './components/GetMeasurements';
import Closet from './components/Closet';
import Profile from './components/Proffile';
// Import your VirtualTryOn component when you create it
// import VirtualTryOnComponent from './components/VirtualTryOnComponent';



function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currImageIndex, setCurrImageIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [tryOnClothImage, setTryOnClothImage] = useState(null); // State for selected apparel path


  useEffect(() => {
    // Reset currImageIndex when navigating away from Landing Page (if activeIndex is not null)
    // or when returning to Landing Page (if activeIndex becomes null)
    // This ensures animations or image sequences in LandingPage reset correctly.
    if (activeIndex !== null) {
      setCurrImageIndex(0);
    }
  }, [activeIndex]);

  useEffect(() => {
    // This logic seems specific to an interaction in LandingPage influencing the Menu.
    if (activeIndex === null && currImageIndex === 8) { // Ensure this only applies on Landing Page
      setHoveredIndex(0);
      console.log('Landing page currImageIndex is 8, setting hoveredIndex for Menu to 0');
    } else if (activeIndex !== null || currImageIndex !== 8) { // Reset if not on landing or not image 8
      setHoveredIndex(null);
    }
  }, [currImageIndex, activeIndex]); // Added activeIndex dependency

  // This function is called from Closet's handleItemClick
  // It ONLY stores the path of the selected apparel for later use by VirtualTryOnComponent.
  // It does NOT navigate.
  const handleSelectApparelPath = (path) => {
    console.log("Apparel path selected for try-on:", path);
    setTryOnClothImage(path);
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <Menu
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex} // Pass this if Menu needs to set it, otherwise driven by App.jsx
        />
      </aside>
      <main className="main-content">
        {activeIndex === null && <LandingPage currImageIndex={currImageIndex} setCurrImageIndex={setCurrImageIndex} />}
        {activeIndex === 0 && <GetMeasurements />}
        {activeIndex === 2 && (
          <Closet
            onSelectApparel={handleSelectApparelPath} // To inform App about the selected image path
            setSelectedMenu={setActiveIndex}         // To allow Closet's modal to navigate
          />
        )}
        {/*
          Placeholder for your Virtual Try On component.
          It will use the `tryOnClothImage` state.
          Example:
          {activeIndex === 3 && <VirtualTryOnComponent apparelImagePath={tryOnClothImage} />}
        */}
        {activeIndex === 3 && (
          <div>
            <h2>Virtual Try-On Screen</h2>
            <p>Selected Apparel: {tryOnClothImage || "None"}</p>
            {/* Add your VirtualTryOnComponent here, passing tryOnClothImage */}
            {/* e.g., <VirtualTryOnComponent imageToTryOn={tryOnClothImage} /> */}
          </div>
        )}

        {activeIndex === 1 && (
          <div>
            <Profile></Profile>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;