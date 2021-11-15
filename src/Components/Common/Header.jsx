import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";

// Material ui ICONS
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato Logo"
        className="logo"
      />

      <div className="header-right">
        <div className="header-location-container">
          <div className="location-wrapper">
            <div className="icon-name">
              <LocationOnIcon
                style={{ color: "#FF7E88"}}
                className="abs-cen"
              />
              <div>Location</div>
            </div>
            <div className="lower-icon">
              <ArrowDropDownIcon 
              style={{ color: "gray" }}
              className="abs-cen" 
              />
            </div>
          </div>
          <div className="location-sep">|</div>
          <div  className="resto-search">
              <div className="search-icon">
                   <SearchIcon/> 
              </div>
              <div className="header-search">
              <input
              className="search-input"
              placeholder="Search for restaurant, cuisine or a dish"
            />
              </div>

          </div>

          

          
        </div>
        <div className="profile">
        <div className="buttons">
              <div className="login">
                  Login
              </div>
              <div className="signup">
                  Sign Up
              </div>

          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Header;
