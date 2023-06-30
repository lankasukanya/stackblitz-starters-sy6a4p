import React from 'react';
import './Home.css';
//import workTogether from '../assets/workTogether.png';
//import './../assets'
//import { workTogether } from './../assets'

const Home = () => {
  return (
    <div>
      <div className="flex p-[20px] md:px-20 justify-center items-center mt-7 ">
        <div className="flex flex-col items-center text-center ">
          <h1 className="text-[35px] md:text-[40px] font-bold ">
            Learn how to launch a successful podcast
          </h1>
          <div className="flex">
            <h1 className="text-[35px] md:text-[40px] font-bold mr-3"></h1>
          </div>
          <div>
            <h6 className="my-5 text-gray-400">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </h6>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-lg gradient-button"
          >
            sign up Now
          </button>
          {/* <img src={workTogether} alt="Image description" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
