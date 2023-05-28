import React from 'react'
import { Link } from 'react-router-dom'

function HotelItem() {
  return (
    <>
    <li className="hotels_item"></li>
    <Link className="hotels_item_link">
      <figure className="hotels_item_pic-wrap">
        <img src="" alt="Travel Image" 
        className="hotels_item_img" />

      </figure>

    </Link>
    </>
  )
}


export default HotelItem