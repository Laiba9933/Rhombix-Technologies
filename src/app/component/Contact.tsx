import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import the whatsapp icon
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  // Email icon



const Contact = () => {
  return (
    <div id="contact" className="min-h-screen flex flex-col justify-center items-center p-4  ">
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">Get in Touch</h1>
      <p className="text-xl text-gray-900 mb-6 text-center">
        Feel free to reach out to me for any inquiries or collaborations!
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-4xl space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Contact Form */}
        <div className="bg-stone-100 shadow-md rounded-lg p-6 w-full lg:w-1/2">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Write your message here..."
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-32  px-4 py-2 bg-black text-white font-semibold rounded-md shadow-sm hover:bg-gray-800 transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info: Email and WhatsApp */}
        <div className="w-full lg:w-[45%] space-y-4">
          {/* Email Block */}
          <div className="bg-gray-100 rounded-lg p-6 text-center shadow-md flex items-center justify-center space-x-4">
            <FontAwesomeIcon icon={faEnvelope} className="h-8 w-8 text-gray-600" /> {/* Email Icon */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-lg text-gray-600">khalidlaiba524@gmail.com</p>
            </div>
          </div>

          {/* WhatsApp Block */}
          <div className="bg-gray-100 rounded-lg p-6 text-center shadow-md flex items-center justify-center space-x-4">
            <a href="https://wa.me/923558901911?text=Hello%20Laiba,%20I%20found%20your%20portfolio!" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="h-8 w-8 text-gray-600" /> {/* WhatsApp Icon */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp</h3>
              <p className="text-lg text-gray-600 ">+923558901911</p>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



