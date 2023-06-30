import React from 'react';

const AboutCourse = () => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        {/* <div style={{ flex: '1' }}>
          <h2>About the Course</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            fringilla pretium elit, ut tempor nisi facilisis non. Vivamus non
            nisi auctor, tristique metus vitae, sagittis nisl. Sed eleifend
            lacus in felis aliquet aliquam.
          </p>
        </div> */}
        <div style={{ display: 'flex' }}>
          <div className="card" style={{ width: '18rem', marginRight: '10px' }}>
            <div className="card-body">
              <h5 className="card-title">Interactive Features</h5>
              <p className="card-text">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
            </div>
          </div>
          <div
            className="card"
            style={{ width: '18rem', marginRight: '10px', marginTop: '10px' }}
          >
            <div className="card-body">
              <h5 className="card-title">Interactive Features</h5>
              <p className="card-text">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', marginTop: '40px' }}>
        <div className="card" style={{ width: '18rem', marginRight: '10px' }}>
          <div className="card-body">
            <h5 className="card-title">Interactive Features</h5>
            <p className="card-text">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </p>
          </div>
        </div>
        <div
          className="card"
          style={{ width: '18rem', marginRight: '10px', marginTop: '10px' }}
        >
          <div className="card-body">
            <h5 className="card-title">Interactive Features</h5>
            <p className="card-text">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </p>
          </div>
          
        </div>
        <img
              src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?t=st=1688123156~exp=1688123756~hmac=f9642c0e73845ff25cac83a27d1fb1d0bbcb82a469cca88373d36e1d9c22c984/150/150"
              
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
      </div>
    </div>
  );
};

export default AboutCourse;
