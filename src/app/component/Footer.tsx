import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Name */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold text-white">Laiba Khalid</h2>
          <p className="text-gray-400">Frontend Developer</p>
        </div>

        {/* Navigation Links */}
        <div className="mb-4 md:mb-0">
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-white transition duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-white transition duration-300">About</a></li>
            <li><a href="#skills" className="hover:text-white transition duration-300">Skills</a></li>
            <li><a href="#contact" className="hover:text-white transition duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="https://github.com/laiba9933" className="text-gray-400 hover:text-white transition duration-300">
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/laiba-khalid-frontend-developer/" className="text-gray-400 hover:text-white transition duration-300">
            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
          </a>
          <a href="khalidlaiba524@gmail.com" className="text-gray-400 hover:text-white transition duration-300">
            <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Laiba Khalid. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
