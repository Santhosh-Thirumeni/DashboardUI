import "../styles/Modal.scss";
import {React, useState} from "react";
import ReactDOM from "react-dom"

function Modal( props) {
    const [canDeletePost, setCanDeletePost] = useState(true);
    const postDeleteHandler = () => {
        setCanDeletePost(!canDeletePost);
        props.onPostDelete(canDeletePost);
      };
  return ReactDOM.createPortal(
    <div className="modal-background">
      <div className="modal-container">
        <div className="close-button">
          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          Are You Sure You Want to Delete?
        </div>
 
        <div className="modal-button-container">
          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
            id="cancel-button"
          >
            Cancel
          </button>
          <button onClick={postDeleteHandler}>Delete</button>
        </div>
      </div>
    </div>
  , document.getElementById("portal"));
}

export default Modal;