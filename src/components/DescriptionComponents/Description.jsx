import { useEffect, useState } from "react"
import { useParams } from "react-router"
import products from "../../product"
import { Link } from "react-router"
import { Facebook, Twitter, Youtube, Linkedin, MailIcon} from "lucide-react";
import './Description.css'
import Products from "../ProductComponents/Products";

export default function Description({added, addToCart}){ 
   const [itemQuantity, setItemQuantity]=useState(1);
   const {name}=useParams();
   useEffect(function(){
    window.scrollTo(0,0)
   },[]);

   const product=products.find(product=> product.name==name)
   
   const RelatedProducts=products.filter(item=>item.subCategory===product.subCategory).filter(item=>item.id !==product.id);
   const add=added.includes(product.id)
   const displayRelatedProducts=RelatedProducts.map(product=>{
    const add=added.includes(product.id)
    
    return(
        <Products
        key={crypto.randomUUID()}
        image={product.image}
        name={product.name}
        price={product.price}
        addToCart={addToCart}
        productId={product.id}
        added={add}
        />
    )
   })
   
    return(
        <main>
          <img src={product.image} alt={product.name} className="description-image"/>
          <p className="Links">
           <Link to={`/category/${product.category}`}> <span>{(product.category).toUpperCase()} /</span> </Link> 
            <Link to={`/category/${product.subCategory}`}><span>{(product.subCategory).toUpperCase()}</span></Link></p>

             <div className="discountMessage-div">
             <p className="discountMessage">Buy 6pc for ${(product.price)-3} Each</p>
             </div>          
            <p className="productName">{product.name}</p>
            <p className="productPrice">${product.price}</p>
            <p className="productDescription">{product.description}</p>
            <p className="productStock">Products in stock : <span>{product.stock}</span></p>
            {/* Discount */}
           <div>
            <h3>Bulk DISCOUNT (Buy more, save more!)</h3>
                <p className="discount">1-5 Items : <span>{`$${(product.price).toFixed(2)}`}</span></p>
                <p className="discount">6+ Items :<span>{`$${((product.price).toFixed(2))-3}`}</span></p>
           </div>
           {/* Add to cart button */}
           <div className="descriptionButton">
            <div>
                <button className="qantitiy-count" onClick={()=>setItemQuantity(prev=> prev==1?prev:prev-=1 )}>-</button>
                <p>{itemQuantity}</p>
                <button className="qantitiy-count" onClick={()=>setItemQuantity(prev=> prev+=1)}>+</button>
            </div>
            <button onClick={()=>addToCart(product.id, itemQuantity)}> {add?'Added':'Add to Cart'}</button>
           </div>
           <div className="reviews">
                <p>Reviews</p>
            </div>  
            <div className="extraDescription">
                <p>
                    Product Description
                </p>
                </div> 
            <div className="extraNote"> SKU: 2783-1-item <br />
                Categories: Wigs, accessories, bundles, hair care, braids. closures & Frontals and hair Extensions <br/>
                Tag: {product.tags.join(', ')}
                <br/>
                  <div>
                 SHARE <a href=""><span><Facebook/></span></a>
                 <a href=""><span><Twitter/></span></a>
                 <a href=""><Linkedin/></a>
                 <a href=""><MailIcon/></a>
                 <a href=""><Youtube/></a>
                </div>
                </div>
                {displayRelatedProducts.length>0&&<p>RELATED PRODUCTS</p>}
                <div>
                    {displayRelatedProducts}
                </div>
                <div>
                 
                </div>
              
        </main>
    
    )
}