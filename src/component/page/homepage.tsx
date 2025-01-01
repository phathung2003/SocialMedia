import "@/component/css/homepage.css";

export default function HomePage() {
  return (
    <div>
      <div className="header" id="header">
        <div className="logo-container" id="logo">
          <img src="/logo.svg" className="logo" alt="logo" />
          <p id="brand-name">Social</p>
        </div>

        <div className="search-container" id="search-bar">
          <img
            src="/icon/search.svg"
            className="icon search-icon"
            alt="search-icon"
            id="search-icon"
          />
          <input
            type="text"
            className="search-input"
            id="search-input"
            placeholder="Search"
          />
        </div>

        <div className="option-container" id="option">
          <p id="option-lable">Log out</p>
          <img
            src="/icon/user.svg"
            className="icon"
            alt="user-icon"
            id="user-icon"
          />
        </div>
      </div>

      <div className="body" id="body">
        Body info section
      </div>
    </div>
  );
}
