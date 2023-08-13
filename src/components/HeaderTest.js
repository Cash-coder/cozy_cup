import React from "react";
import './ui/HeaderTest.css';
export default function HeaderTest( ){

  return (
      <div className="navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <div className="dropdown">
          <button className="dropbtn">Dropdown
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
  )
}