import { useState } from "react";
import { Component } from "react";
import './NavbarStyles.css'
import { Link } from "react-router-dom";
import {MenuItems} from "./MenuItems";



class Navbar extends Component {
  
    render(){
  return (
    <nav className='Navbar-items'>
     
    <h1 className='navbar-logo'>Safar </h1>

    <div className="menu-icons">

{/* <svg className="menu" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
  */}
    </div> 

    <ul className="nav-menu">
      {MenuItems.map((item,index)=>{
        return(
          <li  key={index} >

             <Link className={item.cName} to={item.url}>

               <i className="{item.icon}"></i>

        {item.title} </Link>
      </li>

        );
      })}
    
    </ul>
     </nav>
    
  )
}
}

export default Navbar