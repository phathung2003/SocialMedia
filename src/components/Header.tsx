import React from "react";
import { LogoWeb, LogoMobile, Search, User } from "./icons";

export const Header = () => {
  return (
    <>
      <WebHeader />
      <MobileHeader_Login />
    </>
  );
};

const WebHeader = () => {
  return (
    <div className="header web" id="header">
      <div className="logo-container" id="logo">
        <LogoWeb props={{ fontSize: 40 }} />
        <h3 id="brand-name">Social</h3>
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
        <p id="option-lable">Logout</p>
        <User props={{ fontSize: 20 }} />
      </div>
    </div>
  );
};

const MobileHeader_Login = () => {
  return (
    <div className="header single-element mobile">
      <div className="logo-container" id="logo">
        <LogoMobile props={{ fontSize: 32 }} />
        <h3 id="brand-name">Social</h3>
      </div>
    </div>
  );
};
