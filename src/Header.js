import React from "react";
import PinterestIcon from "@material-ui/icons/Pinterest";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SmsIcon from "@material-ui/icons/Sms";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
function Header() {
  return (
    <div className="app__header">
      <div className="header__wrapper">
        <div className="header__logo">
          <IconButton>
            <PinterestIcon className="header__logo__pinterest"></PinterestIcon>
          </IconButton>
        </div>
        <div className="header__button homePage">
          <p>Home</p>
        </div>
        <div className="header__button following">
          <p>Following</p>
        </div>
        <div className="header__search">
          <div className="header__search__container">
            <SearchIcon className="search__icon"></SearchIcon>
            <form action="">
              <input
                type="text"
                placeholder="Search"
                className="search__input"
              />
              <button type="submit">Submit</button>
              {/* <select name="" id="" className="select__pins">
                    <option value="All Pins">All Pins</option>
                    <option value="Your Pins" selected>
                    Your Pins
                    </option>
                    <option value="Videos">Videos</option>
                    <option value="People">People</option>
                    <option value="Boards">Boards</option>
                </select> */}
            </form>
          </div>
        </div>
        <div className="header__menuItems">
          <IconButton>
            <NotificationsIcon className="header__menuItem"></NotificationsIcon>
          </IconButton>
          <IconButton>
            <SmsIcon className="header__menuItem"></SmsIcon>
          </IconButton>
          <IconButton>
            <AccountCircleIcon className="header__menuItem"></AccountCircleIcon>
          </IconButton>
          <IconButton>
            <ExpandMoreIcon className="header__menuItem"></ExpandMoreIcon>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
