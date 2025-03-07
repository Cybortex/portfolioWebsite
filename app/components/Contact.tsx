import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-dark-gray mb-6">
          Get in Touch
        </h2>
        <p className="text-xl text-gray-700 mb-12">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities. Let&apos;s connect and make something amazing together.
        </p>

        {/* Contact Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12">
          {/* Email */}
          <div className="text-left">
            <h4 className="text-2xl font-semibold text-dark-gray mb-4">Email</h4>
            <p className="text-lg text-gray-700">olugbojiobafemi@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="text-left">
            <h4 className="text-2xl font-semibold text-dark-gray mb-4">Phone</h4>
            <p className="text-lg text-gray-700">+234 905 710 5876</p>
          </div>

          {/* Social Media Links */}
          <div className="text-left">
            <h4 className="text-2xl font-semibold text-dark-gray mb-4">DM Me</h4>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                <FaInstagram size={32} />
              </a>
              <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                <FaFacebookF size={30} />
              </a>
              <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
                <FaWhatsapp size={32} />
              </a>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
                <FaLinkedin size={32} />
              </a>
            </div>
          </div>
        </div>
        <div>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
