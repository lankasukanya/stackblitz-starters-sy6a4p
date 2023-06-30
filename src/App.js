
import React from 'react';
import './styles.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutCourse from './Components/AboutCourse';
import Plan from './Components/Plan';
import PlanCard from './Components/PlanCard';
import CustomerReview from './Components/CustomerReview';
const App = () => {
  return (
    <div className="p-[20px]">
      <NavBar />
      <Home />
      <div className="p-4">
        <AboutCourse />
      </div>
      <div>
      <Plan/>
      </div>
      <div className="p-4">
      <PlanCard/>
      </div>
   <div>
     <CustomerReview/>
     </div>
    </div>
  );
};

export default App;
