import Card from "./Card";
import "../styles/CreatePost.scss";
import AnyAttachment from "./AnyAttachment";
import {
  faPaperclip,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CameraAttachment from "./CameraAttachment";
import AudioAttachment from "./AudioAttachment";
import TextareaAutosize from 'react-textarea-autosize';

/**TO CREATE POST **/
const CreatePost = (props) => {
  /**State to store the submit status of the Post */
    const [isSubmitted, setIsSubmitted] = useState(false);
/**Default states of Camera and audio recorder components */
    const [cameraIsClosed, setCameraIsclosed] = useState(true);
    const [microphoneIsClosed, setMicrophoneIsClosed] = useState(true);
  const [post, setPost] = useState({
    name: "Thomas Jacob",
    designation: "Software Engineer",
    message: "",
    attachment: "",
    createdAt: "",
    fileType: "",
    fileName: "",
    photo: "",
    audio: ""
  });
  /**Update the camera and audio states from the child component's data */

  const camera = (receivedCameraState) =>{
    setCameraIsclosed(receivedCameraState);
  }
  const audioState = (receivedAudioState) =>{
    setMicrophoneIsClosed(receivedAudioState);
  }


  /**State for managing user input */
  const [userMessage, setUserMessage] = useState("");

  /**To add attachment to object */
  const updatePostAttachment = (receivedImage) => {
    setPost({ ...post, attachment: receivedImage });
  };

  /**TO ADD INPUT MESSAGE TO STATE */
  const inputHandler = (event) => {
    setUserMessage(event.target.value);
  };

  /**TO SUBMIT POST */
  const submitHandler = (event) => {
    event.preventDefault();
    if (userMessage.replace(/\s/g, "") === "" && (post.attachment)==="" && (post.photo)=== "" && (post.audio) === "") {alert("Post should not be empty"); return;}
    props.newPost({ ...post, message: userMessage });
    setUserMessage("");
    setPost({
    name: "Thomas Jacob",
    designation: "Software Engineer",
    message: "",
    attachment: "",
    createdAt: "",
    fileType: "",
    fileName: "",
    photo: "",
    audio: ""
    })
    setIsSubmitted(!isSubmitted);
    

  };

  /**PASS FILE TYPE AND FILE NAME OF ATTACHMENT TO PARENT */
  const setFileDetails = (receivedFileType, receivedFileName) => {
    setPost({ ...post, fileType: receivedFileType, fileName: receivedFileName})
  };

  /**Add captured image to the object */
  const addPhoto = (receivedPhoto) =>{
    setPost({...post, photo: receivedPhoto})
  }
  /**Add captured audio recording to the object */

  const audio = (receivedAudio) =>{
    setPost({...post, audio: receivedAudio})
  }
 
  return (
    <Card className="create-post">
      <form className="image-input-container" onSubmit={submitHandler}>
        <img
          src={require("../assets/ProfilePicture.png")}
          className="user-image-container"
          alt="Profile"
        ></img>
        <TextareaAutosize
          maxRows={6}
          placeholder="Share something here"
          onChange={inputHandler}
          value={userMessage}
          className="post-input"
        ></TextareaAutosize>
        <button>
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            size={"2xl"}
            className="post-button"
          />
        </button>
      </form>
      <div className={`add-attachments-container ${(!cameraIsClosed || !microphoneIsClosed) && `flex-change`}`}>
        <AnyAttachment
          icon={faPaperclip}
          attachmentType="Any attachment"
          attachment={updatePostAttachment}
          setFileDetails={setFileDetails}
          submit={isSubmitted}
        />
        <CameraAttachment addPhoto={addPhoto} cameraIsClosed={camera} submit={isSubmitted}/>
        <AudioAttachment audio={audio} audioState={audioState} submit={isSubmitted}/>
    
      </div>
    </Card>
  );
};
export default CreatePost;






















