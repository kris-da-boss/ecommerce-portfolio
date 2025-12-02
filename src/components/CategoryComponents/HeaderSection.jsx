import { Link } from "react-router"
export default function HeaderSection({catOrSub, category, subCategory, NavtoSub, type}){
    return(
        <section className="categoryHeader">
        <div> 
            <h2 className="categoryName">{catOrSub}</h2>        
         <div className="navPath">
          <p> <Link to='/shop'>Home .</Link></p>
          <p><Link to={type?'/shop':`/category/${category}`}>{category} .</Link></p>
         {NavtoSub && <p><Link >{subCategory}</Link></p>} 
        </div>  
         </div>
        </section>
    )
}