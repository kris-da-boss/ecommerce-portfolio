import { useState } from 'react'
import products from '../../product'
import './Search.css'
import { Link } from 'react-router'


export default function Search({displaySearch, setDisplaySearch}){
    const [userSearchDisplay, setUserSearchDisplay]=useState('');
    displaySearch?document.body.style.overflow='hidden':document.body.style.overflow='auto';

//  Search Function
  function onChangeFunc(event){
  const userSearch=event.target.value
  const filter= userSearch===''?[{name:''}]:products.filter(product=> product.name.toLowerCase().includes(userSearch.toLowerCase()));
  
  const display=filter.length===0?'No Item matched your Search':filter.map(product=> 
  product.name===''?<p key={crypto.randomUUID()}>Search for Products</p>:
  <p key={crypto.randomUUID()} >
  <Link className='userSearch' to={`description/${product.name}`} onClick={()=> setDisplaySearch(false)}>{product.name}</Link></p>)
  setUserSearchDisplay(display)
  }
  
    return (
         <div className='Search'>
            <div className='introDiv'>
           <h3>SEARCH MARA'S BEAUTY</h3>
           <button onClick={()=> setDisplaySearch(false)}>close</button>
            </div>
            <input type="text"  placeholder='search products and brands' onChange={onChangeFunc}/>
          <div >
            {userSearchDisplay}
          </div>
          
         </div>
    )
}