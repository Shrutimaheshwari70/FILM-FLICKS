import React from 'react';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0f0f0f] text-white px-4 w-full">
      <div className="w-full max-w-xl mx-auto bg-[#1a1a1a] p-10 rounded-2xl shadow-2xl border border-gray-700">
        <h2 className="text-4xl font-bold mb-8 text-center text-red-500">Contact Us</h2>

        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md bg-[#2a2a2a] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-md bg-[#2a2a2a] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-md bg-[#2a2a2a] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition duration-300 py-3 rounded-md text-white font-semibold text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;