import {FaFacebookSquare, FaWhatsappSquare, FaLinkedin} from 'react-icons/fa';
import footer from '/public/icon.webp'

const Footer = () => {
  const yearNow = new Date().getFullYear();
    return (
        <footer className="footer items-center p-4 bg-[#1F1F1F] text-white">
  <div className="items-center grid-flow-col">
    <img className='h-7 w-7 rounded-lg border-none bg-white' src={footer} alt="" />
    <p>Copyright © {yearNow} - All right reserved by Hafizur Rahman Hasiv</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://www.facebook.com/hafizurrahman.hasiv"> <FaFacebookSquare className='h-5 w-5'></FaFacebookSquare>
    </a> 
    <a href='https://www.linkedin.com/in/hafizur-rahman-hasiv-184522280/'><FaLinkedin className='h-5 w-5'></FaLinkedin></a>
    <a href='https://wa.me/qr/36X6NT6BCCBSM1'><FaWhatsappSquare className='h-5 w-5'></FaWhatsappSquare></a>
  </div>
</footer>
    );
};

export default Footer;