import { useInView } from "react-intersection-observer";

const WhatWeDo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <section className="max-w-[1280px] text-white mx-auto py-16 sm:py-32">
      <div
        ref={ref}
        className="container mx-auto flex flex-col lg:flex-row items-center lg:gap-12"
      >
        <div className="lg:w-1/2 space-y-8 p-5 md:p-0">
          <h2
            className={`text-4xl lg:text-5xl font-bold leading-tight text-green-400 ${
              inView
                ? "animate__animated animate__fadeIn animate__slower"
                : "opacity-0"
            }`}
          >
            What We Do
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed tracking-wide">
            <span className="" />
            We specialize in delivering{" "}
            <span className="text-green-400 font-semibold">
              innovative solutions
            </span>{" "}
            that elevate brands and create tangible results. Our team of
            professionals collaborates closely to provide services tailored to
            your unique goals.
          </p>

          <div
            className={`flex items-center gap-4 ${
              inView
                ? "animate__animated animate__fadeInLeft animate__delay-0s animate__slow"
                : "opacity-0"
            }`}
          >
            <div className="bg-green-500 text-gray-900 font-extrabold text-5xl rounded-lg p-4 shadow-lg">
              5+
            </div>
            <span className="text-gray-300 text-lg tracking-wide">
              <span className="font-medium text-white">
                Years of Excellence
              </span>{" "}
              in delivering outstanding results.
            </span>
          </div>

          <button
            className={`group mt-6 relative px-8 py-3 bg-gradient-to-r from-green-500 to-teal-400 text-gray-900 font-medium rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition ${
              inView
                ? "animate__animated animate__fadeInUp animate__delay-3.2s animate__slower"
                : "opacity-0"
            }`}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-green-500 opacity-0 group-hover:opacity-100 transition"></span>
            <span className="relative">Explore More</span>
          </button>
        </div>

        <div className="lg:w-1/2 flex justify-center p-5 md:p-0">
          <img
            src="https://img.freepik.com/premium-photo/human-robot-handshake-generative-ai_890176-341.jpg"
            alt="What We Do"
            className="rounded-lg shadow-lg w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
