import { FaShieldAlt, FaUsers, FaBullhorn } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section className="features-section py-16 text-gray-900 text-center">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-semibold mb-8">Why Join Us?</h2>
        <p className="text-lg mb-12">
          Explore the key benefits of being a part of our vibrant and growing community.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center max-w-xs">
            <FaShieldAlt className="text-6xl mb-4 text-gold" />
            <h3 className="text-2xl font-semibold mb-2">Exclusive Content</h3>
            <p className="text-sm">
              Gain access to premium resources, articles, and insights from experts.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center max-w-xs">
            <FaUsers className="text-6xl mb-4 text-gold" />
            <h3 className="text-2xl font-semibold mb-2">Networking Opportunities</h3>
            <p className="text-sm">
              Connect with a community of entrepreneurs, innovators, and industry leaders.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center max-w-xs">
            <FaBullhorn className="text-6xl mb-4 text-gold" />
            <h3 className="text-2xl font-semibold mb-2">Interactive Discussions</h3>
            <p className="text-sm">
              Participate in live Q&A sessions, webinars, and engaging community discussions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
