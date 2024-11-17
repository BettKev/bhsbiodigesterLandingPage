import React, { useState, useEffect } from 'react';
import prototype from './assets/prototype.jpg';
import prototype2 from './assets/prototype2.jpg';
import prototype3 from './assets/prototype3.jpg';
import prototype4 from './assets/prototype4.jpg';
import prototype5 from './assets/prototype5.jpg';
import prototype6 from './assets/prototype6.jpg';
import prototype7 from './assets/prototype7.jpg';
import prototype8 from './assets/prototype8.jpg';
import prototype9 from './assets/prototype9.jpg';
import prototype10 from './assets/prototype10.jpg';
import prototype11 from './assets/prototype11.jpg';
import prototype12 from './assets/prototype12.jpg';
import './App.css';

const images = [
  prototype,
  prototype2,
  prototype3,
  prototype4,
  prototype5,
  prototype6,
  prototype7,
  prototype8,
  prototype9,
  prototype10,
  prototype11,
  prototype12,
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="text-center py-4">
        <h1 className="text-primary">Birir Home Supplies</h1>
        <h2 className="text-secondary">Eco-friendly Biogas Digesters</h2>
      </header>

      {/* Hero Section */}
      <section className="hero d-flex align-items-center flex-column flex-md-row justify-content-between">
        {/* Carousel Container */}
        <div className="hero-carousel">
          <img
            src={images[currentIndex]}
            alt={`Prototype ${currentIndex + 1}`}
            className="carousel-image img-fluid rounded shadow"
          />
        </div>

        {/* Call-to-Action Section */}
        <div className="hero-call-to-action text-center text-md-start mt-4 mt-md-0 ms-md-4">
          <h2>Transforming Waste into Wealth</h2>
          <p>Power your home with renewable energy from a biogas digester made from recycled materials.</p>
          <button className="btn btn-primary btn-lg mt-3">Learn More</button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem py-4">
        <h3 className="text-primary">Problem We're Solving</h3>
        <ul className="list-unstyled">
          <li className="mb-3">
            Many communities struggle with effective waste disposal, leading to environmental pollution and health hazards.
          </li>
          <li className="mb-3">
            Conventional energy sources are expensive and inaccessible to many rural or under-resourced communities.
          </li>
          <li>
            Many energy solutions today contribute to environmental harm. Our biogas solution transforms waste into sustainable
            energy.
          </li>
        </ul>
        <button className="btn btn-success">Buy Now</button>
      </section>

      {/* Solution Section */}
      <section className="solution py-4 bg-light">
        <h2>Our Solution: Sustainable, Affordable Biogas</h2>
        <h3 className="text-secondary">Feature Highlights:</h3>
        <ul className="list-unstyled">
          <li className="mb-2">
            <strong>Eco-friendly:</strong> Built using recycled materials, offering a cost-effective energy solution.
          </li>
          <li className="mb-2">
            <strong>Affordable for All:</strong> Accessible for households of all income levels.
          </li>
          <li className="mb-2">
            <strong>Reduce Organic Waste:</strong> Transform household organic waste into clean energy.
          </li>
          <li className="mb-2">
            <strong>Cleaner Cooking and Heating:</strong> Produces smokeless, odorless fuel, enhancing indoor air quality.
          </li>
          <li>
            <strong>Earn Carbon Credits:</strong> Participate in carbon credit programs for financial incentives.
          </li>
        </ul>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works py-4">
        <h2>How It Works</h2>
        <ol className="list-unstyled">
          <li className="mb-3">
            <strong>Install the Biogas Digester:</strong> Set up a unit at home with our easy-to-follow guide.
          </li>
          <li className="mb-3">
            <strong>Add Organic Waste:</strong> Feed food scraps, animal waste, and other organic matter into the digester.
          </li>
          <li className="mb-3">
            <strong>Generate Clean Energy:</strong> Produce biogas for cooking, heating, and more.
          </li>
          <li>
            <strong>Earn Carbon Credits:</strong> Track and redeem carbon credits, turning sustainable actions into rewards.
          </li>
        </ol>
        <button className="btn btn-info">Contact Us</button>
      </section>
    </div>
  );
}

export default App;
