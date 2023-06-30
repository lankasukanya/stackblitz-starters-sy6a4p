
import React from 'react';
import './styles.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutCourse from './Components/AboutCourse';
import Plan from './Components/Plan';
import PlanCard from './Components/PlanCard';
import CustomerReview from './Components/CustomerReview';
import Footer from './Components/Footer';
import ImageAndContent from './Components/ImageAndContent';

const App = () => {
  return (
    <div className="p-[20px]">
      <NavBar />
      
      <Home /> 
      {/* <ImageAndContent/> */}
    
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
     <div>
       <Footer/>
       </div>
    </div>
  );
};

export default App;
