import React from "react";

export default function Contact() {
  return (
    <section className="max-w-[1320px] mx-auto py-16 px-4">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Have questions about our products or your order? 
          We’d love to hear from you. Reach out to us anytime.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Office</h3>
            <p className="text-gray-600">
              123 Commerce Street<br />
              New Delhi, India<br />
              110001
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">support@ecommerceapp.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
            <p className="text-gray-600">
              Monday – Saturday<br />
              10:00 AM – 7:00 PM
            </p>
          </div>
        </div>

        {/* Right Side - Static Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

          <form className="space-y-5">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
