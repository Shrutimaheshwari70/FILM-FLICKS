import React from 'react';

const About = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a1a1a] text-white overflow-hidden">
      <div className="max-w-4xl w-full mx-4 bg-[#121212] rounded-3xl shadow-2xl border border-[#2c2c2c] p-10 relative">

        {/* Blurred red background blobs */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-600 rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-400 rounded-full blur-2xl opacity-10 z-0"></div>

        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-center text-red-500 mb-6">About Film Flicks</h1>
          <p className="text-lg text-gray-300 text-center mb-8">
            Film Flicks is your one-stop destination for discovering and enjoying the world of cinema. From blockbusters to hidden indie gems, we celebrate every frame of storytelling.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-gray-400">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">🎬 Our Mission</h2>
              <p>
                To provide movie lovers a sleek platform to explore and share their passion. We're building more than a site — we're building a community.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">🚀 What We Offer</h2>
              <p>
                Discover trending movies, reviews, and deep dives with our rich and interactive front-end built for film enthusiasts.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center text-gray-400">
            <p>Crafted with ❤ by passionate developers & film lovers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;