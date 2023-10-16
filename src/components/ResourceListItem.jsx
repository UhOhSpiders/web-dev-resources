import React from "react";
import { AiOutlineLink } from "react-icons/ai";

const ResourceListItem = ({ resource }) => {
  return (
    <>
    
      <a href={resource.url}>
        <div className="flex m-auto items-center">
        <img src={resource.image} className="invisible absolute rounded-md md:visible md:relative md:h-36"></img>
        <div className=" bg-indigo-100 m-5 p-8 rounded-md min-h-40 w-full hover:outline">
          <AiOutlineLink className="float-right -mt-5 -mr-4" size={30}/>
          <h2 className="text-xl">{resource.title}</h2>
          
          <p>{resource.description}</p>
        </div>
        </div>
      </a>
     
    </>
  );
};

export default ResourceListItem;
