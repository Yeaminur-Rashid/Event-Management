import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from 'react';

const Footer = () => {
  useEffect(() =>{
    Aos.init({duration: 2000});
  }, [])

  return (
    <div>
      <footer className="w-full bg-purple-700 p-8  text-gray-800 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <img src={logo} alt="logo-muslim" className="w-20" />
          <p className="normal-case font-montserrat font-bold text-xl">MuslimFesti</p>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Link
                to="/about"
                className="block font-avenir text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
              >
                About 
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="block font-avenir text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block font-avenir text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <p className="block font-light font-avenir text-center text-base leading-relaxed text-blue-gray-900 antialiased">
          © 2024 Muslim Festi
        </p>
      </footer>
    </div>
  );
};

export default Footer;
