import React from 'react';
import Plan from './Components/Plan.css';
const Plan = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="text-center">
        <h2>Choose your plan</h2>
        <p className="card-text">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </p>
        {/* <div className="card" style={{ width: '10rem' ,height:'10rem'}}> */}
        {/* <div className="card-body d-flex flex-row justify-content-between"> */}
        {/* <div className="card justify-content-between" style={{ width: '200px', height: '50px' }}> */}
        {/* <div> */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            marginRight: '5px',
          }}
        >
          <button className="btn btn-outline-secondary">monthly</button>
          <button type="button" class="btn btn-outline-secondary" disabled>
            yearly
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
    // </div>
  );
};

export default Plan;
