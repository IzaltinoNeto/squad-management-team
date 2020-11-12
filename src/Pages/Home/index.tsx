import React from "react";

import "./styles.css";
import Header from "../../Components/Header/index";
import { MdAdd } from "react-icons/md";
import Table from "../../Components/Table/index";
import List from "../../Components/List/index";
import { Link } from "react-router-dom";

const Home: React.FC = () => {

  

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="card">
          <div className="card-title-container">
            <span className="section-title">My teams</span>
            <Link to="/create-team" className="add-teams-button">
              <MdAdd size="32" color="white" />
            </Link>
          </div>
          <div className="table-container">
            <Table />
          </div>
        </div>
        <div className="card small-card">
          <div className="card-title-container">
            <span className="section-title">Top 5</span>
          </div>
          <div className="avg-age-sections-container">
            <div className="highest-avg-age">
              <span className="avg-age-sections-title">Highest avg age</span>
              <List />
            </div>
            <div className="highest-avg-age">
              <span className="avg-age-sections-title">Lowest avg age</span>
              <List />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
