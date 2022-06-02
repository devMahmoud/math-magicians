/* eslint-disable */
import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ParticlesBG from './components/Particles/ParticlesBG';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';


class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <ParticlesBG />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
