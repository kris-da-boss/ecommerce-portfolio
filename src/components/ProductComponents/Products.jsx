import { Link } from "react-router"
import { useState } from "react";
export default function Products({image, name, price, productId, addToCart, added, filter}){
const [itemQuantity, setItemQuantity]=useState(1);
const container=filter==='featured'?'featuredProduct':'homeProduct';

return(      
                 <div className={container} >
                 <Link to={`/description/${name}`}
                 onClick={()=> window.scrollTo(0,0)}
                 >
                 <img src={image} alt="" className="image"/>
                 <p className="homeProductName">{name}</p>
                 <p className="homeProductPrice">{`$${price}`}</p> </Link>
                 <div className="add-QuantityDiv">
                 <div className="homeProductQuantity">
                    <button onClick={()=> setItemQuantity(prev=> prev+=1)}>+</button>     
                    <span >{itemQuantity}</span>
                    <button onClick={()=>setItemQuantity(prev=> prev==1?prev:prev-=1 )}>-</button></div> 
                 <button className="homeProductAddButton" onClick={()=>addToCart(productId, itemQuantity)}>{added ?"Added":"Add to Cart"}</button>
                 </div>
                </div>
)}