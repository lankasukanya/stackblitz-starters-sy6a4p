import React from 'react';
const AboutCourse = () => {
  return (
    <div>
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex' }}>
            <div
              className="card"
              style={{ width: '18rem', marginRight: '10px' }}
            >
              <div className="card-body">
                <h5 className="card-title">Interactive Features</h5>
                <p className="card-text">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
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
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
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
          <div
            style={{
              flex: '1',
              marginBottom: '100px',
              alignSelf: 'flex-start',
            }}
          >
            <h2>About the Course</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla pretium elit, ut tempor nisi facilisis non. Vivamus non
              nisi auctor, tristique metus vitae, sagittis nisl. Sed eleifend
              lacus in felis aliquet aliquam.
            </p>
            <button
              type="button"
              className="btn btn-primary btn-lg gradient-button m-4"
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutCourse;
