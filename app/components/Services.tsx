const Services = () => {
    return (
      <section className="services-wrapper relative py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Heading */}
          <h3 className="text-4xl font-bold text-gray-800 text-center mb-12">
            What I Have to Offer You
          </h3>
  
          {/* Expanded Description */}
          <p className="text-lg text-gray-600 text-center mb-16">
            I'm a developer and the owner of Folugboji SMMA. I specialize in creating innovative tech solutions and providing high-quality digital marketing services that help businesses thrive in today's competitive landscape. Whether you're looking to establish a strong online presence or develop a custom web application, I offer tailored solutions to meet your needs and ensure your success in the digital world.
          </p>
  
          {/* SMMA Services Section */}
          <div className="mb-16">
            <h4 className="text-3xl font-semibold text-gray-700 mb-4">
              Folugboji SMMA
            </h4>
            <p className="text-lg text-gray-600 mb-8">
              At Folugboji SMMA, we offer a comprehensive suite of digital marketing services designed to help you increase brand visibility, engage with your audience, and grow your business.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white p-6 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-white text-purple-500 p-2 rounded-full shadow-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6h-16v2h16v-2zm0 4h-16v2h16v-2zm0 4h-16v2h16v-2zm0 4h-16v2h16v-2z" />
                    </svg>
                  </div>
                  <h5 className="text-xl font-semibold">Website Creation</h5>
                </div>
                <p className="text-sm mb-4">
                  Custom websites designed to meet your business goals with a focus on responsiveness and user experience.
                </p>
                <a
                  href="#"
                  className="inline-block bg-white text-purple-500 py-2 px-4 rounded-lg shadow-lg font-semibold hover:bg-purple-100"
                >
                  Find Out More
                </a>
              </div>
  
              {/* Service 2 */}
              <div className="relative bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white p-6 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-white text-green-500 p-2 rounded-full shadow-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3h-14c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-14c0-1.103-.897-2-2-2zm-2 15h-10v-14h5.172l2 2h6.828v12zm-5-7v-2h-4v2h-3l5 4 5-4h-3z" />
                    </svg>
                  </div>
                  <h5 className="text-xl font-semibold">Social Media Management</h5>
                </div>
                <p className="text-sm mb-4">
                  Comprehensive management of your social profiles, including engaging content and community building.
                </p>
                <a
                  href="#"
                  className="inline-block bg-white text-green-500 py-2 px-4 rounded-lg shadow-lg font-semibold hover:bg-green-100"
                >
                  Find Out More
                </a>
              </div>
  
              {/* Service 3 (SEO & Paid Ads - No Color) */}
              <div className="relative text-gray-800 p-6 rounded-lg hover:scale-105 transition-transform duration-300 border border-gray-300">
                <div className="flex items-center mb-4">
                  <div className="bg-white text-red-500 p-2 rounded-full shadow-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4h-6.586l-2-2h-6.828c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-12c0-1.103-.897-2-2-2zm-1 14h-14v-14h5.172l2 2h6.828v12zm-5-7v-2h-4v2h-3l5 4 5-4h-3z" />
                    </svg>
                  </div>
                  <h5 className="text-xl font-semibold">SEO & Paid Ads</h5>
                </div>
                <p className="text-sm mb-4">
                  Drive traffic and conversions with targeted ad campaigns and
                  effective SEO strategies.
                </p>
                    
              </div>
            </div>
          </div>

          <div className="mx-auto justify-center items-center my-4 flex gap-4">
                    <a
                        href="#"
                        className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600"
                    >
                        Find Out More
                    </a>
                    <a
                        href="#"
                        className="inline-block bg-gray-300 text-gray-800 py-2 px-4 rounded-lg font-semibold hover:bg-gray-400 border border-white hover:bg-white"
                    >
                        Book a Call
                    </a>
                    </div>
  
          {/* Developer Services Section */}
          <div>
            <h4 className="text-3xl font-semibold text-gray-700 mb-4">
              Developer Services
            </h4>
            <p className="text-lg text-gray-600 mb-8">
              As a developer, I focus on building innovative and scalable tech solutions to help you achieve your business objectives. Whether you need a custom-built website, a mobile app, or a full-stack solution, I have the skills and experience to bring your ideas to life.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Developer Service 1 */}
              <div className="relative bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white p-6 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-white text-blue-500 p-2 rounded-full shadow-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 3v18h18v-18h-18zm16 16h-14v-14h14v14zm-6-10h-2v6h2v-6zm-1 8h-2v2h6v-2h-2v-2h-2v2z" />
                    </svg>
                  </div>
                  <h5 className="text-xl font-semibold">UX/UI Design</h5>
                </div>
                <p className="text-sm mb-4">
                  Crafting intuitive and aesthetically pleasing user interfaces to
                  enhance user experience.
                </p>
                <a
                  href="#"
                  className="inline-block bg-white text-blue-500 py-2 px-4 rounded-lg shadow-lg font-semibold hover:bg-blue-100"
                >
                  Find Out More
                </a>
              </div>
  
              {/* Developer Service 2 */}
              <div className="relative bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 text-white p-6 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-white text-indigo-500 p-2 rounded-full shadow-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l6 6h-4v4h-4v-4h-4z" />
                    </svg>
                  </div>
                  <h5 className="text-xl font-semibold">Web Development</h5>
                </div>
                <p className="text-sm mb-4">
                  Building custom websites that are fast, secure, and responsive on all devices.
                </p>
                <a
                  href="#"
                  className="inline-block bg-white text-indigo-500 py-2 px-4 rounded-lg shadow-lg font-semibold hover:bg-indigo-100"
                >
                  Find Out More
                </a>
              </div>
  
              {/* Developer Service 3 */}
              <div className="relative bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 text-white p-6 rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-white text-indigo-500 p-2 rounded-full shadow-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l6 6h-4v4h-4v-4h-4z" />
                    </svg>
                  </div>
                  <h5 className="text-xl font-semibold">App Development</h5>
                </div>
                <p className="text-sm mb-4">
                  From mobile apps to full-stack development, I build applications that scale with your business.
                </p>
                <a
                  href="#"
                  className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600"
                >
                  Find Out More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  