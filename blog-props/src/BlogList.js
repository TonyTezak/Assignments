import React from "react"
import blogData from "./BlogWords"
import BlogPost from "./BlogPost"

function BlogList (){
    const blogComponents = blogData.map(blogWords => <BlogPost key={blogWords.title} blogWords={blogWords} />)
    
    return(
        <div>
            {blogComponents}
        </div>
    )
    }




export default BlogList
