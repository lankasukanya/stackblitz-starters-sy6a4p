// import React from 'react';
// import ReactDOM from 'react-dom';
// import './style.css';

// export default function App() {
//   return (
//     <div>
//       <h1 className="head">Hello world!</h1>
//       <NavBar/>
//       {/* Nav Bar */}

//       {/* Intro */}

//       {/* About Me */}

//       {/* Skills */}

//       {/* Portfolio */}

//       {/* Companies */}

//       {/* Contact us */}

//       {/* Footer */}
//     </div>
//   );
// }
// import React from 'react';
// import './styles.css';
// import NavBar from './Components/NavBar';
// function MyComponent() {
//   return (
//     <div className="bg-blue-500 text-white">
//       This element has a blue background and white text.
//       <NavBar/>
//     </div>
//   );
// }

// export default MyComponent;
import React from 'react';
import './styles.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutCourse from './Components/AboutCourse';
import Plan from './Components/Plan';
import PlanCard from './Components/PlanCard';
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
      <h1 className="text-2xl font-bold">Hello world!</h1>
    </div>
  );
};

export default App;
