import './App.css';
import { Header } from './Header';
import Carousels from './Carousels';
import HeaderOptions from './HeaderOptions';
import Footer from './Footer';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="contaimner5t">
        
         <Header />
         <HeaderOptions />
         <Carousels />
         <br />
         <Footer />
      </div>
    );
  }
}

export default App;
