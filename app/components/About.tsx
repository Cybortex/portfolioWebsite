const About = () => {
  return (
    <section className="about-section py-20 bg-light-gray">
      <div className="mx-auto max-w-5xl px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16 text-dark-gray">
          About Me
        </h2>

        {/* Who I Am Section */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left Image */}
          <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-lg bg-cover bg-center" style={{ backgroundImage: "url('/your-image.jpg')" }}>
            {/* Replace '/your-image.jpg' with the actual path to your image */}
          </div>

          {/* Right Text */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-dark-gray mb-4">
              Who I Am
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              I’m a 20-year-old writer and entrepreneur passionate about storytelling, business, and technology. On a mission to help brands thrive in the digital world.
            </p>
            <p className="text-lg text-gray-600">
              Combining business strategy, AI solutions, and creative storytelling, I aim to build innovative brands and digital products that make a lasting impact.
            </p>
          </div>
        </div>

        {/* Skills & Expertise Section */}
        <div className="flex flex-col md:flex-row items-center gap-16 mt-16">
          {/* Left Text */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-dark-gray mb-4">
              Skills & Expertise
            </h3>
            <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
              <li>Business Strategy & Brand Development</li>
              <li>AI & Digital Product Creation</li>
              <li>Content Creation & Storytelling</li>
            </ul>
            <p className="text-lg text-gray-600">
              I'm always looking for new ways to innovate and collaborate, pushing boundaries with technology and creativity.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-lg bg-cover bg-center" style={{ backgroundImage: "url('/skills-image.jpg')" }}>
            {/* Replace '/skills-image.jpg' with the actual path to your image */}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="flex justify-center gap-4 mt-12">
          <a href="#projects" className="btn btn-primary text-black">
            My Projects
          </a>
          <a href="#contact" className="btn btn-outline btn-primary text-gold border-gold hover:bg-gold hover:text-black">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
