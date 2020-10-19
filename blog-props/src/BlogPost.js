import React from "react"

function BlogPost (props){
    return (
    <div style={{height: "250px",
    width: "1fr",
    color: "black",
    font: "36px",
    fontFamily: "Helvetica Neue",
    flexWrap: "wrap",
    marginLeft: "-15px",
    marginRight: "-15px",
    textAlign: "center"
    }}>
        <h1>{props.blogWords.title}</h1>
        <h2>{props.blogWords.subTitle}</h2>
        <h3>Posted by {props.blogWords.author} on {props.blogWords.date}</h3>

    </div>
    )
}

export default BlogPost