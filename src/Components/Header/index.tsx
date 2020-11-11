import React from "react";

import "./styles.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <span className="title">Squad Management Tool</span>
      <div className="user-name">user</div>
    </div>
  );
};

export default Header;
