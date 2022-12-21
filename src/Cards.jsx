import React from "react";
import './index.css';

function Cards(props) {
    return (
        <>
            <div className='card'>
                <img src={props.image} className=' card_image' />
                <div className='data'>
                    <span className='category'>{props.category}</span>
                    <h3 className='title'>{props.title}</h3>
                    <a href={props.link} target='_blank'>
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Cards;