import './App.css';
import {Route, Routes} from 'react-router';
import Header from './components/Header and Footer Com/Header';
import Footer from './components/Header and Footer Com/Footer';
import HomePage from './components/HomeComponents/HomePage'
import products from "./product";
import Category from './components/CategoryComponents/Category';
import BlogDetails from './components/HomeComponents/BlogDetails';
import BlogDetail from './components/HomeComponents/BlogDetail';
import Cart from './components/CartComponents/Cart';
import { useState, useEffect, useMemo} from 'react';
import Shop from './components/CategoryComponents/Shop';
import Checkout from './components/CartComponents/checkout';
import Description from './components/DescriptionComponents/Description';
export default function App(){
const cartStorage=JSON.parse(localStorage.getItem('cart')) || [];

const [cart, setCart]=useState(cartStorage);
const [added, setAdded]=useState([]);
const [openNav, setOpenNav]=useState(false);
const [sort, setSort]=useState(false);
const [dropDownOpen, setDropDownOpen]=useState([]);
const [display, setDisplay]=useState([]);


useEffect(function(){
localStorage.setItem('cart', JSON.stringify(cart));
}, [cart])

function addToCart(id, quantity){
       const  matchingItems = cart.find(item=>item.productId===id)
        if(matchingItems){
            matchingItems.quantity+=quantity;
          }else{
           setCart(prev=>{ 
            return [...prev,{
                productId: id,
                quantity:quantity
            }]
          })}
         setAdded((prev)=>{
           const set=new Set(prev)
          return  [...set.add(id)]
         })
         setTimeout(function(){
          setAdded((prev)=>{
            const set=new Set(prev)
            set.delete(id)
            return Array.from(set)
          })
         }, 500)
         }
        //  Quantity Count
        function quantityCount(id,countMethod){
        if(countMethod==='increase'){
      setCart(prev=>{
        return(
        prev.map((item)=> item.productId===id?{...item, quantity:item.quantity+1}:item)   
        )
      })
      }else{
          setCart(prev=>{
            return(
                prev.map(item=> item.productId===id?{...item, quantity:item.quantity<=1?item.quantity:item.quantity-1}:item)
            )
          })
        }
    }

  return(
  <>
    <Header/>
    <Routes>
      <Route path='/shop' element={<Shop
        openNav={openNav}
        setOpenNav={setOpenNav}
        sort={sort}
        setSort={setSort}
        added={added}
        addToCart={addToCart}
        dropDownOpen={dropDownOpen}
        setDropDownOpen={setDropDownOpen}
        display={display}
        setDisplay={setDisplay}
      />
    }/>
      <Route path='/category/:catOrSub' element={
        <Category 
        addToCart={addToCart}
        added={added}
        openNav={openNav}
        setOpenNav={setOpenNav}
        sort={sort}
        setSort={setSort}
        dropDownOpen={dropDownOpen}
        setDropDownOpen={setDropDownOpen}
        display={display}
        setDisplay={setDisplay}
        />
      }/>
      <Route index element={<HomePage
      cart={cart}
      setCart={setCart}
      addToCart={addToCart}
      added={added}
      />}/>
      <Route path='BlogDetails' element={<BlogDetails
      />}/> 
      <Route path="/BlogDetail/:id" 
      element={<BlogDetail
      />}/>
      <Route path='/cart' element={<Cart
      cart={cart}
      setCart={setCart}
      quantityCount={quantityCount}
      />}/>
      <Route path='/checkout'element={<Checkout
      cart={cart}
      setCart={setCart}
      />}/>
      <Route path='/description/:name' element={<Description
      added={added}
      addToCart={addToCart}
     
      />}/>
    </Routes>
    <Footer/>
    </>
  )
}