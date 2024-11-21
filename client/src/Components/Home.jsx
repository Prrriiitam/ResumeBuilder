import React from 'react'
import cv3 from "./Images/cv3.png";


const Home = () => {

  
  return (
    
    <>
     <div className="container-fluid main_header">
       <div className="row">
           <div className="col-md-10 col-12 mx-auto">
           <div className="row">
            <div className="col-md-6 col-12 main_header_left">
              <p>welcome to my CV Builder app</p>
              <h1>Get Your latest <span className="text-clr">personalized CV  </span> </h1>
              <a href="/cv"><button>Check Now</button></a>
            </div>
            


           <div className="col-md-6 col-12 main_header_right">
           <img src={cv3} className=" w-100" alt="..." />

           
            

           </div>


          </div>

           </div>
       </div>
   </div>
    </>
  )
}

export default Home