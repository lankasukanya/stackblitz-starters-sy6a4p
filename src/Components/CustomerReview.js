import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const CustomerReview = () => {
  return (
    <div>
      <h1>Review from customers</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
        gravida mauris, ac maximus quam. Ut semper semper turpis a congue.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="card" style={{ width: '18rem', marginRight: '2rem' }}>
          <div className="card-body" style={{ display: 'flex' }}>
            <img
              src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?t=st=1688123156~exp=1688123756~hmac=f9642c0e73845ff25cac83a27d1fb1d0bbcb82a469cca88373d36e1d9c22c984/150/150"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
            <div>
              <h5 className="card-title">Lolla Smith</h5>
              <h6>Microsoft</h6>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae gravida mauris, ac maximus quam. Ut semper semper turpis a
                congue.
              </p>
            </div>
          </div>
        </div>

        <div className="card" style={{ width: '18rem', marginRight: '2rem' }}>
          <div className="card-body" style={{ display: 'flex' }}>
            <img
              src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?t=st=1688123156~exp=1688123756~hmac=f9642c0e73845ff25cac83a27d1fb1d0bbcb82a469cca88373d36e1d9c22c984/150/150"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
            <div>
              <h5 className="card-title">Lolla Smith</h5>
              <h6>Microsoft</h6>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae gravida mauris, ac maximus quam. Ut semper semper turpis a
                congue.
              </p>
            </div>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body" style={{ display: 'flex' }}>
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              size="2x"
              color="purple"
              marginBottom="20px"
            />
            <img
              src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?t=st=1688123156~exp=1688123756~hmac=f9642c0e73845ff25cac83a27d1fb1d0bbcb82a469cca88373d36e1d9c22c984/150/150"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />

            <div>
              <h5 className="card-title">Lolla Smith</h5>
              <h6>Microsoft</h6>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae gravida mauris, ac maximus quam. Ut semper semper turpis a
                congue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
