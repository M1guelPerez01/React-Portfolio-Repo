import React, { useState } from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Project from './components/Project.js';
import Footer from './components/Footer.js';
import './App.css';


function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const renderTab = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "project":
        return <Project />;
      default:
        return null;
    }
  };
  return (
    <div>
			<div>
				<Header currentPage={currentPage} setCurrentPage={setCurrentPage}></Header>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
      <div>
        <Footer>
        </Footer>
      </div>
		</div>
  );
}

export default App;
