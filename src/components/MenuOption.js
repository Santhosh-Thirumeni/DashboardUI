import "../styles/MenuOption.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
const MenuOption = (props) => {
  return (
    <NavLink to={props.link}
     className="navlink" style={({isActive})=>{return isActive ? {backgroundColor: "#801f56", color: "white"}: {}}}>
    <div className="menu-options-container">
      <div className="icon-content-container">
        <FontAwesomeIcon icon={props.icon} className="icon" />
        <div>{props.option}</div>
      </div>
      <div className="no-of-contents">{props.noOfContents}</div>
    </div>
    </NavLink>
  );
};
export default MenuOption;
