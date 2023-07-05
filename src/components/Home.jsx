import Lottie from "lottie-react";
import home from "../assets/home.json";

const Home = () => {
  return (
    <div className="lg:h-screen lg:pt-28 bg-[#1F1F1F]" id="home">
      <div className="text-white flex flex-col lg:flex-row justify-between items-center mx-5 py-10 lg:py-0 lg:mx-24 relative">
        <div
          data-aos="fade-up-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="space-y-5 aos-init aos-animate"
        >
          <h4 className="text-2xl">
            Hi, I am{" "}
            <span className="text-[#f3004b]">Hafizur Rahman Hasiv</span>
          </h4>
          <h2 className="text-4xl lg:text-6xl">
            Front-End <br />{" "}
            <span className="text-[#f3004b]">Web Developer</span>
          </h2>
          <p className="text-xl">
            Building beautiful websites with skillful front-end development.
          </p>
          <div className="lg:space-x-4 space-y-2">
            <button className="lg:px-5 lg:py-2 px-3 py-1 rounded-lg text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300">
              <a href="#about">More About Me</a>
            </button>
            <button className="lg:px-5 lg:py-2  px-3 py-1 rounded-lg text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300">
              <a href="Resume Of Hafizur Rahman Hasiv.pdf" download>
                Download Resume
              </a>
            </button>
          </div>
        </div>
        <div className=" mt-10 lg:mt-0">
          <div
            data-aos="zoom-out-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="w-[300px] h-[300px] lg:w-[390px] lg:h-[390px] aos-init aos-animate"
          >
            <div className="w-full h-full bg-[#f3004b] rounded-full after:content-[''] after:absolute after:w-[270px] after:h-[270px]  lg:after:w-[360px] lg:after:h-[360px] after:bg-[#1F1F1F] after:rounded-full  flex justify-center items-center relative zoomIn-animation">
              <span className="absolute w-full h-full rounded-full bg-[#f3004b] blur-md"></span>
              <div className="z-10 w-[270px] h-[270px] lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden relative">
                <Lottie
                  className="w-[250px] lg:w-[340px] object-cover absolute top-6 left-1"
                  animationData={home}
                  loop={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
