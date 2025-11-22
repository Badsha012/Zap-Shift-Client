import { ArrowUpRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-base-200 shadow-sm p-6 md:p-10 rounded-2xl">
          <img
          src="https://i.ibb.co/tPpkgGVt/tiny-deliveryman.png"
          alt="Tiny delivery person icon"
          className="w-16 h-16 md:w-20 md:h-20 text-center self-center"
        />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* small decorative image (optional) */}
      
        {/* text block */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            We make sure your <span className="text-[#03373D] font-extrabold">Parcel arrives</span>{" "}
            on time — no fuss.
          </h1>
          <p className="mt-4 text-sm md:text-base text-muted-foreground">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* main illustration */}
        <img
          src="https://i.ibb.co/5W19G8ck/big-deliveryman.png"
          alt="Delivery person carrying a parcel"
          className="w-40 md:w-72 lg:w-96 object-contain"
        />
      </div>
     <div className="flex items-center gap-3">
      {/* Main Button */}
      <button className="bg-lime-300 px-6 py-3 rounded-full text-black font-semibold">
        Track Your Parcel
      </button>

      {/* Icon Button */}
      <button className="bg-black w-10 h-10 rounded-full flex items-center justify-center">
        <ArrowUpRight className="text-lime-300 w-5 h-5" />
      </button>
      <button className="btn text-black font-semibold">Be A Ride</button>
        
        

    </div>
   
    </section>

  );
};

export default Hero;
