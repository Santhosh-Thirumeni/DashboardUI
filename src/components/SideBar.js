import { useState } from "react";
import "../styles/SideBar.scss";
import MenuOption from "./MenuOption";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import SeeOptionsButton from "./SeeOptionsButton";
import RecentlyAdded from "./RecentlyAdded";
import { menuOptions } from "../Data";

/**Sidebar component with list of menu options */
const SideBar = (props) => {
  /**State to store the see more button's state */
  const [canHideMoreOptions, setCanHideMoreOptions] = useState(true);
  /**Update the state based on the See options button's state */
  const buttonClickHandler = (receivedButtonState) => {
    setCanHideMoreOptions(receivedButtonState);
  };
  /**Mapping Total menu options */
  const totalMenuOptions = menuOptions.map((option) => {
    return (
      <MenuOption
        icon={option.icon}
        option={option.option}
        noOfContents={option.noOfContents}
        key={option.key}
        link={option.link}
      />
    );
  });
  /**Slice the menu options to 7 options */
  const slicedMenuOptions = menuOptions.slice(0, 7).map((option) =>  (
      <MenuOption
        icon={option.icon}
        option={option.option}
        noOfContents={option.noOfContents}
        key={option.key}
        link={option.link}
      />
    )
  );
  return (
    <div className={`side-bar ${props.onToggle && `display`}`}>
      <div className="user-profile-container">
        <img
          src={require("../assets/ProfilePicture.png")}
          className="user-image-container"
          alt="Profile"
        ></img>
        <div className="user-name-container">Thomas Jacob</div>
      </div>
      <div className="total-menu-options-container">
        {!canHideMoreOptions ? totalMenuOptions : slicedMenuOptions}
        <SeeOptionsButton
          onClick={buttonClickHandler}
          icon={canHideMoreOptions ? faChevronDown : faChevronUp}
        >
          {canHideMoreOptions ? "See more" : "See less"}
        </SeeOptionsButton>
      </div>
      <RecentlyAdded />
    </div>
  );
};

export default SideBar;
