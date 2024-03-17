import "./Navbar.css";
import appLogo from "../../assets/vite.svg";
import { useState, useEffect, useRef } from 'react';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const logout = () => {
    // Your logout logic here
    alert("Logging out...");
    // Redirect to logout page or perform other logout actions
  };

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
          <div className="avatar" onClick={toggleDropdown} ref={dropdownRef} >
              {showDropdown && (
                <div className="avatar-content" id="avatarDropdown">
                  <a href="#" onClick={logout}>Logout</a>
                </div>
              )}
            </div>  
        </div>
      </nav>
    </>
  );
}

 

export default Navbar;
