import blogs from "../../blog"
import { Link } from "react-router"
import { useEffect } from "react"
export default function BlogDetails (){
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    
     const displayBlog =blogs.map(blog=>{
     const blogContent=blog.content.slice(0, 150)
       return(
        <div key={crypto.randomUUID()} className="blogDetails">
       <img src={blog.image} alt="blog-image" />
        <h4>{blog.description}</h4>
        <p>{blogContent}..</p>
        <Link to={`/BlogDetail/${blog.id}`} style={{color: "black"}}><p style={
            {textDecoration:'underline',
            marginBottom:'10px'
            }}
            >CONTINUE READING</p></Link> 
       </div>
    )     
    })
return(
    <>
    <div className="blogHeader">
        <div>
        <h1>Hair Blog</h1>
        </div></div>
      <div className="blogDetailsBody">
        {displayBlog}
      </div>
    </>
)
}