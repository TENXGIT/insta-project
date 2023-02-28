import React from "react";
import { Link } from "react-router-dom";
import "./stylenav.css"
import camara from "../images/camara.png"
import camara1 from "../images/circle.png"

const Nav=()=>{
    return(
      <div id="full">
        <div id="nav">
       
          <div id="part1">
          <img id="cam1" src={camara1} alt="no image" /> 
          <h1 id="name1"><i>Instaclone</i></h1>
         <Link  to="/Form"> <img id="cam"src={camara} alt="no image" /> </Link>
          </div>
        
          
          
          
         
          
          
         

        </div>
        </div>
    )
}
export default Nav