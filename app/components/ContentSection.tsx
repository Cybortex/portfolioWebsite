import React from 'react';

const SectionHeader = () => {
  return (
    <div className="text-center py-8">
      <h1 className="text-4xl font-bold text-gray-900">Explore My Content</h1>
      <p className="text-gray-600 mt-2">Inspiration, motivation, and actionable insights all in one place!</p>
    </div>
  );
};

const UpcomingEvents = () => {
  return (
    <section className="mt-8 p-6">
      <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
      <p className="text-gray-700 mt-4">
        Be part of transformative events that inspire growth and success.
      </p>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
       
        <div className="relative h-96 lg:h-128 overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://garyvaynerchuk.com/wp-content/uploads/2022/08/Gary-Vaynerchuk-attends-Pencils-Of-Promise-scaled-1.webp')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative z-10 flex flex-col justify-end items-center text-center p-4 h-full">
            <h3 className="text-2xl font-bold text-white uppercase">
              Gary Vaynerchuk
            </h3>
            <p className="text-sm text-gray-300 italic">Builds businesses and shares insights.</p>
          </div>
        </div>

       
        <div className="relative h-96 lg:h-128 overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2')", 
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative z-10 flex flex-col justify-end items-center text-center p-4 h-full">
            <h3 className="text-2xl font-bold text-white uppercase">
              Women in Tech
            </h3>
            <p className="text-sm text-gray-300 italic">Empowering the next generation.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
          More Events
        </button>
      </div>
    </section>
  );
};

const MediaSection = () => {
  return (
    <div className="py-12 px-6 max-w-screen-xl mx-auto">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-semibold text-gray-900">
          <em className="animate__animated animate__fadeIn">Watch This</em>
        </h4>
        <p className="text-gray-700">
          Explore powerful stories, motivational speeches, and transformative insights in these videos.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center sm:space-x-8 mb-12">
        <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
          <iframe
            className="w-full max-w-xs sm:max-w-lg h-48 sm:h-72 rounded-lg shadow-lg"
            loading="lazy"
            title="Motivational Video 1"
            src="https://www.youtube.com/embed/NI9LEFW5e7E?feature=oembed"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
          <iframe
            className="w-full max-w-xs sm:max-w-lg h-48 sm:h-72 rounded-lg shadow-lg"
            loading="lazy"
            title="Motivational Video 2"
            src="https://www.youtube.com/embed/NI9LEFW5e7E?feature=oembed"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

const PodcastSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg my-12">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 md:w-1/3">
          <img
            src="podcast.jpg" 
            alt="The Folugboji Talk Show"
            className="rounded-lg shadow-lg w-150 h-150 object-cover"
          />
        </div>
        <div className="flex-1 md:w-2/3">
          <h3 className="font-semibold text-lg text-gray-800">
            The Folugboji Talk Show
          </h3>
          <p className="text-gray-600 mb-4">
            A podcast for aspiring minds shaping their future. Tune in for inspiring stories and actionable insights.
          </p>
          <div className="flex justify-center">
            <iframe
              src="https://creators.spotify.com/pod/show/folugboji-talks/embed/episodes/Zero-to-Billionaire-The-Folugboji-Story-Episode-1---The-Background-e1uu3hj"
              height="102px"
              width="400px"
              frameBorder="0"
              scrolling="no"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentSection = () => {
  return (
    <div className="py-8">
      <SectionHeader />
      <UpcomingEvents />
      <MediaSection />
      <PodcastSection />
    </div>
  );
};

export default ContentSection;
