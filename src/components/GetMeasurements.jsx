// App.js
import React, { useState, useEffect } from 'react';
import './GetMeasurements.css';
import Camera from './Camera';

function GetMeasurements() {
    const [firstVisit, setFirstVisit] = useState(true);
    
    // Option A: wrap in a fragment
    return (
        <div className='measurements-tab'>
          {firstVisit && (
            <>
              <div>TANGINAMO</div>
              <button onClick={() => setFirstVisit(false)}>HUH</button>
            </>
          )}
          <div className='main-get-measurements'>
          <Camera className='cameraA'></Camera>
          <div className='sample'>Nyeyeye</div>
          </div>
        </div>
      );
      
    
}

export default GetMeasurements;
