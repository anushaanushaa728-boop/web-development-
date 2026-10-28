import React from 'react';

import AddToCart from './addtocart';

function App(){
  //js Code

  let brandName = "Amazon"


  return (
    //HTML Part - Tags
    <div>

      <h1>My Brand Name is {brandName}</h1>

    <h1>This is React</h1>
    <AddToCart />
    <p>Good Evening</p>
    <AddToCart/>
    <button>Login</button>

    <AddToCart />
     <AddToCart />
      <AddToCart />

    </div>
  )

}

export default App //calling Function in React 