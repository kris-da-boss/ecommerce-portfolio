import { useParams } from "react-router";
import products from "../../product";
import './category.css';
import Products from "../ProductComponents/Products";
import HeaderSection from "./HeaderSection";
import ProductDisplay from "./ProductDisplay";
import FilterProducts from "./FilterProducts";
import SortProducts from "./SortProducts";
import { useEffect } from "react";

export default function Category ({addToCart, added, openNav, setOpenNav,setSort, sort, dropDownOpen, setDropDownOpen, display, setDisplay}){
// UseParams
const {catOrSub}=useParams();
useEffect(function(){
  window.scrollTo(0,0)
})
// Stop Background scroll
openNav?document.body.style.overflow='hidden': document.body.style.overflow='auto';
sort?document.body.style.overflow='hidden':document.body.style.overflow='auto';
// Filter Page
const filterCategory=products.filter(product=> product.category===catOrSub);
const filterSubCart=products.filter(products=>products.subCategory===catOrSub);
const category=[...new Set(products.map(cat=> cat.category))]
const displayFilter=category.includes(catOrSub)?filterCategory:filterSubCart;
// Nav to 
const NavtoCategory=displayFilter.find(product=> product);
const NavtoSub=[NavtoCategory.subCategory].includes(catOrSub)
const dis=display.length===0?displayFilter:display
const displayProducts=dis.map((product)=>{
    const add=added.includes(product.id)
    return(
        <div key={crypto.randomUUID()}>      
         <Products
         key={crypto.randomUUID()}
         name={product.name}
         image={product.image}
         price={product.price}
         productId={product.id}
         addToCart={addToCart}
         added={add}
         />
        </div>
    )
})
  
//Derived values
      const resultCount=displayFilter.length;
    
    return(
      <>
      {/* head section */}
        <HeaderSection
        catOrSub={catOrSub}
        category={NavtoCategory.category}
        subCategory={NavtoCategory.subCategory}
        NavtoSub={NavtoSub}
        />
        {/* filter Bar */}
           <FilterProducts
           setDropDownOpen={setDropDownOpen}
           setOpenNav={setOpenNav}
           dropDownOpen={dropDownOpen}
           openNav={openNav}
           setDisplay={setDisplay}
           />
           {/* Sort Bar */}
           <SortProducts
           setDisplay={setDisplay}
           sort={sort}
           setSort={setSort}
           displayFilter={displayFilter}
           />
           {/* Products Display section */}
      <ProductDisplay
      resultCount={resultCount}
      setOpenNav={setOpenNav}
      setSort={setSort}
      displayProducts={displayProducts}
      />
      </>
    )
}