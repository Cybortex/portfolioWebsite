'use client';

const Projects = () => {
  return (
    <section id="projects" className="projects-section py-20 bg-dark-gray">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Projects
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="relative h-72 lg:h-80 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
            {/* Background Image */}
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/fca.jpg')",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end items-center text-center p-4 h-full">
              <h3 className="text-2xl font-bold text-white uppercase">
                Erudition Ai
              </h3>
              <p className="text-sm text-gray-300 italic">Ed-tech StartUp</p>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="relative h-72 lg:h-80 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
            {/* Background Image */}
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/fca2.jpg')",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end items-center text-center p-4 h-full">
              <h3 className="text-2xl font-bold text-white uppercase">
                Folugboji Code <br /> Adademy
              </h3>
              <p className="text-sm text-gray-300 italic">a programming school</p>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="relative h-72 lg:h-80 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
            {/* Background Image */}
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/fca.jpg')",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end items-center text-center p-4 h-full">
              <h3 className="text-2xl font-bold text-white uppercase">
                Cybortex
              </h3>
              <p className="text-sm text-gray-300 italic">A gaming & tech company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
