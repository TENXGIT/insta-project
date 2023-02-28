import React from 'react';
import "./style.css"
import { Link } from 'react-router-dom';
import img from "../images/lens.png"


export default function Landing_page() {
  return (
    <>
    <div id="enter">
     <img src={img} alt="no image" />
    <h1>10x team 04</h1>
   <Link to="/post_view">
    <button> enter</button>
   </Link>
   </div>
     
     </>
  
  );
}
