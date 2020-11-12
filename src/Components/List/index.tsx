import React from "react";

import "./styles.css";

const List: React.FC = () => {
  return (
    <ul className="list-container">
      <li className="list-item">
        <span>Inter Milan</span>
        <span className="age-value">31.1</span>
      </li>
      <li className="list-item">
        <span>Inter Milan</span>
        <span className="age-value">31.1</span>
      </li>
      <li className="list-item">
        <span>Inter Milan</span>
        <span className="age-value">31.1</span>
      </li>
      <li className="list-item">
        <span>Inter Milan</span>
        <span className="age-value">31.1</span>
      </li>
      <li className="list-item">
        <span>Inter Milan</span>
        <span className="age-value">31.1</span>
      </li>
    </ul>
  );
};

export default List;
