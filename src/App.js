import React from 'react';
import './App.css';

import Header  from './components/Header'
import ImageGrid from "./components/ImageGrid";
import Footer from "./components/Footer";

function App() {
  return (
      <div className={"App"}>
          <Header/>
          <ImageGrid/>
          <Footer/>
      </div>
  );
}

export default App;
