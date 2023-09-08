


import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/buy.jpg";
import "./buy.css";
import { list } from '../data/Data';

const Buy = () => {
    const forBuyList = list.filter((item) => item.category === 'For Rent');
    return (
        <>
            <section className='about'>
                <Back name='' title='Buy Property' cover={img} />

                <form className='flex'>
                    <div className='box'>
                        <span>Showing result of 03 of 06</span>

                    </div>
                    <div className='box'>
                        <span>Sort By</span>
                        <input type='text' placeholder='default' />
                    </div>
                    <div className='box'>
                        <span>Price range</span>
                        <input type='text' placeholder='Low to high' />
                    </div>

                </form>

                <div className='content2'>
                    {forBuyList.map((item) => (
                        <div key={item.id} className="inner">
                            <img src={item.cover} alt={`Cover for ${item.name}`} style={{ width: "250px", height: "250px" }} />
                            <h3>{item.name}</h3>
                            <p>{item.location}</p>
                            <p>Category: {item.category}</p>
                            <p>Price: {item.price}</p>
                            <p>Type: {item.type}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Buy;
