import { useState} from "react";
import Products from "./Products";
import './products.css';
import { Link } from "react-router";

export default function ProductSection({products, filter, Tagtitle, tagName, addToCart, added }){
         const  [totalPage, setTotaPage]=useState(3);

         const Tags=products.filter((product)=> product.tags.includes(filter));
         const sliceTags= tagName==='featured' || window.innerWidth >= 1024?Tags:Tags.slice(0, totalPage);
         // Derived Values
    const displayProducts=tagName!=='featured';
    const loadMore=sliceTags.length !== Tags.length;
    function loadMoreFunc(){
        if(loadMore){
          setTotaPage(prev => prev +=3) 
        }else{
        setTotaPage(prev=> prev-=(sliceTags.length-3))
        }
     }        
     const displayTags=sliceTags.map((product)=>{      
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
                filter={filter}
                />)
            })
                 return(
       <main>
        {/* All products*/}
       
       { displayProducts &&
       <>
        <p className="tagTitle">{Tagtitle}</p>
       <div className="homeProducts">
        {displayTags}
        {window.innerWidth < 1024 && <button onClick={loadMoreFunc} className="loadMoreButton">{loadMore?'Load More':'Load Less'}</button>}
        </div> 
       </>
       
       }
       {tagName==='featured' &&  <div className="extraAd">
       <Link to='category/Wigs'><img src="./productsImages/hairProducts/ad4.png" alt="" /></Link> 
       </div>}

       {/* Featured Products */}
      {tagName ==='featured' && <>
      <p className="tagTitle">{Tagtitle}</p>
      <div className='featuredProducts'>{displayTags}</div>
      {/* <button onClick={slice}>Load More</button> */}
      </>} 
      </main>                 
      )
}