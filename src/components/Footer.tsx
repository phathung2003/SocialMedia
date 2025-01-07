import { Home, Search, Notification, User } from "./icons";

export const Footer = () => {
  return (
    <div id="footer">
      <Mobile />
    </div>
  );
};

const Mobile = () => {
  return (
    <div className="footer mobile">
      <div className="icon active" id="homepage">
        <Home props={{ fontSize: 20 }} />
      </div>
      <div className="icon" id="search">
        <Search props={{ fontSize: 20 }} />
      </div>
      <div className="icon" id="notification">
        <Notification props={{ fontSize: 20 }} />
      </div>

      <div className="icon" id="user-profile">
        <User props={{ fontSize: 20 }} />
      </div>
    </div>
  );
};
