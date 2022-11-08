import React, { useState } from 'react';
import Navigation from "./Navigation";

function Header() {
  const {currentPage, setCurrentPage} = useState("About");


  return (
    <header>
            <div className="name">
                <h2>Miguel A. Perez</h2>
            </div>
            <div>
                <Navigation
                    currentTab={currentPage}
                    setCurrentTab={setCurrentPage}
                ></Navigation>
            </div>
        </header>
  );
}

export default Header;