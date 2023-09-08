import React from "react"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import Work from "./work/Work"
import Ask from "./ask/Ask"

const Home = () => {
  return (
    <>
      <Hero />
      <Work />
      <Featured />
      <Recent />
     
      <Team />
      {/* <Ask /> */}
      
    </>
  )
}

export default Home
