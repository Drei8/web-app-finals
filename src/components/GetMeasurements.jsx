// src/components/GetMeasurements.jsx
import React, { useState } from 'react';
import './GetMeasurements.css';
import Camera from './Camera';
import ResultsMeasurements from './ResultsMeasurements';

export default function GetMeasurements() {
  const [firstVisit, setFirstVisit] = useState(true);
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="measurements-tab">
      {firstVisit && (
        <>
          <div>TANGINAMO</div>
          <button onClick={() => setFirstVisit(false)}>HUH</button>
          <button
            onClick={() => {
              setFirstVisit(false);
              setShowResults(true);
            }}
          >
            skibidi
          </button>
        </>
      )}

      {showResults && (
        <ResultsMeasurements onClose={() => setShowResults(false)} />
      )}

      {/* once both flags are false, show your main measurement UI */}
      {!firstVisit && !showResults && (
        <div className="main-get-measurements">
          <Camera className="cameraA" />
          <div className="sample">Nyeyeye</div>
        </div>
      )}
    </div>
  );
}
