import React from "react";
import { Logo, Search, User } from "./icons";

export const Header = () => {
  return (
    <div className="header" id="header">
      <div className="logo-container" id="logo">
        <Logo />
        <h4 id="brand-name">Social</h4>
      </div>

      <div className="search-container" id="search-bar">
        <Search props={{ fontSize: 20 }} />
        <input
          type="text"
          className="search-input"
          id="search-input"
          placeholder="Search"
        />
      </div>

      <div className="option-container" id="option">
        <h4 id="option-lable">Log out</h4>
        <User props={{ fontSize: 20 }} />
      </div>
    </div>
  );
};
