import React from "react";

const Shimmer = () => {
  return (
    <div data-testid="shimmer">
      <h3 className=" p-3 m-3 h-28 w-64 ">
        <div className=" w-30 h-10 m-3 border border-gray-300  bg-gray-300 "></div>
      </h3>

      <div className="flex flex-wrap md:container md:mx-auto">
        {Array(15)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="w-56 h-56 p-2 m-2 shadow-lg bg-gray-300"
            >
              {" "}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
