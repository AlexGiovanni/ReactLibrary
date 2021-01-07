import React from 'react'


const Book = (props) =>{
    return <article className="book" onMouseOver={()=>{
      console.log(props.title);
   }}>
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4 >{props.author}</h4>
      
    </article>
  }
  
   

export default Book