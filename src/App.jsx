import React from 'react';
import prototype from './assets/prototype.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Birir Home Supplies</h1>
        <h2>Eco-friendly bio-digesters</h2>
      </header>

      <section className="hero">
        <div className="hero-image">
          <img src={prototype} alt="prototype" className="hero-image" />
        </div>
        <div className="hero-text">
          <h2>Transforming Waste into Wealth: Sustainable Energy for Every Home</h2>
          <p>Power your home with renewable energy from a biogas digester made from recycled materials.</p>
        </div>
      </section>

      <section className="problem">
        <h3>Problem We're Solving</h3>
        <ul>
          <li>
            Many communities struggle with effective waste disposal, leading to environmental pollution and health hazards. Organic waste often goes unused, piling up and contributing to greenhouse gas emissions.
          </li>
          <li>
            Conventional energy sources are expensive and inaccessible to many rural or under-resourced communities, leaving people dependent on costly or unreliable fuel sources.
          </li>
          <li>
            Many energy solutions today contribute to environmental harm. Our biogas solution transforms waste into sustainable energy, reducing reliance on fossil fuels and contributing to a cleaner environment.
          </li>
        </ul>
        <button>Get Started</button>
      </section>

      <section className="solution">
        <h2>Our Solution: Sustainable, Affordable Biogas</h2>
        <h3>Feature Highlights:</h3>
        <ul>
          <li>
            <strong>Eco-friendly:</strong> Built using recycled materials, these digesters offer a cost-effective and sustainable alternative to traditional energy sources.
          </li>
          <li>
            <strong>Affordable for All:</strong> Our materials and technology choices help keep costs low, making it accessible for households of all income levels.
          </li>
          <li>
            <strong>Reduce Organic Waste:</strong> Use household organic waste to generate clean energy, transforming waste into a resource.
          </li>
          <li>
            <strong>Cleaner Cooking and Heating:</strong> Our biogas solution produces a smokeless, odorless fuel ideal for cooking and heating, enhancing indoor air quality.
          </li>
          <li>
            <strong>Earn Carbon Credits:</strong> Households that use our biogas solution can participate in carbon credit programs, creating a financial incentive for sustainable energy use.
          </li>
          <li>
            <strong>Support Global Emission Goals:</strong> Each biogas unit contributes to carbon reduction, making a real impact on the environment.
          </li>
          <li>
            <strong>Self-Sustaining:</strong> No need to rely on external energy sources – turn everyday waste into a reliable source of energy.
          </li>
          <li>
            <strong>Empowerment for Rural Communities:</strong> Birir Home Supplies gives people energy independence while reducing energy costs.
          </li>
        </ul>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li><strong>Install the Biogas Digester:</strong> Set up an affordable unit at home with our easy-to-follow installation guide.</li>
          <li><strong>Add Organic Waste:</strong> Food scraps, animal waste, and other organic matter are fed into the digester.</li>
          <li><strong>Generate Clean Energy:</strong> As the waste breaks down, it produces biogas, which can be used for cooking, heating, and other household needs.</li>
          <li><strong>Earn Carbon Credits:</strong> Track and redeem carbon credits through our program, turning sustainable actions into financial rewards.</li>
        </ol>
        <button>Contact Us</button>
      </section>
    </div>
  );
}

export default App;