import "./Navbar.css";
import appLogo from "../../assets/vite.svg";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="left-content">
          <img src={appLogo} alt="logo" />
          <h3>LokeySafe</h3>
        </div>
        <main className="main-content">
          <input
            type="text"
            placeholder="Search your world"
            className="search-input"
          />
        </main>
        <div className="right-content">
          <div className="avatar"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
