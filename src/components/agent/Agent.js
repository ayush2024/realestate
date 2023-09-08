import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/agent.jpg"
import "./agent.css"
import { agent } from '../data/Data';

const Agent = () => {
  return (
    <>
      <section className='about'>
        <Back name='' title='Agent' cover={img} />

        <form className='flex'>
          <div className='box'>
            <span>Agent Type</span>
            <input type='text' placeholder='agent' />
          </div>
          <div className='box'>
            <span>Select City</span>
            <input type='text' placeholder='city' />
          </div>
          <div className='box'>
            <span>Select Categorey</span>
            <input type='text' placeholder='categorey' />
          </div>

        </form>

        <div className='content2'>
          {agent.map((item) => (
            <div key={item.id} className="inner">
              <img src={item.cover} alt={`Cover for ${item.name}`} style={{ width: "250px", height: "250px" }}/>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Agent