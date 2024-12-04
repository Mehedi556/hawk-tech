
import { useInView } from "react-intersection-observer";

const WhatWeOffer = () => {
  const features = [
    { icon: "🌐", title: "Web Development", description: "Custom websites tailored to your business needs." },
    { icon: "📱", title: "Mobile App Development", description: "iOS and Android apps with seamless user experience." },
    { icon: "🎨", title: "UI/UX Design", description: "Modern, user-friendly interfaces for web and mobile." },
    { icon: "☁️", title: "Cloud Solutions", description: "Scalable cloud infrastructure and integrations." },
    { icon: "⚡", title: "Performance Optimization", description: "Speed and performance enhancements for your digital assets." },
    { icon: "🔒", title: "Cybersecurity", description: "Protect your systems with advanced security measures." },
    { icon: "🛠️", title: "Technical Support", description: "Reliable 24/7 support for ongoing maintenance." },
    { icon: "🛒", title: "E-commerce Solutions", description: "Robust online stores for seamless customer experiences." },
    { icon: "📊", title: "Data Analytics", description: "Data-driven insights to enhance your business strategy." },
    { icon: "🤝", title: "Consulting Services", description: "Expert advice to transform your digital presence." },
    { icon: "🎯", title: "Digital Marketing", description: "SEO, PPC, and social media campaigns to boost your reach." },
    { icon: "📋", title: "Custom Software Development", description: "Tailored software solutions for unique business challenges." },
  ];

  // Use Intersection Observer for the whole container
  const { ref: containerRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-16 sm:py-32 text-white">
      <div ref={containerRef} className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-green-400 mb-10">
          Key Features
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 bg-slate-700 rounded-lg shadow hover:shadow-lg transition-all duration-500 ${
                sectionInView ? "animate__animated animate__fadeInUp" : "opacity-0"
              }`}
              style={
                sectionInView
                  ? { animationDelay: `${0.2 + index * 0.1}s` }
                  : { transitionDelay: `${index * 0.1}s` }
              }
            >
              {/* Icon */}
              <div className="text-4xl text-blue-500 mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 text-center">
                {feature.title}
              </h3>

              {/* Description */}
              {feature.description && (
                <p className="text-gray-100 text-center">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
