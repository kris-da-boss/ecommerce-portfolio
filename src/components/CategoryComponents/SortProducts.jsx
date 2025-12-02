export default function SortProducts({sort, setSort, displayFilter, setDisplay}){
    //Sort function
   function sortFunc(sort){
  if(sort==='priceDown'){
   displayFilter.sort((a,b)=>a.price-b.price)
  }else if(sort==='priceUp'){
    displayFilter.sort((a,b)=>b.price-a.price)
  }
  setDisplay(displayFilter)
  setSort(false)
}
     const openSort=sort?'sortBar':'closeSort';
      const openSortOverLay=sort?'sortOverLay':'closeBar'
    return(
        <>
         {/* Sort Bar */}
           <div className={openSortOverLay} onClick={()=>setSort(false)}> </div>
            <div className={openSort}>
            <p>Sort by Popularity <input type="radio" name="sort"/></p>
            <p>Sort by Average Rating<input type="radio" name="sort" /></p>
            <p>Sort by Latest <input type="radio" name="sort"/></p>
            <p>Sort by price: Low to High <input type="radio" name="sort" onClick={()=>sortFunc('priceDown')}/></p>
            <p>Sort by Price: High to Low <input type="radio" name="sort" onClick={()=>sortFunc('priceUp')}/></p>
           </div>
        </>
       
    )
}