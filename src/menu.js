import "./menu.css";
import profile from "./assets/profile.svg";
import search from "./assets/search.svg";
import menuIcon from "./assets/menu-icon.svg";

function Menu() {
  return (
    <div className="menu">
      <div className="menu-container">
        <div className="profile">
          <img src={profile} className="perfil" alt="perfil" />
        </div>
        <div className="search">
          <img src={search} className="search" alt="search" />
        </div>
        <div className="menu-icon">
          <img src={menuIcon} className="menu-icon" alt="menuIcon" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
