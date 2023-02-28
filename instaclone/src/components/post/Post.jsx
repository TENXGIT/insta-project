import React from "react";
import Nav from "../header/nav";
import img from "../images/toy.png"
import img1 from "../images/dog.png"
import img2 from "../images/like.png"
import img3 from "../images/arrow.png"
import "./style2.css"

const Post=()=>{
    return(
        <>
         <div>
            <Nav/>
        </div>
        <div>
         <center>
            <div id="box">
              <nav id="nav5">
                <section >
                <p >bharath</p>
                <p >hyferabad</p>
                </section>
                <p>...</p>
              </nav>

              <div id="image">
                < img id="pho" src={img1} alt="" />
              </div>
            </div>

            <div>
              <div id="lastpart">
                <section>
                <img id="likeimg"src={img2} alt="" />
                <img id="arrowimg"src={img3} alt="" />
                </section>
                <p id="date">25-5-2020</p>
              </div>

            </div>

         </center>
         <center>
         <div id="box">
              <nav id="nav5">
                <section >
                <p >swamy</p>
                <p >goa</p>
                </section>
                <p>...</p>
              </nav>
              <div id="image">
                < img id="pho" src={img} alt="" />
              </div>
            </div>
         </center>
         <center>
         <div id="box">
              <nav id="nav5">
                <section >
                <p >ram</p>
                <p >hyderabad</p>
                </section>
                <p>...</p>
              </nav>
              <div id="image">
                < img id="pho" src={img1} alt="" />
              </div>
            </div>
         </center>
        </div>
        
        </>
    )
    }
    export default Post