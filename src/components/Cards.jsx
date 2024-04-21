import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  return (
    <div className="items-center card w-70 bg-base-100 shadow-xl relative p-4 m-7 hover:scale-105 transition-all duration-200">
      {/* Only the image is wrapped with the Link component */}
      <Link to={`/menu/${item._id}`}>
        <img src={item.image} alt={item.name} className=" md:h-52" />
      </Link>
      <div className="card-body items-center text-center">
        <h2 className="card-title ">Customer name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam vel quam explicabo libero! Voluptate nisi corrupti molestias voluptatum voluptatibus eos hic, minus exercitationem, quam fuga laboriosam ex fugit rem.
        </p>
        <div className="card-actions justify-between items-center mt-2">
        </div>
      </div>
    </div>


  );
};

export default Cards;
