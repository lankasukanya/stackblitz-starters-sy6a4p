// // import React from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faFemale } from '@fortawesome/free-solid-svg-icons';
// // //import './Components/CustomerReview.css';

// // const CustomerReview = () => {
// //   return (
// //     // <div className="card-container flex-row">
// //     <div
// //       style={{
// //         display: 'flex',
// //         justifyContent: 'space-between',
// //         marginRight: 'px',
// //       }}
// //     >
// //       <div className="card" style={{ width: '18rem', marginRight: '2rem' }}>
// //         <div className="card-body">
// //           <FontAwesomeIcon
// //             icon={faFemale}
// //             size="5x"
// //             style={{ marginBottom: '1rem' }}
// //           />
// //           <h5 className="card-title">Lolla Smith</h5>
// //           <p className="card-text">
// //             <h6>Microsoft</h6>
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
// //             gravida mauris, ac maximus quam. Ut semper semper turpis a congue.
// //           </p>
// //           <div className="rating">
// //             <span className="star">&#9733;</span>
// //             <span className="star">&#9733;</span>
// //             <span className="star">&#9733;</span>
// //             <span className="star">&#9733;</span>
// //             <span className="star">&#9734;</span>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="card" style={{ width: '18rem', marginRight: '2rem' }}>
// //         <div className="card-body">
// //           <FontAwesomeIcon
// //             icon={faFemale}
// //             size="5x"
// //             style={{ marginBottom: '1rem' }}
// //           />
// //           <h5 className="card-title">Lolla Smith</h5>
// //           <p className="card-text">
// //             <h6>Microsoft</h6>
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
// //             gravida mauris, ac maximus quam. Ut semper semper turpis a congue.
// //           </p>
// //           <div className="rating">
// //             <span className="star">&#9733;</span>
// //             <span className="star">&#9733;</span>
// //             <span className="star">&#9733;</span>
// //             <span className="star">&#9733;</span>
// //             <span className="star">&#9734;</span>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="card" style={{ width: '18rem', marginRight: '2rem' }}>
// //         <div className="card-body">
// //           <img
// //             src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?t=st=1688123156~exp=1688123756~hmac=f9642c0e73845ff25cac83a27d1fb1d0bbcb82a469cca88373d36e1d9c22c984/150/150"
// //             style={{
// //               width: '100px',
// //               height: '100px',
// //               borderRadius: '50%',
// //               objectFit: 'cover',
// //             }}
// //           />

// //           <h5 className="card-title">Lolla Smith</h5>
// //           <p className="card-text">
// //             <h6>Microsoft</h6>
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
// //             gravida mauris, ac maximus quam. Ut semper semper turpis a congue.
// //           </p>
// //           <div className="rating">
// //             <span className="star">&#9733;</span>
// //             <span className="star">&#9733;</span>
// //             <span className="star">&#9733;</span>
// //             <span className="star">&#9733;</span>
// //             <span className="star">&#9734;</span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CustomerReview;
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFemale } from '@fortawesome/free-solid-svg-icons';
// //import './Components/CustomerReview.css';

// const CustomerReview = () => {
//   return (
//     // <div className="card-container flex-row">
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         marginRight: 'px',
//       }}
//     >
//       <div className="card" style={{ width: '18rem', marginRight: '2rem' }}>
//         <div className="card-body" style={{ display: 'flex' }}>
//            <img
//             src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?t=st=1688123156~exp=1688123756~hmac=f9642c0e73845ff25cac83a27d1fb1d0bbcb82a469cca88373d36e1d9c22c984/150/150"
//             style={{
//               width: '100px',
//               height: '100px',
//               borderRadius: '50%',
//               objectFit: 'cover',
//             }}
//           />
//           <div>
//             <h5 className="card-title">Lolla Smith</h5>
//             <h6>Microsoft</h6>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
//               gravida mauris, ac maximus quam. Ut semper semper turpis a congue.
//             </p>
//             <div className="rating">
//               <span className="star">&#9733;</span>
//               <span className="star">&#9733;</span>
//               <span className="star">&#9733;</span>
//               <span className="star">&#9733;</span>
//               <span className="star">&#9734;</span>
//             </div>
            
//           </div>
//         </div>
//       </div>
//       {/* Add the same structure for the other cards */}
//     </div>
//     <div className="card" style={{ width: '18rem' }}>
//     <div className="card-body" style={{ display: 'flex' }}>
//       {/* Card content */}
      
//     </div>
//     </div>
  
//   );
// };

// export default CustomerReview;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFemale } from '@fortawesome/free-solid-svg-icons';
//import './Components/CustomerReview.css';

const CustomerReview = () => {
  return (
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
              gravida mauris, ac maximus quam. Ut semper semper turpis a congue.
            </p>
            <div className="rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
            </div>
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
              gravida mauris, ac maximus quam. Ut semper semper turpis a congue.
            </p>
            <div className="rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body" style={{ display: 'flex' }}>
        {/* <FontAwesomeIcon icon={faArrowRight} size="lg" style={{ marginLeft: '1rem' }} /> */}
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
              gravida mauris, ac maximus quam. Ut semper semper turpis a congue.
            </p>
            <div className="rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
