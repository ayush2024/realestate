import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/agency.png"
import "./agency.css"
import { agency } from '../data/Data';

const Agency = () => {
  return (
    <section className='about'>
      <Back name='' title='Agency' cover={img} />

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
        {agency.map((item) => (
          <div key={item.id} className="inner">
            <img src={item.cover} alt={`Cover for ${item.name}`} style={{ width: "250px", height: "250px" }}/>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Agency