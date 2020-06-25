import React from 'react';
import './App.css';

import Footer from'./Footer'
import About from './About'



function App({ children }) {


  return (

  	<div className="app">
        <main>
        {children}
     	 </main>
      </div>
  );
}

export default App;
