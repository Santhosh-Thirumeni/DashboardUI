import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCameraAlt, faCameraRetro, faRepeat } from "@fortawesome/free-solid-svg-icons";
import "../styles/CameraAttachment.scss"



const videoConstraints = {
  width: 200,
  height: 200,
  facingMode: "user",
};

/**Component to capture image and send data to parent */

const CameraAttachment = (props) => {
  /**State to store the recorder is open or in close condition */
  const [canShowRecorder, setCanShowRecorder] = useState(false);
  /**State to store the captured image */
  const [image, setImage] = useState("");
  const webcamRef = useRef(null);

  /**Send the image state to Create post component whenever it is changed */
  useEffect(() => {
    props.addPhoto(image);
  }, [image]);
  /**To set the default state after submitting the Post */
  useEffect(()=>{
    setDefaultState();
  },[props.submit])

  /**Function to set the default state */
  const setDefaultState = ()=>{
    setImage("")
    setCanShowRecorder(false);
  }

  /**Function to capture photo and update the state */
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  return (
    <div className="webcam-container" >
      {canShowRecorder && <div className="webcam-img">
        {image === "" && canShowRecorder ? (
          <Webcam
            audio={false}
            height={180}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={180}
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={image} alt=""/>
        )}
        {image !== "" ? (
          <div
            onClick={(e) => {
              e.preventDefault();
              setImage("");
            }}
            className="retake-image"
          >
            <FontAwesomeIcon icon={faRepeat} size={"xl"} className="retake-icon"/>
          </div>
        ) : (
          <div
            onClick={(e) => {
              e.preventDefault();
              capture();
              // setButtonIsClicked(!buttonIsClicked);
            }}
            className="capture-image"
          >
            {canShowRecorder ? <FontAwesomeIcon icon={faCameraRetro} size={"xl"}/> : ""}
          </div>
        )}
      </div>}
      <div>
        
        <div className="capture-or-close-container"
          onClick={() => {
            setCanShowRecorder(!canShowRecorder);
            props.cameraIsClosed(canShowRecorder);
            setImage("");
          }}
        >
          {!canShowRecorder && <FontAwesomeIcon icon={faCameraAlt} className="camera-icon"/>}
          {canShowRecorder ? <FontAwesomeIcon icon={faCircleXmark} size={"xl"} className="close-icon"/> : "Capture it"}
        </div>
      </div>
    </div>
  );
};

export default CameraAttachment;



























