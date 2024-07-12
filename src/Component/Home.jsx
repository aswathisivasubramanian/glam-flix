import React from 'react'
import "./Home.css"
import Logo from "./images/Screenshot 2024-07-12 112952.png";
import {Link} from "react-router-dom"
export default function Home() {
  return (
   
    <div className='home'>
      <img src={Logo} />
      <div style={{
        marginTop:"100px"
      }}>
      <h1 style={{marginLeft:"200px",letterSpacing:"6px"}}>
Welcome To Glam Flix
</h1>

      <h2 style={{marginLeft:"400px",letterSpacing:"6px"}}>Your beauty fantasy</h2>
      <div style={{marginLeft:"300px",marginTop:"50px"}}>
<a>
 <Link style={{
  backgroundColor:"black",color:"white",display:"inline",borderRadius:"30px",paddingTop:"8px",paddingBottom:"8px",paddingLeft:"8px",paddingRight:"12px",boxShadow:"4px 4px "
 }} to="/products"> Go to site </Link>
</a>
</div>
      </div>
    </div>
  )
}
