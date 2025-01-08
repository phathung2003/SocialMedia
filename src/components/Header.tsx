import { LogoWeb, Search, Send, User } from "./icons";

export const Header = () => {
  return (
    <div className="wrapper_header">
      <div className="wrapper_child">
        <div className="logo">
          <LogoWeb props={{ fontSize: 40 }} />
          <label className="font-manrope text-[20px] font-extrabold">
            Social
          </label>
        </div>

        <div className="search">
          <span className="search-icon absolute left-6">
            <Search props={{ fontSize: 20 }} />
          </span>
          <input type="text" placeholder="Search" />
        </div>

        <div className="user">
          <label>Logout</label>
          <User props={{ fontSize: 20 }} />
        </div>
      </div>
    </div>
  );
};

export const HeaderMobile = () => {
  return (
    <div className="wrapper_header_mobile">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <LogoWeb props={{ fontSize: 40 }} />
          <label className="font-manrope text-[20px] font-extrabold">
            Social
          </label>
        </div>
        <span>
          <Send />
        </span>
      </div>
    </div>
  );
};
