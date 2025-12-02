import blogs from "../../blog"
import { Link } from "react-router"
export default function BlogTag(){
 const displayBlog= blogs.map((blog)=>{
                return(
                <div className='blog' key={crypto.randomUUID()} >
               <Link  to={`/BlogDetail/${blog.id}`} >
                <img src={blog.image} alt="blogImage"/>
                <p>{blog.description}</p>
               </Link> 
                </div> 
                )
            })
    return(
        <main>
            <div className="blogTitle">
           <p >Explore out blogs</p>
            </div>
        
           <div className='blogs'>
            {displayBlog}
            </div>
            <div className='readMoreDiv'>
            <button className="readMoreBlogButton"> <Link  to='BlogDetails'>Read More</Link> </button>
            </div>
      
        </main>
    )
}