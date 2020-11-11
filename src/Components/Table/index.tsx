import React from 'react';

 import  './styles.css';

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
          <td>Barcelona Squad</td>
      </tr>
      </tbody>
      </table>);
}

export default Table;