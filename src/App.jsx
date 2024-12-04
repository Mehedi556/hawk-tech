import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhatWeDo from "./components/WhatWeDo";
import WhatWeOffer from "./components/WhatWeOffer";



function App() {
  return (
    <div className="w-full bg-gray-900">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WhatWeOffer />
    </div>
  );
}

export default App;
