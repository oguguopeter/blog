import React from 'react'

const Counter = () => {

  const API='https://jsonplaceholder.typicode.com/posts'
  const getBanks = ()=> {
  fetch(API) //fetching the API
  .then(res => res.json()) //grabbing the response and converting it into a js object
  .then(res => console.log(res)) // grabbing the converted object and adding to the console.
  .catch(err => console.log(err.message)) // catch any error and send to the console if available

  }

  return (
    <div>
      <button onClick={getBanks}>click me</button>
    </div>
  )
}

export default Counter






















//  import React from 'react'

// const Nav = () => { 



//   return (
//     <>
//         <nav className="navbar">
//             <h1> Oguguo Blog</h1>
//             <div className="links">
//                 <a href="/">Home</a>
//                 <a href="create">New blog</a>
//             </div>
//         </nav>
//     </>
//   )
// }

// export default Nav






