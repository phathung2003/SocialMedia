import React from "react";
import {
  LogoWeb,
  LogoMobile,
  Search,
  User,
  Send,
  LeftArrow,
  More,
} from "./icons";

export const Header = () => {
  return (
    <>
      <WebHeader />
      <MobileHeader_Search />
    </>
  );
};

/* Web */
const WebHeader = () => {
  return (
    <div className="header web" id="header">
      <div className="logo container" id="logo">
        <LogoWeb props={{ fontSize: 40 }} />
        <label id="brand-name">Social</label>
      </div>

      <div className="search container" id="search-bar">
        <Search props={{ fontSize: 20 }} />
        <input type="text" id="search-input" placeholder="Search" />
      </div>

      <div className="option container" id="option">
        <label id="option-lable">Logout</label>
        <User props={{ fontSize: 20 }} />
      </div>
    </div>
  );
};

/* Mobile */
export const MobileHeader_Login = () => {
  return (
    <div className="header single-element mobile">
      <div className="logo container" id="logo">
        <LogoMobile props={{ fontSize: 32 }} />
        <label id="brand-name">Social</label>
      </div>
    </div>
  );
};

export const MobileHeader_Main = () => {
  return (
    <div className="header mobile">
      <div className="logo container" id="logo">
        <LogoMobile props={{ fontSize: 32 }} />
        <label id="brand-name">Social</label>
      </div>

      <div id="message">
        <Send props={{ fontSize: 20 }} />
      </div>
    </div>
  );
};

export const MobileHeader_Message = () => {
  return (
    <div className="header mobile">
      <div className="back container" id="back">
        <LeftArrow props={{ fontSize: 20 }} />
        <label id="back-lable">Back</label>
      </div>

      <div className="account-status container" id="account-status">
        <label id="account-status-lable">Online</label>
        <More props={{ fontSize: 20 }} />
      </div>
    </div>
  );
};

export const MobileHeader_Search = () => {
  return (
    <div className="header single-element mobile">
      <div className="search container" id="search-bar">
        <Search props={{ fontSize: 20 }} />
        <input type="text" id="search-input" placeholder="Search" />
      </div>
    </div>
  );
};
