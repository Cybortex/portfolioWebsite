import { FaUsers, FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin, FaYoutube, FaTiktok } from 'react-icons/fa';

const CommunitySection = () => {
  return (
    <section className="community-section py-16 bg-dark text-white text-center">
      <div className="container mx-auto px-6">
        {/* Section Title and Description */}
        <h2 className="text-4xl font-semibold mb-6">Join the Community</h2>
        <p className="text-lg mb-10">
          Be a part of a dynamic community where we share valuable insights on entrepreneurship, tech, and marketing. Let&apos;s collaborate and grow together!
        </p>

        {/* Community Stats */}
        <div className="flex flex-wrap justify-center gap-12 mb-10">
          <div className="flex flex-col items-center">
            <FaUsers className="text-6xl mb-4 text-purple-700" />
            <h3 className="text-2xl font-semibold">1000+ Members</h3>
            <p className="text-sm">Join our growing network of like-minded individuals.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaInstagram className="text-6xl mb-4 text-pink-500" />
            <h3 className="text-2xl font-semibold">Instagram</h3>
            <p className="text-sm">Follow our Instagram for daily updates and inspiration.</p>
            <p className="text-sm">10K+ Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <FaFacebook className="text-6xl mb-4 text-blue-600" />
            <h3 className="text-2xl font-semibold">Facebook</h3>
            <p className="text-sm">Engage with our community on Facebook groups.</p>
            <p className="text-sm">5K+ Likes</p>
          </div>
          <div className="flex flex-col items-center">
            <FaWhatsapp className="text-6xl mb-4 text-green-500" />
            <h3 className="text-2xl font-semibold">WhatsApp</h3>
            <p className="text-sm">Connect with us via WhatsApp for real-time discussions.</p>
            <p className="text-sm">500+ Active Chats</p>
          </div>
          <div className="flex flex-col items-center">
            <FaLinkedin className="text-6xl mb-4 text-blue-700" />
            <h3 className="text-2xl font-semibold">LinkedIn</h3>
            <p className="text-sm">Join the professional conversation on LinkedIn.</p>
            <p className="text-sm">2K+ Connections</p>
          </div>
          <div className="flex flex-col items-center">
            <FaYoutube className="text-6xl mb-4 text-red-600" />
            <h3 className="text-2xl font-semibold">YouTube</h3>
            <p className="text-sm">Watch our latest videos for tips and insights.</p>
            <p className="text-sm">3K+ Subscribers</p>
          </div>
          <div className="flex flex-col items-center">
            <FaTiktok className="text-6xl mb-4 text-white" />
            <h3 className="text-2xl font-semibold">TikTok</h3>
            <p className="text-sm">Join our fun and creative TikTok community.</p>
            <p className="text-sm">1K+ Followers</p>
          </div>
        </div>

        {/* CTA Button */}
    <a
        href="https://www.instagram.com/yourprofile" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border-2 border-gold text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gold transition duration-300"
    >
        Join the Community
    </a>


        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-6">
          <a
            href="https://www.instagram.com/yourprofile" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-pink-500 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/yourprofile" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-600 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/yourphonenumber"  
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-green-500 transition duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com/yourchannel" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-red-500 transition duration-300"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.tiktok.com/@yourprofile"  
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-black transition duration-300"
          >
            <FaTiktok className='text-white'/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
