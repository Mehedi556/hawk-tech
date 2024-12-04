import { useInView } from "react-intersection-observer";



const OurApproach = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });
  return (
    <section className="sm:py-32 py-16 px-6 md:px-0 max-w-[1280px] mx-auto">
  <div ref={ref} className="max-w-7xl mx-auto text-center">
    <h2 className="text-white text-xl font-semibold mb-4">Our Approach</h2>
    <h1 className={`text-4xl lg:text-5xl font-bold leading-tight text-green-400 mb-6 ${inView ? "animate__animated animate__fadeInDown animate__delay-0s animate__slower" : "opacity-0"}`}>Innovative Solutions for Your Success</h1>
    <p className="text-slate-100 leading-relaxed mb-10">
      We focus on delivering sustainable, long-term success for our clients. Our creative strategies and
      collaborative approach are designed to ensure that every project achieves its full potential while
      maintaining the highest standards of quality.
    </p>
  </div>

  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {/* Card 1 */}
    <div className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition duration-300 ${ inView ? "animate__animated animate__fadeInLeft animate__delay-0s animate__slower" : "opacity-0"} `}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-green-400 text-black rounded-full flex items-center justify-center text-xl font-bold">01</div>
        <h3 className="text-lg font-bold text-[#333333] ml-4">Creative Excellence</h3>
      </div>
      <p className="text-[#666666]">
        We prioritize creative thinking and strategic data collection to understand market trends and consumer behavior.
      </p>
    </div>

    {/* Card 2 */}
    <div className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition duration-300 ${inView ? "animate__animated animate__fadeInUp animate__delay-0s animate__slower" : "opacity-0"}`}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-green-400 text-black rounded-full flex items-center justify-center text-xl font-bold">02</div>
        <h3 className="text-lg font-bold text-[#333333] ml-4">Strategic Planning</h3>
      </div>
      <p className="text-[#666666]">
        We craft detailed strategies to align with your organization&apos;s goals, helping to drive growth and achieve success.
      </p>
    </div>

    {/* Card 3 */}
    <div className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition duration-300 ${inView ? "animate__animated animate__fadeInUp animate__delay-0s animate__slower" : "opacity-0"}`}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-green-400 text-black rounded-full flex items-center justify-center text-xl font-bold">03</div>
        <h3 className="text-lg font-bold text-[#333333] ml-4">Effective Implementation</h3>
      </div>
      <p className="text-[#666666]">
        We ensure that strategies are executed effectively by allocating resources, managing projects, and staying on track.
      </p>
    </div>

    {/* Card 4 */}
    <div className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition duration-300 ${inView ? "animate__animated animate__fadeInRight animate__delay-0s animate__slower" : "opacity-0"}`}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-green-400 text-black rounded-full flex items-center justify-center text-xl font-bold">04</div>
        <h3 className="text-lg font-bold text-[#333333] ml-4">Data-Driven Insights</h3>
      </div>
      <p className="text-[#666666]">
        Through continuous analysis and refinement, we ensure that our decisions are backed by accurate, actionable data.
      </p>
    </div>
  </div>
</section>

  )
}

export default OurApproach