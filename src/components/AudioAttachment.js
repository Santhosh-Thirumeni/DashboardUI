import { useState, useEffect } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import "../styles/AudioAttachment.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faRecordVinyl, faStop, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

/**Component to record audio and send data to parent */
const AudioAttachment = (props) => {
  /**State to store the recorder is open or in close condition */
  const [canShowAudioRecorder, setCanShowAudioRecorder] = useState(false);

  /**Whenever the post is submitted the recorder will be closed */
  useEffect(()=>{
    setCanShowAudioRecorder(false);
  },[props.submit])
  return(
    <>
  {canShowAudioRecorder && <div>
    <ReactMediaRecorder
    onStop={(blobUrl,blob)=>{let reader = new FileReader();
      reader.readAsDataURL(blob); 
      reader.onloadend = function() {
        let base64data = reader.result;                
        props.audio(base64data);
      }}}
      audio
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div className="audio-attachment-container">
          <div className="audio-preview-container">
          {status!=="idle" && <p>{status}</p>}
          <audio src={mediaBlobUrl} controls />
          </div>
          <div className="audio-options-container">
          
          <FontAwesomeIcon icon={faMicrophone} size={"lg"} onClick={startRecording} className="start-recording"/>
          
          <FontAwesomeIcon icon={faStop} size={"lg"} onClick={stopRecording} className="stop-recording"/>
          </div>
          
        </div>
      )}
    />
  </div>}
  <div className="say-it-container" onClick={()=>{setCanShowAudioRecorder(!canShowAudioRecorder); props.audioState(canShowAudioRecorder);}}>
 {!canShowAudioRecorder &&  <FontAwesomeIcon icon={faMicrophone}/>}
  <div>{canShowAudioRecorder? <FontAwesomeIcon icon={faCircleXmark} size={"xl"}/>: "Say it"}</div>
  </div>
  </>
);
      }

export default AudioAttachment;










































