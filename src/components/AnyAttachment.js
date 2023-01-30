import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import "../styles/AnyAttachment.scss";
import { useEffect, useState } from "react";
/* To Add Attachment to Post. Any Attachment Uploaded by the user will be converted to base64 format and will be passed to  CreatePost Component*/
const AnyAttachment = (props) => {
 /*State to store the attachment in base64 format */
  const [attachment, setAttachment] = useState("");

  /* State for checking the attachment is image or not  */
  const [isImage, setIsImage] = useState(false);

  /** State to store the attachment name for displaying in preview and in Post if the attachment type is document */
  const [attachmentName, setAttachmentName] = useState("");


  /**Send the attachment file to Create Post Component whenever the attachment state is changed */
  useEffect(()=>{
    props.attachment(attachment);
  },[attachment])

  /**To close the preview after submitting the Post */
  useEffect(()=>{
   setDefaultState();
  },[props.submit])

  /**Function to set default state of preview after submitting the Post */
  const setDefaultState = ()=>{
    setAttachmentName("") ;
    setAttachment("");
    setIsImage(false);
  }
  
  /**Function to upload the file */

  const uploadAttachment = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    e.target.value=null;
    /**Checking for file type to show image as preview */
    if(file.type === "image/png" || file.type === "image/jpeg"){
      setIsImage(!isImage);
      }
    /**To update the state after uploading the file */
    setAttachment(base64);
    setAttachmentName(file.name);
    
    /**Send file details to Create post inorder to render the post based on the type of the file */
    props.setFileDetails(file.type, file.name)
  
  };

  
  /**Function to convert attachment to base64 */

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <form className={"add-attachment-container"}>
        <div className="attachment-input-container">
          <label htmlFor="files" className="attachment-input">
          <FontAwesomeIcon icon={props.icon} className="attachment-icon"/>
            {props.attachmentType}
          </label>
          <div>
            <input
              type="file"
              id="files"
              className="file-input"
              onChange={(event) => {
                uploadAttachment(event);
              }}
            />
           <div className="preview-container">
            {/* If the attachment is image then show image as preview, else show the document name in preview */}

           {isImage ? <img src={attachment} className="preview-image"></img>: <div>{attachmentName}</div>}
            {attachment && <FontAwesomeIcon icon={faXmark} className="preview-discard-icon" onClick={()=>setDefaultState()}/>}
            </div>
          </div>
        </div>
    </form>
  );
};
export default AnyAttachment;





