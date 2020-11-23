import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

function Header() {
  return (
    <div className="header" id="header1">
      <div className="header__icons">
        <div className="header__icon header__icon--active">
          <HomeIcon />
          <p>Home</p>
        </div>

        <div className="header__icon">
          <FlashOnIcon />
          <p>Trending</p>
        </div>

        <div className="header__icon">
          <LiveTvIcon />
          <p>Verified</p>
        </div>

        <div className="header__icon">
          <VideoLibraryIcon />
          <p>Collection</p>
        </div>

        <div className="header__icon">
          <SearchIcon />
          <p>Search</p>
        </div>

        <div className="header__icon">
          <PersonOutlineOutlinedIcon />
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://static01.nyt.com/images/2019/02/26/the-weekly/hulu-logo-white/hulu-logo-white-superJumbo.png"
        alt=""
      />
    </div>
  );
}

export default Header;
