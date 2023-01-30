import "../styles/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faAngleRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

/**Header component */
const Header = (props) => {
  /*State for holding the toggle menu's click state */
  const [canShowMenu, setCanShowMenu] = useState(!false);
  /** Function for changing the menu click state and to pass the state to parent component */
  const clickHandler = () => {
    setCanShowMenu(!canShowMenu);
    props.onClickButton(canShowMenu);
  };
  return (
    <div className="header-fix">
      <header className="header">
        <div className="header-left-container">
          <FontAwesomeIcon icon={faArrowLeft} className="icon-left-arrow" />
          <div className="dashboard">Dashboard</div>
          <FontAwesomeIcon icon={faAngleRight} className="icon-greater-than" />
          <div className="social-feed">Social Feed</div>
        </div>
        <div className="menu-icon-container">
          <FontAwesomeIcon
            icon={faBars}
            className="menu-button"
            onClick={clickHandler}
          />
        </div>
      </header>
    </div>
  );
};
export default Header;
