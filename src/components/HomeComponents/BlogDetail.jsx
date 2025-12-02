
import { useParams } from "react-router"
import blogs from "../../blog"
import './Blogs.css'
import { useEffect } from "react"
import { Link } from "react-router"
export default function BlogDetail(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const {id}=useParams()
    
   const filterBlog=blogs.filter(blog=> blog.id ==id)
   const displayBlog=filterBlog.map(blog=>{
    
    return(
        <div key={crypto.randomUUID()} className="blogDetail">
            <h2 className="blogDetail-description">{blog.description}</h2>
            <p className="blogDetail-author">BY MARA'S BEAUTY, <span>{blog.timeUpdate}</span></p>
            <img src={blog.image} alt=""  className="blogDetail-image" />
            <p style={{whiteSpace:'pre-line'}} className="blogDetail-content">{blog.content}</p>
                <h3>RECOMENDED PRODUCTS:</h3>
                <div className="blogDetails-relatedImages">
                {blog.relatedProducts.map(product=>{
                    return(
                <div key={crypto.randomUUID()}>
                <p className="related-name">{product.name}</p>
                <img src={product.image} alt="" width="150" height="150"/>
                <p>{product.imgCap}</p>
                <button className="relatedClickButton"><Link className="Link" to={`/description/${product.name}`}>Check Out</Link></button>
                </div>
                    )
                })}
                 </div>
        </div>
    )
   })
   
return(  
<>
{displayBlog}

</>
)
}