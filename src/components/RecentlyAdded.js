import "../styles/RecentlyAdded.scss";
import { useState } from "react";
import MenuOptions from "./MenuOption";
import SeeOptionsButton from "./SeeOptionsButton";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { recentlyAddedMenuOptions } from "../Data";

/**Component for Recently added menu options list in Sidebar */
const RecentlyAdded = () => {
  /**State to store the see more button's state */
  const [canHideMoreOptions, setCanHideMoreOptions] = useState(true);
  /**Update the state based on the See options button's state */
  const buttonClickHandler = (receivedButtonState) => {
    setCanHideMoreOptions(receivedButtonState);
  };
  /**Mapping Total menu options */
  const totalRecentMenuOptions = recentlyAddedMenuOptions.map((option) =>  (
      <MenuOptions
        icon={option.icon}
        option={option.option}
        noOfContents={option.noOfContents}
        key={option.key}
        link={option.link}
      />
    )
  );
  /**Slice the menu options to 3 options */
  const slicedTotalRecentMenuOptions = recentlyAddedMenuOptions
    .slice(0, 3)
    .map((option) => (
        <MenuOptions
          icon={option.icon}
          option={option.option}
          noOfContents={option.noOfContents}
          key={option.key}
          link={option.link}
        />
      )
    );
  return (
    <div className="total-menu-options-container">
      <div className="heading-recently-added">Recently Added:</div>
      {!canHideMoreOptions ? totalRecentMenuOptions : slicedTotalRecentMenuOptions}
      <SeeOptionsButton
        onClick={buttonClickHandler}
        icon={canHideMoreOptions ? faChevronDown : faChevronUp}
      >
        {canHideMoreOptions ? "See more" : "See less"}
      </SeeOptionsButton>
    </div>
  );
};

export default RecentlyAdded;
