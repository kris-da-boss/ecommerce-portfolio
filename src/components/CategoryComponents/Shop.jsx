import HeaderSection from "./HeaderSection"
import ProductDisplay from "./ProductDisplay"
import products from "../../product"
import Products from "../ProductComponents/Products"
import FilterProducts from "./FilterProducts"
import SortProducts from "./SortProducts"
import { useEffect } from "react"

export default function Shop({openNav, setOpenNav,sort, setSort, addToCart, added, setDropDownOpen, dropDownOpen, setDisplay, display}){
   // result Count
  const resultCount=products.length;
 useEffect(()=>{
   setDisplay([])
 }, [])
 
  const displayChoice=display.length===0?products:display;
  const displayProducts= displayChoice.map(product=> {
         const add=added.includes(product.id)
         return(<Products
         key={crypto.randomUUID()}
         name={product.name}
         image={product.image}
         price={product.price}
         productId={product.id}
         addToCart={addToCart}
         added={add}
   />)})
   return (
      <>
      {/* Header Section */}
      <HeaderSection
      catOrSub='SHOP'
      category='Shop'
      subCategory='Shop'
      NavtoSub={false}
      type={true}
      />
      <FilterProducts 
      dropDownOpen={dropDownOpen}
      openNav={openNav}
      setOpenNav={setOpenNav}
      setDropDownOpen={setDropDownOpen}
      setDisplay={setDisplay}
      />
      <SortProducts
      sort={sort}
      setSort={setSort}
      setDisplay={setDisplay}
      displayFilter={displayChoice}
      />
      <ProductDisplay
      openNav={openNav}
      setOpenNav={setOpenNav}
      setSort={setSort}
      resultCount={resultCount}
      displayProducts={displayProducts}
      />
      </>
   
   )
}