import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import {FaFacebookSquare, FaWhatsappSquare} from 'react-icons/fa';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_05cebyl', 'template_mblzgbd', form.current, 'BiU2Ld6oAxBAbJlxa')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className="py-20 bg-[#171717]" id="contact">
            <h2 className="text-5xl text-[#f3004b] fancy text-center pt-5 pb-1 mx-auto">Contact Me</h2>
            <div data-aos="fade-right" className="flex flex-col lg:flex-row justify-center h-full my-20 aos-init aos-animate">
                <div className="text-white flex flex-col gap-5 lg:w-[30%]">
                    <div className="bg-[#131313] text-center p-5 rounded text-lg w-3/4  mx-auto">
                        <a href="https://www.facebook.com/hafizurrahman.hasiv" className="inline-block text-3xl"><FaFacebookSquare></FaFacebookSquare></a>
                        <h3>Facebook</h3>
                        <a href="https://www.facebook.com/hafizurrahman.hasiv" className="text-[#f3004b] font-bold">send message</a>
                    </div>
                    <div className="bg-[#131313] text-center p-5 rounded text-lg w-3/4  mx-auto">
                    <p className="inline-block text-3xl"><FaWhatsappSquare></FaWhatsappSquare></p>
                        <h3>WhatsApp</h3>
                        <p>+8801850363632</p>
                        <a href="https://wa.me/qr/36X6NT6BCCBSM1" className="text-[#f3004b] font-bold">send message</a> 
                    </div>
                </div>
                <div className="lg:w-[60%] mt-10 lg:mt-0 aos-init aos-animate">
                    <form className="flex flex-col gap-5 w-3/4 mx-auto" ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" id="name" className="p-3 text-xl bg-transparent border-2 rounded border-[#f3004b] text-white" placeholder="Your Name" required />
                        <input type="email" name="email" id="email" className="p-3 text-xl bg-transparent border-2 rounded border-[#f3004b] text-white" placeholder="Your Email" required/>
                        <textarea name="message" id="message" className="p-3 text-xl bg-transparent border-2 rounded border-[#f3004b] text-white" cols="30" rows="5" placeholder="Your Message" required></textarea>
                        <input className="w-3/4 px-3 py-1 text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300 mr-5 rounded-full text-white" type="submit" value="send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;