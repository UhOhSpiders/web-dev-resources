import React from "react";

const ResourceListItem = ({ resource }) => {
  return (
    <>
    
      <a href={resource.url}>
        <div className="flex m-auto hover:bg-slate-200">
        <img src="https://flexboxfroggy.com/images/frog-green.svg" className="invisible absolute md:visible md:relative"></img>
        <div className="bg-blue-100 m-5 p-8 rounded-md min-h-40 w-full">
          <h2 className="text-xl">{resource.title}</h2>
          <p>{resource.description}</p>
        </div>
        </div>
      </a>
     
    </>
  );
};

export default ResourceListItem;
