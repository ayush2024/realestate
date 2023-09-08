import React from 'react'
import "./ask.css"

const Ask = () => {
  return (
    <>
      
      <div className="side-by-side-container">
        
        <div className="left-side">
          <img src="https://cdn.pixabay.com/photo/2020/11/10/10/08/architecture-5729165_640.jpg" alt="Your Image" />
        </div>

        
        <div className="right-side">
          <form>
            
            <label htmlFor="name">What are cost to buy a house ?</label>
            <label htmlFor="name">What are the steps to buy a house?</label>
            <label htmlFor="name">When will the project be completed ?</label>
            <label htmlFor="name">How many floors a building maximum?</label>
            <label htmlFor="name">How many floors a building maximum?</label>
            <label htmlFor="name">How many floors a building maximum?</label>
          </form>
        </div>
      </div>
    </>
  )
}

export default Ask