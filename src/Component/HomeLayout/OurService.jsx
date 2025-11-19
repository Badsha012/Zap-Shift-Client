import React from 'react';

const OurService = () => {
    return (
        <div>
             <div className="bg-[#03373D] shadow-md rounded-lg p-10">
      <h1 className="text-3xl font-bold text-white text-center mb-4">
        Our Services
      </h1>

      <p className="text-gray-200 text-center max-w-2xl mx-auto mb-10">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-8 '>
             <div className="flex justify-center">
        <div className="card bg-white w-96 shadow-xl hover:bg-lime-300">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co.com/8DkNVSgj/service.png" 
              alt="delivery"
              className="rounded-xl"
            />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title">Express & Standard Delivery</h2>
            <p>
              We deliver parcels within 24/72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in
              Dhaka within 4/6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
      </div>
        <div className="flex justify-center">
        <div className="card bg-white w-96 shadow-xl hover:bg-lime-300">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co.com/8DkNVSgj/service.png" 
              alt="delivery"
              className="rounded-xl"
            />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title">Nationwide Delivery</h2>
            <p>
             We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48/72 hours.
            </p>
          </div>
        </div>
      </div>
        <div className="flex justify-center">
        <div className="card bg-white w-96 shadow-xl hover:bg-lime-300">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co.com/8DkNVSgj/service.png" 
              alt="delivery"
              className="rounded-xl"
            />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title">Fulfillment Solution</h2>
            <p>
          We also offer customized service with inventory management support, online order processing, packaging, and after sales support.
            </p>
          </div>
        </div>
      </div>
        <div className="flex justify-center">
        <div className="card bg-white w-96 shadow-xl hover:bg-lime-300">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co.com/8DkNVSgj/service.png" 
              alt="delivery"
              className="rounded-xl"
            />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title">Cash on Home Delivery</h2>
            <p>
          100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.
            </p>
          </div>
        </div>
      </div>
        <div className="flex justify-center">
        <div className="card bg-white w-96 shadow-xl hover:bg-lime-300">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co.com/8DkNVSgj/service.png" 
              alt="delivery"
              className="rounded-xl"
            />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title">Corporate Service / Contract In Logistics</h2>
            <p>
             Customized corporate services which includes warehouse and inventory management support.
            </p>
          </div>
        </div>
      </div>
        <div className="flex justify-center">
        <div className="card bg-white w-96 shadow-xl hover:bg-lime-300">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co.com/8DkNVSgj/service.png" 
              alt="delivery"
              className="rounded-xl"
            />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title text-black">Parcel Return</h2>
            <p>
            Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.
            </p>
          </div>
        </div>
      </div>
     
      </div>

 
    </div>
            
        </div>
    );
};

export default OurService;