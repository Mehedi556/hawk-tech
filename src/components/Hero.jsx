import hero from "../../src/assets/hero.png";
import 'animate.css';

const Hero = () => {
  return (
    <div className="max-w-full">
      <div className="relative h-[500px] sm:h-[650px] md:h-[800px] text-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Background Image"
            className="object-cover object-center w-full h-full opacity-60"
          />
          {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center max-w-[1240px] mx-auto">
          <h1 className="text-2xl sm:text-2xl md:text-5xl font-bold text-white leading-tight mb-4 w-11/12 mx-auto animate__animated animate__fadeInDown animate__delay-0s animate__slower">
            Empowering Visions, Delivering Precision
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white mb-8 w-11/12 mx-auto">
            HawkTech transforms ideas into reality with unmatched focus and
            technological expertise. Like a hawk in flight, we ensure your
            business stays ahead, soaring to new heights with innovative digital
            solutions.
          </p>
          <button className="hidden sm:block animated-button mt-5 animate__animated animate__fadeInUp animate__delay-0s animate__slower">
            <svg
              viewBox="0 0 24 24"
              className="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text">Book A Free Consultation</span>
            <span className="circle"></span>
            <svg
              viewBox="0 0 24 24"
              className="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
