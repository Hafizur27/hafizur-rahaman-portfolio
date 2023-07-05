import sportsMaster from "../assets/sports-master.png";
import car from "../assets/car.png";
import chef from "../assets/chef.png";

const Projects = () => {
  return (
    <div className="py-10 bg-[#171717] text-white" id="projects">
      <h2 className="text-5xl text-[#f3004b] fancy text-center pt-5 pb-1 w-48 mx-auto">
        Projects
      </h2>
      <div className="lg:mx-16 mx-5 my-20">
        <div
          data-aos="zoom-in-right"
          className="flex flex-col lg:flex-row justify-between gap-10 my-10 aos-init aos-animate"
        >
          <div className="space-y-5 lg:w-[50%]">
            <div className="flex items-center">
              <hr className="inline-block w-6 mr-1 border-[#f3004b]" />
              <p className="text-lg text-[#bebebe]">Full Stack</p>
            </div>
            <h2 className="text-4xl">Sports Master</h2>
            <p className="text-xl font-light">
              I built a full stack games learning academy type site. There Students
              can enroll different games.
            </p>
            <div>
              <h2 className="text-xl font-semibold text-[#f3004b] fancy mb-3">
                Uses Technology :
              </h2>
              <div className="flex gap-3 flex-wrap">
                <p className="bg-[#383838] py-1 px-6 rounded-full">HTML</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">CSS</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">Tailwind</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">
                  JavaScript
                </p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">React. JS</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">Node. JS</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">
                  Express. Js
                </p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">MongoDB</p>
              </div>
            </div>

            <button className="lg:px-4 lg:py-1 px-3 py-1 mt-2 rounded-lg text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300">
              <a href="https://github.com/Hafizur27/sports-master-client">Clint Site</a>
            </button>
            <button className="lg:px-4 lg:py-1 px-3 py-1 mt-2 rounded-lg text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300 mx-2">
              <a href="https://github.com/Hafizur27/sports-master-server">Server Site</a>
            </button>
            <button className="lg:px-4 lg:py-1 px-3 py-1 mt-2 rounded-lg text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300">
              <a href="https://sports-master-7ad32.web.app/">Live Site</a>
            </button>
          </div>
          <div className="lg:w-[40%] relative">
            <div className="w-full h-[300px] lg:h-[400px] overflow-hidden img-container ">
              <a
                href="https://sports-master-7ad32.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="block w-full h-full object-cover object-top rounded hover:object-bottom transition-all duration-1000"
                  src={sportsMaster}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mx-16 mx-5 my-20">
        <div
          data-aos="zoom-in-right"
          className="flex flex-col lg:flex-row justify-between gap-10 my-10 aos-init aos-animate"
        >
          <div className="lg:w-[40%] relative">
            <div className="w-full h-[300px] lg:h-[400px] overflow-hidden img-container ">
              <a
                href="https://crazy-car-clint.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="block w-full h-full object-cover object-top rounded hover:object-bottom transition-all duration-1000"
                  src={car}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="space-y-5 lg:w-[50%]">
            <div className="flex items-center">
              <hr className="inline-block w-6 mr-1 border-[#f3004b]" />
              <p className="text-lg text-[#bebebe]">Full Stack</p>
            </div>
            <h2 className="text-4xl">Crazy Car</h2>
            <p className="text-xl font-light">
            I built a full stack site on sports toy car selling type website. There users can buy toys.
            </p>
            <div>
              <h2 className="text-xl font-semibold text-[#f3004b] fancy mb-3">
                Uses Technology :
              </h2>
              <div className="flex gap-3 flex-wrap">
                <p className="bg-[#383838] py-1 px-6 rounded-full">HTML</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">CSS</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">Tailwind</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">
                  JavaScript
                </p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">React. JS</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">Node. JS</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">
                  Express. Js
                </p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">MongoDB</p>
              </div>
            </div>

            <button className="lg:px-4 lg:py-1 px-3 py-1 mt-2 rounded-lg text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300">
              <a href="https://github.com/Hafizur27/crazy-car-clint">Clint Site</a>
            </button>
            <button className="lg:px-4 lg:py-1 px-3 py-1 mt-2 rounded-lg text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300 mx-2">
              <a href="https://github.com/Hafizur27/crazy-car-server">Server Site</a>
            </button>
            <button className="lg:px-4 lg:py-1 px-3 py-1 mt-2 rounded-lg text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300">
              <a href="https://crazy-car-clint.web.app/">Live Site</a>
            </button>
          </div>
        </div>
      </div>

      <div className="lg:mx-16 mx-5 my-20">
        <div
          data-aos="zoom-in-right"
          className="flex flex-col lg:flex-row justify-between gap-10 my-10 aos-init aos-animate"
        >
          <div className="space-y-5 lg:w-[50%]">
            <div className="flex items-center">
              <hr className="inline-block w-6 mr-1 border-[#f3004b]" />
              <p className="text-lg text-[#bebebe]">Front-End</p>
            </div>
            <h2 className="text-4xl">Chef Master</h2>
            <p className="text-xl font-light">
            I built a site on international chefs. Where user can see international chefs details and there recipes.
            </p>
            <div>
            <h2 className="text-xl font-semibold text-[#f3004b] fancy mb-3">
                Uses Technology :
              </h2>
              <div className="flex gap-3 flex-wrap">
              <p className="bg-[#383838] py-1 px-6 rounded-full">HTML</p>
              <p className="bg-[#383838] py-1 px-6 rounded-full">CSS</p>
              <p className="bg-[#383838] py-1 px-6 rounded-full">Bootstrap</p>
              <p className="bg-[#383838] py-1 px-6 rounded-full">JavaScript</p>
              <p className="bg-[#383838] py-1 px-6 rounded-full">React. JS</p>
              <p className="bg-[#383838] py-1 px-6 rounded-full">Node. JS</p>
              <p className="bg-[#383838] py-1 px-6 rounded-full">Express. Js</p>
            </div>
            </div>
          
            <button className="lg:px-4 lg:py-1 px-3 py-1 mt-2 rounded-lg text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300">
              <a href="https://github.com/Hafizur27/chef-master-client-site">Clint Site</a>
            </button>
            <button className="lg:px-4 lg:py-1 px-3 py-1 mt-2 rounded-lg text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300 mx-2">
              <a href="https://github.com/Hafizur27/chef-master-server-site">Server Site</a>
            </button>
            <button className="lg:px-4 lg:py-1 px-3 py-1 mt-2 rounded-lg text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300">
              <a href="https://chef-master-client-site.web.app/">Live Site</a>
            </button>
          </div>
          <div className="lg:w-[40%] relative">
            <div className="w-full h-[300px] lg:h-[400px] overflow-hidden img-container ">
              <a
                href="https://chef-master-client-site.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="block w-full h-full object-cover object-top rounded hover:object-bottom transition-all duration-1000"
                  src={chef}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
