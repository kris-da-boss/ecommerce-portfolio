import { Link } from "react-router"
import { useState } from "react"
import "./header-footer.css"
import NavBar from "./NavBar"
import Search from "./Search"
import {ShoppingCart, User, SearchIcon, Menu, Home} from 'lucide-react'
export default function Header(){
  const [displayNav, setDisplayNav]= useState(false);
  const [displaySearch, setDisplaySearch]=useState(false);
  
  

  function openNav(){
     setDisplayNav(true)
  }
    return(
        <>
        <header className="header">
          <Link to="/">
             <img src="/logoImage.png" alt="" width="100" height="100" className="imageLogo"/>
          </Link>
          <div className="headerIcon">
            <button onClick={()=> setDisplaySearch(true)}><SearchIcon/></button>
           <Link to='cart'><button><ShoppingCart/></button></Link>
            <button><User/></button>
            <button onClick={openNav}><Menu/></button>
          </div>
        </header>
         {/* Open NavBar */}
      <NavBar 
      displayNav={displayNav}
      setDisplayNav={setDisplayNav}/>
      {/* Open Search */}
      {displaySearch && <Search
      displaySearch={displaySearch}
      setDisplaySearch={setDisplaySearch}
      />}
        
        <input type="search"  style={{display:'none'}}/>
       </>
    )
}