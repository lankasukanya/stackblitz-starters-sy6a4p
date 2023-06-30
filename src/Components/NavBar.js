import React from 'react';
import NavBar from './Components/NavBar.css';
const NavBar = () => {
  return (
    // <nav className="bg-blue-500 text-white p-4">
    //   <ul className="flex space-x-4">
    //     <li>
    //       <a href="#" className="hover:text-gray-200">Login</a>
    //     </li>
    //     <li>
    //       <a href="#" className="hover:text-gray-200">About</a>
    //     </li>
    //     <li>
    //       <a href="#" className="hover:text-gray-200">Pricing</a>
    //     </li>
    //   </ul>
    // </nav>
    <div style={{ backgroundColor: '#482067', flexDirection: 'row' }}>
      {/* <ul style={head}>
        <li>Home</li>
        <li>About Me</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>companies</li>
        <li>Contact us</li>

      </ul> */}
     
      <div style={{ backgroundColor: '#482067', flexDirection: 'row', color: 'white' }}>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
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
