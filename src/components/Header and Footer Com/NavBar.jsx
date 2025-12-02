import { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router'
export default function NavBar({displayNav, setDisplayNav}){
    const [dropDownOpen, setDropDownOpen]=useState(false);
    const display=`NavBar ${displayNav?'open':''}`
    if(displayNav){
        document.body.style.overflow='hidden'
    }else{
        document.body.style.overflow='auto'
    }

    const navCategories=[
        {name:'Wigs',
        to:'category',
        category:'Wigs'
        },
        {name:'Hair Extensions',
        to:'category',
        category:'Hair Extensions'
        },
        {name:'Braids',
        to:'category',
        category:'Braids'
        },
        {name:'Closures & Frontals',
        to:'category',
        category:'Closures & Frontals'
        },
        {name:'Hair Care',
        to:'category',
        category:'Hair Care'
        },
        {name:'Accessories',
        to:'category',
        category:'Accessories'
        },
    ].map((nav)=> {
        return(
            <p key={crypto.randomUUID()}>
                <Link to={`category/${nav.category}`}onClick={closeNav} >{nav.category}</Link></p>
        )
    })

    function closeNav(){
     setDisplayNav(false)
    }
    function changeDropDown(){
        setDropDownOpen(!dropDownOpen)
    }
         const  spanDropDown = dropDownOpen ?<span>&#9652;</span> :<span>&#9662;</span>
   
        
    
    return (
        <div className={display}>
        <div className={`${displayNav?'DisplayNav':'CloseNav'}`}>
            <header className='nav-header'>
             <button className='closeIcon' onClick={closeNav}>Close</button>
            </header>
            <hr/>
            {/* Nav */}
           <div className='navList'>
            <p><Link to='/' onClick={closeNav}>Home</Link></p>
            <p><Link to='shop' onClick={closeNav}>All Products</Link></p>
             <details>
                <summary className='details summary' onClick={changeDropDown}>
                   <p>VIEW COLLECTIONS</p> 
                {spanDropDown}
                </summary>
                <div className='categoryList'>
                {navCategories}
                </div>
            </details>
           <p><Link to='BlogDetails' onClick={closeNav}>Blog</Link></p>
           <hr/>
           <p>About</p>
           <p>Contact/ Support</p>
           <p>Go to Cart</p>
           <p>Account Login</p>
           </div>
        </div>
        </div>
    )
}