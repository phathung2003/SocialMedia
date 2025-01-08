import { Home, Search, Notification } from "./icons";
import "../styles/_common.scss";
import Image from "next/image";

export const WebNavigation = () => {
  return (
    <div className="navigation">
      <p>Test Navigation</p>
    </div>
  );
};

export const MobileNavigation = () => {
  return (
    <div className="navigation_mobile">
      <div className="icon active">
        <Home props={{ fontSize: 20 }} />
      </div>
      <div className="icon">
        <Search props={{ fontSize: 20 }} />
      </div>
      <div className="icon">
        <Notification props={{ fontSize: 20 }} />
      </div>
      <div className="user">
        <Image src={"/test/user.jpg"} width={20} height={20} alt="avt" />
      </div>
    </div>
  );
};
