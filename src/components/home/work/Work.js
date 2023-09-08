import React from "react"
import Heading from "../../common/Heading"
import "./Work.css"
import WorkCard from "./WorkCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='How It Works' subtitle='Follow these 3 steps to book your place.' />
          <WorkCard />
        </div>
      </section>
    </>
  )
}

export default Featured
