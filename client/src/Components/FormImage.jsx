import React from "react";

const FormImage = ({source}) => {
  return (
    <div className=" flex items-center mx-2 w-full h-screen px-4 py-4">
      <img
        className="w-full md:h-fit rounded-lg object-cover object-center mx-2 my-2"
        src= {source}
        alt="nature image"
      />
    </div>
  );
};

export default FormImage;
