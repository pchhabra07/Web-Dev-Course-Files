import { useState, useRef, useEffect } from 'react'
import './Card.css'

function Card({title, imageLink}){
    return (
        <div className="product-card">
            <img src={imageLink} className='product-image' />

            <h3 className="product-title">{title}</h3>
        </div>
    )
}

export default Card;