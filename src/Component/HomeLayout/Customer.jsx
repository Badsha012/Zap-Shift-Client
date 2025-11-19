import React from "react";

const Customer = () => {
  return (
    <div className="max-w-5xl mx-auto bg-[#03373D] px-6 py-10 rounded-xl">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
        </div>

        {/* Image Section */}
        <img
          src="https://i.ibb.co.com/LdRxYCkJ/location-merchant.png"
          alt="Location merchant"
          className="w-60 md:w-72 object-contain"
          srcSet=""
        />
      </div>
      <div className=" flex gap-8">
        <button className="bg-lime-300 btn rounded-2xl text-black font-extrabold ">Become a Merchant</button>
        <button className="btn text-lime-300 font-bold ">Earn with ZapShift Courier</button>
      </div>
    </div>
  );
};

export default Customer;
