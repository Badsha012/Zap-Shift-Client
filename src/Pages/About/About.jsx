import React from "react";

const About = () => {
  return (
    <div className="bg-white px-5 md:px-10 py-10 rounded-2xl shadow-md max-w-7xl mx-auto">
      
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
        About Us
      </h1>

      {/* Intro */}
      <p className="text-gray-500 text-center max-w-2xl mx-auto">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      {/* Menu Section */}
      <div className="py-8">
        <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-lg font-semibold text-gray-700">
          <li className="hover:text-blue-500 cursor-pointer">Story</li>
          <li className="hover:text-blue-500 cursor-pointer">Mission</li>
          <li className="hover:text-blue-500 cursor-pointer">Success</li>
          <li className="hover:text-blue-500 cursor-pointer">Team & Others</li>
        </ul>
      </div>

      {/* Content */}
      <div className="space-y-6 text-gray-500 leading-relaxed text-justify">
        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands.
        </p>

        <p>
          Whether it's a personal gift or a time-sensitive business delivery, we
          ensure it reaches its destination — on time, every time. Our team works
          around the clock to provide seamless delivery solutions.
        </p>

        <p>
          Today, we continue to innovate and improve our services to meet modern
          delivery needs, ensuring speed, security, and customer satisfaction at
          every step.
        </p>
      </div>
    </div>
  );
};

export default About;