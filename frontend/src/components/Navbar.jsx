import React, { useContext } from "react";
// import Logo from "../img/stilr-logo.png"
import { Link } from "react-router-dom";
import "./navbar.css"
// import { AuthContext } from "../context/authContext";



export const Navbar = () => {
  function menuclick(){
    const menupage = document.getElementsByClassName('menupage')
    const menubar1 = document.getElementsByClassName("menubar1")
    const menubar2 = document.getElementsByClassName("menubar2")
    const navbar = document.getElementsByClassName('navbar')
    // console.log(navbar[0].style.borderStyle)
    if(menupage[0].style.top==='-16rem'){
      menupage[0].style.top='2rem';
      menubar1[0].style.display="none";
      menubar2[0].style.display='block';
      navbar[0].style.borderStyle="solid"
    }
    else{
      menupage[0].style.top='-16rem';
      menubar1[0].style.display="block";
      menubar2[0].style.display='none';
      navbar[0].style.borderStyle="hidden"
    }
  }
  
  
  // const { currentUser, logout } = useContext(AuthContext);

  return (
    
    <div className="">
      <div className="navbar flex justify-between items-center bg-[#00695C] h-12 border-b-2  sm:h-16 relative z-10" style={{borderStyle:"hidden"}}>
        <div className="logo w-[20%] ml-2 sm:ml-6 sm:w-[15%] md:w-[15%] lg:w-[10%]">
          <Link to="/">
            {/* <p>Logo</p> */}
            {<img className="" src={'logo.svg'} alt="" />}
          </Link>
        </div>
        <div className="links flex text-white space-x-2 sm:mr-6 mr-4" >
          <div className="hidden  sm:flex  space-x-4 mr-4">
          <Link className="link my-auto text-xs sm:text-lg" to="/?subject=physics">
            <h6 className="">Blogs</h6>
          </Link>
          <Link className="link my-auto text-xs sm:text-lg " to="/?subject=generalScience">
            <h6>Use Case</h6>
          </Link>
          <Link className="link my-auto text-xs sm:text-lg" to="/?subject=chemistry">
            <h6>About us</h6>
          </Link>
          </div>
          <div className="flex">
          
          <Link className="link1 my-auto mr-4" to="/?subject=biology">
            <a className="login-button  font-bold border-0 rounded-lg bg-[#FCE44D] px-2 pt-[6px] pb-[6px] text-[0.9rem] leading-8 sm:px-4 sm:py-2 sm:text-lg" >login</a>
          </Link>
          <Link className="link1 my-auto mr-3" to="/?subject=biology">
            <a className="login-button  font-bold border-0 rounded-lg bg-[#FCE44D] px-2 pt-[6px] pb-[6px] text-[0.9rem] leading-8 sm:px-4 sm:py-2 sm:text-lg" >signup</a>
          </Link>
          
          <a className="menubar1 sm:hidden  my-auto block"  onClick={menuclick}><img className="hover:cursor-pointer" src="hamburger.svg" /></a> 
          <a className="menubar2 sm:hidden my-auto hidden" onClick={menuclick}><img className="hover:cursor-pointer" src="x.svg" /></a>
          </div>

          {/* <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )} */}
          {/* <span className="write">
            {/* <Link className="link" to="/write">
              Create    style={{display:"none"}}
            </Link>}
          </span> */}
        </div>
      </div>
      <div className="menupage transition-all duration-700 absolute w-[100%] z-[1]" style={{top:"-16rem"}}>
        <div className=" flex flex-col space-y-12 justify-center sm:hidden text-center bg-[#00695C] h-[40vh] text-white" >
          <Link className="link text-s sm:text-lg" to="/?subject=physics">
            <h6 className="">Blogs</h6>
          </Link>
          <Link className="link text-s sm:text-lg " to="/?subject=generalScience">
            <h6>Use Case</h6>
          </Link>
          <Link className="link text-s sm:text-lg" to="/?subject=chemistry">
            <h6>About us</h6>
          </Link>
          </div></div>
    </div>
  );
};


// flex  text-white space-x-2 mr-1 sm:space-x-6 sm:mr-8


// px-2 pt-[6px] pb-[6px] text-[0.7rem] leading-8 sm:px-4 sm:py-2 sm:text-lg
// text-[0.7rem] leading-8 px-2 pt-[6px] pb-[6px] sm:px-4 sm:py-2 sm:text-lg
