import React from "react";

import "./styles.css";
import Header from "../../Components/Header/index";
import { MdAdd } from 'react-icons/md';
import Table from '../../Components/Table/index';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="card">
          <div className="card-title-container">
            <span className="section-title">My teams</span>
            <div onClick={()=> {}} className="add-teams-button"><MdAdd size="32" color="white"/></div>
          </div>
          <Table/>
        </div>
      </div>
    </>
  );
};

export default Home;
