import "../styles/SeeOptionsButton.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
const SeeOptionsButton = (props) =>{
    /**State for storing button click state of see more button */
    const [seeMore, setSeeMore] = useState(false);
    /**Function for updating the state and to send the state to parent component */
    const clickHandler = () =>{
        setSeeMore(!seeMore);
        props.onClick(seeMore);
    }
return(
    <>
    <div className="see-options-button-container" onClick={clickHandler}>
    <button className="see-options-button">{props.children}</button>
    <FontAwesomeIcon icon={props.icon} />
    </div>
    </>
)
}

export default SeeOptionsButton;