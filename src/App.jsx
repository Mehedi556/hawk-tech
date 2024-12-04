import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurApproach from "./components/OurApproach";
import WhatWeDo from "./components/WhatWeDo";
import WhatWeOffer from "./components/WhatWeOffer";



function App() {
  return (
    <div className="w-full bg-gray-900">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WhatWeOffer />
      <OurApproach />
      <Footer />
    </div>
  );
}

export default App;
