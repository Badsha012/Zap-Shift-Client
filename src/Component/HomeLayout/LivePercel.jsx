import React from "react";

const LivePercel = () => {
  return (
    <div className=" max-w-5xl mx-auto py-10">
      <div className="grid grid-rows-3 gap-8">
        <div className="card card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://i.ibb.co.com/TS1VdcN/live-tracking.png"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">Live Parcel Tracking</h2>
            <p className="space-y-3">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://i.ibb.co.com/1tJrsZBW/safe-delivery.png"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">100% Safe Delivery</h2>
            <p className="space-y-3">
              We ensure your parcels are handled with the utmost care and
              delivered securely to their destination. Our reliable process
              guarantees safe and damage-free delivery every time.
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://i.ibb.co.com/1tJrsZBW/safe-delivery.png"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">24/7 Call Center Support</h2>
            <p className="space-y-3">
              Our dedicated support team is available around the clock to assist
              you with any questions, updates, or delivery concerns—anytime you
              need us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivePercel;
