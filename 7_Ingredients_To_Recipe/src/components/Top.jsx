import React from 'react'
import logo from  '../assets/chef.png';
const Top = () => {
  return (
    <>
        <header className="d-flex justify-content-center align-items-center">
          <img src={logo} alt="React Image" style={{width:70}}/>
          <h1>Ingredients To Recipe</h1>
        </header>
    </>
  )
}

export default Top;