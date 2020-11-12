import React from "react";
import { MdDelete, MdEdit, MdShare } from "react-icons/md";
import "./styles.css";

const Table: React.FC = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Barcelona</td>
          <td>
            <div className="description-cel">
              <span>Barcelona Squad</span>
              <div className="actions-button">
                <MdDelete aria-label="Delete" />
                <MdShare aria-label="Share"/>
                <MdEdit aria-label="Edit"/>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Barcelona</td>
          <td>
            <div className="description-cel">
              <span>Barcelona Squad</span>
              <div className="actions-button">
                <MdDelete aria-label="Delete" />
                <MdShare aria-label="Share"/>
                <MdEdit aria-label="Edit"/>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Barcelona</td>
          <td>
            <div className="description-cel">
              <span>Barcelona Squad</span>
              <div className="actions-button">
                <MdDelete aria-label="Delete" />
                <MdShare aria-label="Share"/>
                <MdEdit aria-label="Edit"/>
              </div>
            </div>
          </td>
        </tr>
        
      </tbody>
    </table>
  );
};

export default Table;
