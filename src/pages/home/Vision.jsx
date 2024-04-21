import React from "react";
import {} from "react-icons";

const Vision = () => {
  return (
    <div className="section-container m-3">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="md:w-1/2">
          <img src="" alt="IMAGE2" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left">
            <div className="hover:border-white  transition-all duration-100 hover:border cursor-pointer shadow-md rounded-sm py-5 px-4 text-center space-y-2 ">
              <h3 className="title">VISION</h3>
              <p className="subtitle">
              To evolutisose the business of our customers exponentially and deliver the WOW factor through our services.

              </p>
            </div>
            <div className="hover:border-white  transition-all duration-100 hover:border cursor-pointer shadow-md rounded-sm py-5 px-4 text-center space-y-2 my-5 ">
              <h3 className="title">MISSION</h3>
              <p className="subtitle">
              To create long term value prepositions for our customers.
              </p>
            </div>
            <div className="hover:border-white  transition-all duration-100 hover:border cursor-pointer shadow-md rounded-sm py-5 px-4 text-center space-y-2 ">
              <h3 className="title">VALUES</h3>
              <p className="subtitle">
              Frame work of 
               IRCI
              Integrity 
              Relationship 
              Customer Centric 
              Innovation

              </p>
            </div>
            <h1 className="title m-5">PHILOSOPHY</h1>
            <blockquote className="my-5 text-secondary leading-[30px]">
            Our approach is to create User Experience with our services 
            </blockquote>
            <div className="flex item-center gap-4 flex-wrap">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="\images\home\testimonials\testimonial1.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="\images\home\testimonials\testimonial2.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="\images\home\testimonials\testimonial3.png" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1 ">
                <h5 className="text-lg font-semibold">Customer Feedback</h5>
                <faStar className="text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
