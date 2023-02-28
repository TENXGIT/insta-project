import React from "react";
import Nav from "../header/nav";
import { Link } from "react-router-dom";
import "./Style.css"  
const Form=()=>{
    return(
        <>
        <div>
            <Nav/>
         </div>

         <form>
       <div id="main">
         

        <div id="part1">
        <input id="input" type="text" required/>
       <input type="button" value={"Browser"} />
       </div>

       <div id="part2">
        <input type="text" placeholder={"Author"}  required />
       <input type="text" placeholder="Location" required />
       </div>

       <div id="part3">
        <input id="input1" type="text" placeholder={"Discription"} required/>
       </div>

       <div id="part4">
        <Link to="/Post"><input id="input2" type="button" value={"post"} required/></Link>
        </div>
      

        </div>
        </form>
        </>
       
    )
}
export default Form