import products from "../../product"
import './cart.css'
import { Link } from "react-router"
import { useState } from "react"
import Cartheader from "./Cartheader"
import PurchaseStage from "./PurchaseStage"

export default function Cart({cart, setCart, quantityCount}){
    // calculate subtotal for all products
    const subTotal=cart.reduce((acc, item)=> {
      const productsItem=products.find(product=> product.id===item.productId);
      return(
         acc + productsItem.price * item.quantity
    )}, 0)
    
   const displayCart= cart.map((cartItem)=> {
    // Get Product Details
      const productsItem=products.find((item)=>item.id ===cartItem.productId) 
       //calculate subtotal for Each products
      const Subtotal=productsItem.price * cartItem.quantity
       // Loop and Display Cart
       if(productsItem){
         return (
         <div className="cartProduct" key={crypto.randomUUID()}>
            <div className="cart-name-image">
            <img src={productsItem.image} alt="" width='100' />
            <div>
             <p>{productsItem.name}</p>
             <button onClick={()=> setCart(cart.filter(c=>c.productId!==cartItem.productId))}>REMOVE</button>
            </div>
         </div>
         <div className="cartPrice">
         <p>Price:</p>
          <p>${productsItem.price}</p>
         </div>
         <div className="cartQuantity">
         <p>Quantiy:</p>
         <div className="quantityCount">
         <button onClick={()=>quantityCount(cartItem.productId)}>-</button>
         <p>{cartItem.quantity}</p>
         <button onClick={()=>quantityCount(cartItem.productId,'increase')}>+</button>
         </div>
         </div>
         <div className="subTotal">
         <p>Subtotal:</p>
          <p>${Subtotal.toFixed(2)}</p>
         </div>
             
         </div>
        )
       }
    })
    // Display values
    const noCart=cart.length===0;
    const ifCart=cart.length >0;
    return (
        <>
        {/* Header Section */}
        <Cartheader
        h2={'Cart'}
        p={'Cart'}
        />
        {/* Main Section */}
        <main>
            <PurchaseStage
            height={24}
            />
        {noCart && <p>Cart is Empty, Please Add Products</p>}
        {displayCart}
       {/* Cart Summary */}
       <div className="cartSummary">
       <p style={{fontWeight:'bold'}}>CART TOTALS</p>
       <div className="cartTotal">
        <div className="subtotal-summary">
        <p>Subtotals:</p>
        <p>${(subTotal).toFixed(2)}</p>
        </div>
        <div>
            <p>PayStack Transaction Fees:</p>
            <p>${20}</p>
        </div>
        <div>
        <p style={{fontStyle:'italic'}}>Taxes and shipping are calculated at the Checkout.</p>
        </div>
       <div>
        <p>Total:</p>
        <p>${(subTotal + 20).toFixed(2)}</p>
       </div>
        </div>
        <form action="" className="form">
         <div>
       <input type="text" placeholder="Coupon code" />
        <button type="submit">Apply</button>
          </div>
       </form>
       <button className="checkoutButton"><Link to='/checkout'>PROCEED TO CHECKOUT</Link></button>
         </div>
        </main>
        </>
        
    )
}