import "./Homepage.css"
import ProductSection from "../ProductComponents/ProductSection";
import products from "../../product";
import BlogTag from "./BlogTag";
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router";
export default function HomePage({setCart, cart, addToCart, added}){ 
 const [adCount,setAdCount]=useState(0);

 const imageAd=[
  {image: './productsImages/hairProducts/ad1.png',
  category:'Wigs'
  },
  {image: './productsImages/hairProducts/ad2.png',
  category:'Wigs'
  },
  {image: './productsImages/hairProducts/ad3.png',
    category:'Wigs'
  },
  {image: './productsImages/hairProducts/ad5.png',
    category:'Wigs'
  }
 ] 
useEffect(function(){
 const intervalid=  setInterval(()=> {
    return setAdCount(prev=> (prev+1) % imageAd.length)
  } ,5000);
  return ()=> clearInterval(intervalid)
}, [])

  const HomePage =[
    {
      filter:'best-seller',
      Tagtitle:'Best Skincare Sellers',
      tagName:'best-seller'
    },
    {
      filter:'featured',
      Tagtitle:'Featured Products',
      tagName:'featured'
    },
    {
      filter:'new-arrival',
      Tagtitle:'Get the Newest Arrival',
      tagName:'new-arrival'
    },
    {
      filter: 'body-wave',
     Tagtitle: 'Body-Wave Just For You',
     tagName:'body-wave'
    },
  ].map(page=> useMemo(()=><ProductSection 
    key={crypto.randomUUID()}
    products={products}
    filter={page.filter}
    Tagtitle={page.Tagtitle}
    tagName={page.tagName}
    cart={cart}
    setCart={setCart}
    addToCart={addToCart}
    added={added}
  />,[added]))
return(
    <>
    <div className="advert">{<Link to={`/category/${imageAd[adCount].category}`}><img src={imageAd[adCount].image} className="advertImage"
    
    /></Link>}</div>
    <div className="ticker">
    <div className="slideEffect">
     <p>SAFE PAYMENT OPTIONS</p>
     <p>AUTHENTIC PRODUCTS ONLY</p>
     <p>WORLD WIDE DELIVERY</p>
     <p>QUICK AND FAST!!</p>
     
     <p>SAFE PAYMENT OPTIONS</p>
     <p>AUTHENTIC PRODUCTS ONLY</p>
     <p>WORLD WIDE DELIVERY</p>
     <p>QUICK AND FAST!!</p>
    </div>
    </div>
      {HomePage}
     <BlogTag/>
     {products.length <= 0 && <p>Loading Products....</p>}
    </>
)
}