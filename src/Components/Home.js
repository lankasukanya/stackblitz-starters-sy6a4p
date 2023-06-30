import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="flex ">
      <div className="flex p-[20px] md:px-20 justify-center items-center mt-7 ">
        <div className="flex flex-row items-center text-center ">
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
            <button
              type="button"
              className="btn btn-primary btn-lg gradient-button m-4"
            >
              sign up Now
            </button>
            <img
              src="https://st3.depositphotos.com/1049680/36709/i/450/depositphotos_367092530-stock-photo-group-business-workers-smiling-happy.jpg"
              alt="Image"
              className="card-image"
              style={{
                width: '300px',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginLeft: '500px',
              }}
            />
            <img
              src="https://media.istockphoto.com/id/1146472948/photo/millennial-black-businesswoman-addressing-colleagues-at-a-corporate-business-meeting-close-up.jpg?s=612x612&w=0&k=20&c=pRFt-m6Af60XAp2saRz4LtFjB6qBfRFki3Tf3c-4xtw="
              alt="Image"
              className="card-image"
              style={{
                width: '300px',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginLeft: '400px',
              }}
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
