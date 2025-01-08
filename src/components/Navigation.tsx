import { Home, Search, Notification } from "./icons";
import { Avatar_Mobile_Navigation } from "./UserInfo";
import "../styles/_common.scss";

export const MobileNavigation = () => {
  return (
    <div className="navigation mobile" id="navigation">
      <div className="icon active" id="homepage">
        <Home props={{ fontSize: 20 }} />
      </div>
      <div className="icon" id="search">
        <Search props={{ fontSize: 20 }} />
      </div>
      <div className="icon" id="notification">
        <Notification props={{ fontSize: 20 }} />
      </div>

      <div id="user-profile">
        <Avatar_Mobile_Navigation />
      </div>
    </div>
  );
};

export const WebNavigation = () => {
  return (
    <div className="navigation web" id="navigation">
      <p>Test Navigation</p>
    </div>
  );
};
