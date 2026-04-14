import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে আপনার ফর্ম সাবমিশন লজিক যোগ করতে পারেন
    alert("Thank you for reaching out! We will contact you soon.");
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-green-500 mb-4">Get In Touch</h2>
          <p className="text-lg opacity-70">
            Have questions about Zap Shift? We're here to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="flex items-center gap-4 p-6 bg-base-200 rounded-2xl border border-green-100 hover:shadow-md transition-shadow">
              <div className="bg-green-500 p-3 rounded-lg text-white">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm opacity-60">Call Us</p>
                <p className="text-lg font-medium">+880 1700-000000</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-base-200 rounded-2xl border border-green-100 hover:shadow-md transition-shadow">
              <div className="bg-green-500 p-3 rounded-lg text-white">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm opacity-60">Email Address</p>
                <p className="text-lg font-medium">support@zapshift.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-base-200 rounded-2xl border border-green-100 hover:shadow-md transition-shadow">
              <div className="bg-green-500 p-3 rounded-lg text-white">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm opacity-60">Main Office</p>
                <p className="text-lg font-medium">Savar, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-100 shadow-2xl border border-base-300">
            <form onSubmit={handleSubmit} className="card-body gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered focus:input-success"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered focus:input-success"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-32 focus:textarea-success"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <div className="form-control mt-4">
                <button className="btn btn-success text-white gap-2 text-lg">
                  <Send size={20} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;