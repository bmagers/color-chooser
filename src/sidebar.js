import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = props => {

  return (
    <div className="sidebar">
      <button onClick={props.handleClick}>Random Color</button>
      <ul>
        <li><Link to="/listView/0">Red</Link></li>
        <li><Link to="/listView/13">Orange</Link></li>
        <li><Link to="/listView/26">Yellow</Link></li>
        <li><Link to="/listView/39">Green</Link></li>
        <li><Link to="/ListView/52">Blue</Link></li>
        <li><Link to="/listView/65">Purple</Link></li>
        <li><Link to="/listView/78">Brown</Link></li>
        <li><Link to="/listView/91">Gray</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;