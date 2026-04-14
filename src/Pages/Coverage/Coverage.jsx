import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router-dom";
import L from "leaflet";

// Leaflet এর ডিফল্ট মার্কার আইকন অনেক সময় দেখা যায় না, তাই এই ফিক্সটি জরুরি
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const Coverage = () => {
  const position = [23.685, 90.3563]; // বাংলাদেশের মেইন পজিশন
  const serviceCenters = useLoaderData() || []; // ডাটা না থাকলে এরর হ্যান্ডেল করবে
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value.trim();

    if (!location) return;

    // ইউজার যে ডিস্ট্রিক্ট লিখেছে তা ডাটাতে আছে কি না চেক করা
    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );

    if (district && mapRef.current) {
      const coord = [district.latitude, district.longitude];
      // flyTo ব্যবহার করে ম্যাপকে ওই পজিশনে নিয়ে যাওয়া
      mapRef.current.flyTo(coord, 12, {
        animate: true,
        duration: 1.5,
      });
    } else {
      alert("দুঃখিত, এই জেলাটি পাওয়া যায়নি!");
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-5xl text-green-400 font-semibold py-4 text-center">
        We are available in 64 districts
      </h2>

      {/* SEARCH FORM */}
      <form className="py-5 max-w-md mx-auto" onSubmit={handleSearch}>
        <label className="input input-bordered flex items-center gap-2 shadow-lg">
          <svg
            className="h-5 w-5 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            className="grow"
            name="location"
            placeholder="Search district (e.g. Dhaka)"
          />
          <button type="submit" className="btn btn-sm btn-ghost">Search</button>
        </label>
      </form>

      {/* MAP CONTAINER */}
      <div className="border-4 border-green-100 rounded-xl overflow-hidden shadow-2xl mb-10">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={true}
          className="h-[600px] w-full"
          ref={mapRef} // এটাই সার্চ কাজ করানোর জন্য প্রধান পরিবর্তন
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center, index) => (
            <Marker 
              key={index} 
              position={[center.latitude, center.longitude]}
            >
              <Popup>
                <div className="text-black">
                  <h3 className="font-bold text-lg text-green-600">{center.district}</h3>
                  <p className="text-sm">
                    <strong>Service Area:</strong> {center.covered_area?.join(", ")}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;