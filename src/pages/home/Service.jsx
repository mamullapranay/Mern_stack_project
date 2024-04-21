import React from "react";

const serviceList=[
    {id:1,title:"Digital Marketing",des:"dwndiwqy iqbwduiw iqwbdu",image:"/images/home/services/icon1.png"},
    {id:2,title:"Social Media Marketing",des:"piwhduw uhqwdunn uqhduwqin  ",image:"/images/home/services/icon2.png"},
    {id:3,title:"Training",des:"piqodnu uoqdunwiu ioqhdfou",image:"/images/home/services/icon3.png"},
    {id:4,title:"PR Services",des:"klwndiownoin",image:"/images/home/services/icon4.png"}
]
const Service = () => {
  return (
    <div className="section-container my-16 bg-[#E1EAEA]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-3">
        <div className="md:w-1/2">
          <div className="text-left">
            <p className="subtitle">Our Services</p>
            <h3 className="title">Our Culture Journey and Services</h3>
            <p className="my-5 text-secondary leading-[30px]">
              Rooted in passion,we curate unforgotten dinig experiences and offer exceptional services , blending culinary artistry warm hospitality
            </p>
            <button className="btn bg-[#C70039] text-white px-8 py-3 rounded-full">Explore</button>
            <div className="flex item-center gap-4 flex-wrap"></div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
            {
                serviceList.map((service)=>(
                    <div  key={service.id} className="hover:border-black  transition-all duration-100 hover:border text-[#C70039] cursor-pointer shadow-md rounded-sm py-5 px-4 text-center space-y-2 ">
                        <img src={service.image} className="mx-auto"/>
                        <h5 className="pt-3 font-semibold">{service.title}</h5>
                        <p className="text-[#C70039]">{service.des}</p>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
