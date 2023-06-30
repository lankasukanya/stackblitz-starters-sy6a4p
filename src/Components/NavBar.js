import React from 'react';
import NavBar from './Components/NavBar.css';
const NavBar = () => {
  return (
    <div  style={{ backgroundColor: '#482067', flexDirection: 'row' }}>
      <div style={{ backgroundColor: '#482067', flexDirection: 'row', color: 'white' }}>
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid ">
      <a class="nav-link" href="#">
        Logo
      </a>
      <a class="nav-link active" aria-current="page" href="#">
        About
      </a>
      <a class="nav-link" href="#">
        Pricing
      </a>
      <a class="nav-link disabled" href="#">
        Review
      </a>
    </div>
  </nav>
</div>

    </div>
  );
};

export default NavBar;
const head = {
  flexDirection: 'row',
};
