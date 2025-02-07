import logo4 from "../../public/Logos/logo4.png";
import { FaWhatsapp, FaFacebook, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <div className="text-neutral-content shadow-lg">
      {/* Navbar with Logo */}
      <div className="navbar flex flex-col lg:flex-row justify-between items-center p-4 gap-4 lg:gap-0">
        {/* Logo */}
        <div className="flex justify-center lg:justify-start">
          <img
            className="w-40 sm:w-48 md:w-52 lg:w-64 xl:w-80 hover:scale-105 transition-transform duration-300"
            src={logo4}
            alt="Logo"
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-white text-3xl lg:text-4xl justify-center lg:justify-end">
          <a
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 hover:scale-110 transition-transform duration-200"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://facebook.com/YOUR_PAGE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 hover:scale-110 transition-transform duration-200"
          >
            <FaFacebook />
          </a>
          <a
            href="mailto:YOUR_EMAIL"
            className="hover:text-red-500 hover:scale-110 transition-transform duration-200"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
