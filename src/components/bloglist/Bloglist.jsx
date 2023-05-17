import React from 'react'

const Bloglist = ({shina, ibk}) => {
  return (
    <div className='blog-list'>
        <h2>{ ibk}</h2>
        {
            shina.map((shinajnr)=>(
                <div className="blog-preview"  key={shinajnr.id}> //the key here is to represent each of the items in the array 
            <h2>{shinajnr.title}</h2> //data
            <p> {shinajnr.Body} </p> //data
            <p>Written by: {shinajnr.author}</p>// data
        </div>
            ))
        }
    </div>
  )
}

export default Bloglist