import React, { useState } from 'react'
import Bloglist from '../bloglist/Bloglist'



const Home = () => {
const [blog, setBlog]= useState([
    {title: "My New Website", Body: "Life is a journey, full of twists and turns, highs and lows, joy and sorrow. It is a journey that we all must embark upon and it is up to us to make the most of it",author:"Jonathan",id:1},
    {title: "My New hobby", Body: "Life is a journey, full of twists and turns, highs and lows, joy and sorrow. It is a journey that we all must embark upon and it is up to us to make the most of it",author:"Frank",id:2},
    {title: "My New style", Body: "Life is a journey, full of twists and turns, highs and lows, joy and sorrow. It is a journey that we all must embark upon and it is up to us to make the most of it",author:"Shina",id:3},
    {title: "My New ways", Body: "Life is a journey, full of twists and turns, highs and lows, joy and sorrow. It is a journey that we all must embark upon and it is up to us to make the most of it",author:"Ryzee",id:4},

    
])

  return (
    <div className='home'>
        <Bloglist shina={blog}  ibk='All blogs'/>
    </div>
  )
}

export default Home