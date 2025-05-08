import React from 'react';
import Webcam from 'react-webcam';
import './Camera.css'; // Make sure this path is correct

const Camera = () => {
  const videoConstraints = {
    facingMode: "user",
  };

  return (
    <div>
      <h2 className='camera-header'>Camera</h2>
      {/* Add a wrapper div for better control and centering */}
      <div className="webcam-container"> {/* Use this class for styling */}
        <Webcam
          audio={false}
          videoConstraints={videoConstraints}
          screenshotFormat="image/jpeg"
          width="100%" // This width is for the unrotated video, relative to its parent
          videoStyle={{ // These styles are applied to the <video> element
            width: "100%", // Makes the unrotated video take 100% width of its direct parent
            height: "auto",
          }}
          className='camera-feedback'
        />
      </div>
    </div>
  );
};

export default Camera;