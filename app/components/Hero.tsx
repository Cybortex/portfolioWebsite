'use client';

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-black relative mt-[80px]"> {/* Adjusting the top margin */}
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('/hero-background.jpg')", // Replace with your image path
        }}
      ></div>

      {/* Hero Content */}
      <div className="hero-content flex-col lg:flex-row-reverse items-center relative z-10 text-white gap-10">
        {/* Profile Image */}
        <img
          src="/profile.jpg" // Replace with your profile image path
          className="w-64 h-64 rounded-full shadow-lg border-4 border-gold object-cover"
          alt="Profile"
        />

        {/* Hero Text */}
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Entrepreneur. <span className="text-gold">Writer.</span> Creator.
          </h1>
          <p className="py-6 text-gray-300 text-lg">
          A 20-year-old writer, developer, and entrepreneur passionate about storytelling, building remarkable brands, and leveraging technology to shape the future.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#ai-company" className="btn btn-primary text-black">
              Discover AI Ventures
            </a>
            <a href="#smma" className="btn btn-outline btn-primary text-gold border-gold hover:bg-gold hover:text-black">
              Explore SMMA Services
            </a>
            <a href="#projects" className="btn btn-outline text-white border-white hover:bg-white hover:text-black">
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
