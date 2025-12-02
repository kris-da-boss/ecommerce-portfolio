import products from "../../product";
import { Link } from "react-router";
export default function FilterProducts ({dropDownOpen, setDropDownOpen, setOpenNav, openNav, setDisplay}){

    const filterBar=products.map(p=> p.category);
const categorySet=[...new Set(filterBar)];
function dropDown(cat){
if(dropDownOpen.includes(cat)){
  setDropDownOpen((prev)=>[new Set([...prev,cat]).delete([cat])])
}else{
  setDropDownOpen((prev)=>[...new Set([...prev,cat])])
}
}
function subCat(){
setOpenNav(false)
setDisplay([])
}
const categoryDisplay=categorySet.map((cat)=> {
   const  spanDropDown = dropDownOpen.includes(cat) ?
   <span>&#9652;</span> :<span>&#9662;</span>
  return (
    <div key={cat} className="filterList">
     <details>
      <summary className="catFilter"
       onClick={()=>dropDown(cat)}>
        {cat}  
        {spanDropDown}</summary>
      {[...new Set(products.filter(p=> p.category===cat).map((cat)=>cat.subCategory))].map(sub=>{
        return(
     <div key={sub} className="subCategories">
    <p><Link className="subCatLink" to={`/category/${sub}`} onClick={subCat}>{sub}</Link> </p>
     </div>
        )
      })}
    </details>   
    </div>
  )
})
    const openFilterBar=openNav?"filterBar":'closeBar';
    return(
           <div className={openFilterBar}>
            <div className="close-reset">
            <button>RESET FILTERS</button>
            <button onClick={()=> setOpenNav(false)}>Close</button>
            </div>
            <div>
                <p>Search</p>
                <input type="search" placeholder="type to search"/>
            </div>
            <div>
            <h4>Product Categories</h4>
            {categoryDisplay}
            </div>  
           </div>
    )
}