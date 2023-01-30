import Card from "./Card";
import "../styles/Post.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faFilePdf, faFile } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "./Modal";
/**Component for handling and rendering single Post */
const Post = (props) => {
 /**State to store the option button's state */
  const [canShowOption, setCanShowOption] = useState(false);
  /**State to store the Delete button's visibility */
  const [canHideDelete, setCanHideDelete] = useState(true);
  /**State to store the Modal's visibility */
  const [canShowModal, setCanShowModal] = useState(false);

  /**Function for updating the option button's state */
  const optionClickHandler = () => {
    setCanShowOption(!canShowOption);
  };
  const postDeleteHandler = (receivedState) => {
    setCanHideDelete(receivedState);
    canHideDelete && props.onDelete(props.value);
  };

  const renderAttachment = () =>{
    switch(props.fileType){
      case "image/png":
        return (props.attachment && <img src={props.attachment} className="post-image"alt="attachment"/>);
      case "image/svg":
        return (props.attachment && <img src={props.attachment} className="post-image"alt="attachment"/>);
      case "image/svg+xml":
        return (props.attachment && <img src={props.attachment} className="post-image"alt="attachment"/>);
      case "image/jpeg":
        return (props.attachment && <img src={props.attachment} className="post-image"alt="attachment"/>);
      case "video/mp4":
        return (props.attachment && <video className="post-image" controls><source src={props.attachment} ></source></video>)
      case "application/pdf":
        return (props.attachment && <a href={props.attachment} download className="post-document" >{<FontAwesomeIcon icon={faFilePdf} className="pdf-icon"/>}{props.fileName}</a>);
      default:
        return (props.attachment && <a href={props.attachment} download className="post-document" >{<FontAwesomeIcon icon={faFile} className="other-document-icon"/>}{props.fileName}</a>);
    }
  }

  return (
    <Card className="post-container">
 
      <div className="post-content-container">
        <div className="profile-container">
          <img
            src={props.profile}
            className="other-user-image"
            alt="Profile"
          ></img>
          <div className="profile-details-container">
            <div className="other-user-name">{props.name}</div>
            <div className="designation">{props.designation}</div>
            <div className="duration">{props.createdAt}</div>
          </div>
        </div>
        <div className="content-container">
        {props.message && <pre className="content">{props.message}</pre>}
        {props.photo && <img src={props.photo} className="post-image" alt=""></img>}
        {renderAttachment()}
        {props.audio && <audio controls="controls" autobuffer="autobuffer" >
   <source src={props.audio}></source>
</audio>}
{console.log(props.deleteAlert)}
</div>
      </div>
      <div>
        <div className="icon-post-options-container">
          <FontAwesomeIcon
            icon={faEllipsis}
            onClick={optionClickHandler}
            className="post-options-icon"
          />
          {props.handleDelete && canShowOption && (
            <div className="post-options-container">
              {/* <div className="delete-post" onClick={postDeleteHandler} > */}
                <div className="delete-post" onClick={() => {
          setCanShowModal(true);
        }}>
                Delete
              </div>
              {canShowModal && <Modal setOpenModal={setCanShowModal} onPostDelete={postDeleteHandler}/>}
              
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Post;
