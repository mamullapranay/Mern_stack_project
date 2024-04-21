import React from "react";

const Banner = () => {
  return (
    <div className=" section-container1 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% max-w-sreen-2xl container mx-auto xl:px-24 px-4">
      <div className="py-24 flex flex-col md:flex-row justify-between  items-center gap-8 md:m-5">
        {/*texts */}
        <div className="md:w-1/2 space-y-7 px-5">
          <h1 className="md:text-5xl  text-4xl font-bold md:leading-snug leading-snug ">
            Zenith {" "}
            <span className="text-[#123F64]">Marketing </span>
          </h1>
          <p className="text-xl text-[#4A4A4A]">
          Every update reflects our commitment to quality and attention to detail, ensuring top-notch digital marketing services
          </p>
          <button className="btn bg-[#178CC6]  px-8  py-3 font-semibold text-white rounded-full ">
            {" "}
            Read More
          </button>
        </div>
        <div className="md:w-1/2">
          <img src="" alt="IMAGE" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
