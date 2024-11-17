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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {/* Header */}
      <header className="text-center py-4">
        <h1 className="display-4">Birir Home Supplies</h1>
        <p className="lead">Eco-friendly Biogas Digesters</p>
      </header>

      {/* Hero Section */}
      <section className="row align-items-center my-5">
        <div className="col-md-6 text-center mb-4">
          <div className="hero-carousel">
            <img
              src={images[currentIndex]}
              alt={`Prototype ${currentIndex + 1}`}
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
        <div className="col-md-6">
          <h2>Transforming Waste into Wealth</h2>
          <p>
            Power your home with renewable energy from a biogas digester made from recycled materials.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="text-center my-5">
        <p>First prototype made in 2023 from recycled Air bed:</p>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/zLIlnfAQSxk"
            title="Birir Home Supplies Biogas Digester Prototype"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Problem Section */}
      <section className="my-5">
        <h3 className="text-center mb-4">Problem We're Solving</h3>
        <ul className="list-group">
          <li className="list-group-item">
            Many communities struggle with effective waste disposal, leading to pollution and health hazards.
          </li>
          <li className="list-group-item">
            Energy sources are expensive and inaccessible in many rural areas.
          </li>
          <li className="list-group-item">
            Existing energy solutions often harm the environment.
          </li>
        </ul>
      </section>

      {/* Solution Section */}
      <section className="my-5">
        <h2 className="text-center mb-4">Our Solution</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Eco-friendly</h5>
                <p className="card-text">
                  Built using recycled materials, offering a sustainable energy alternative.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Affordable</h5>
                <p className="card-text">
                  Accessible for households of all income levels with low-cost materials.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Reduce Organic Waste</h5>
                <p className="card-text">
                  Use household waste to generate clean energy, turning waste into a resource.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="my-5">
        <h2 className="text-center mb-4">How It Works</h2>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">Install the biogas digester at home.</li>
          <li className="list-group-item">Add organic waste to the digester.</li>
          <li className="list-group-item">
            Generate clean energy for cooking, heating, and household needs.
          </li>
          <li className="list-group-item">
            Earn carbon credits through our program.
          </li>
        </ol>
        <div className="text-center mt-4">
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </section>
    </div>
  );
}

export default App;
