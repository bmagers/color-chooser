import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h2 className="logo">NEW ENGEN</h2>
      <form>
        <input type="text" name="search" className="search" placeholder="Search" />
      </form>
    </div>
  );
}

export default Header;