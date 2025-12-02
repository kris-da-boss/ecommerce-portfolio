import { Filter, SortAscIcon} from "lucide-react";

export default function ProductDisplay({displayProducts, setOpenNav, setSort, resultCount}){
    return(
         <section className="categoryMain">
           <p className="resultCount">SHOWING ALL {resultCount} RESULTS</p>
           <div className="filtersort-flex">
            <p onClick={()=> setOpenNav(true)}><span className="icon">
              <Filter/></span>FILTER</p>
            <p onClick={()=> setSort(true)}><span className="icon"><SortAscIcon /></span>SORT BY</p>
           </div>
           
           <hr/>
           <div className="categoryDisplay">
           {displayProducts}
           </div>
        </section>
    )
}