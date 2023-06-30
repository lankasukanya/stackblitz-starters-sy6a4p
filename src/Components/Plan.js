import React from 'react';
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            marginRight: '5px',
          }}
        >
          <button
            className="btn btn-outline-secondary"
            style={{ backgroundColor: 'pink', color: 'black' }}
          >
            monthly
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary"
            disabled
            style={{ color: 'black' }}
          >
            yearly
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
