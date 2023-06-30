// import React from 'react';
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
//       <div className="card" style={{ width: '18rem',marginRight:'2rem' }}>
//         <div className="card-body">
//           <h5 className="card-title">Lolla Smith</h5>
//           <p className="card-text">
//             <h6>Microsoft</h6>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
//             gravida mauris, ac maximus quam. Ut semper semper turpis a congue.
//           </p>
//           <div className="rating">
//             <span className="star">&#9733;</span>
//             <span className="star">&#9733;</span>
//             <span className="star">&#9733;</span>
//             <span className="star">&#9733;</span>
//             <span className="star">&#9734;</span>
//           </div>
//         </div>
//       </div>
//       <div className="card" style={{ width: '18rem' ,marginRight:'2rem'}}>
//         <div className="card-body">
//           <h5 className="card-title">Lolla Smith</h5>
//           <p className="card-text">
//             <h6>Microsoft</h6>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
//             gravida mauris, ac maximus quam. Ut semper semper turpis a congue.
//           </p>
//           <div className="rating">
//             <span className="star">&#9733;</span>
//             <span className="star">&#9733;</span>
//             <span className="star">&#9733;</span>
//             <span className="star">&#9733;</span>
//             <span className="star">&#9734;</span>
//           </div>
//         </div>
//       </div>
//       <div className="card" style={{ width: '18rem' ,marginRight:'2rem'}}>
//         <div className="card-body">
//           <h5 className="card-title">Lolla Smith</h5>
//           <p className="card-text">
//             <h6>Microsoft</h6>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
//             gravida mauris, ac maximus quam. Ut semper semper turpis a congue.
//           </p>
//           <div className="rating">
//             <span className="star">&#9733;</span>
//             <span className="star">&#9733;</span>
//             <span className="star">&#9733;</span>
//             <span className="star">&#9733;</span>
//             <span className="star">&#9734;</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerReview;
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
//         <div className="card-body">
//           <h5 className="card-title">
//             <FontAwesomeIcon icon={faFemale} /> Lolla Smith
//           </h5>
//           <p className="card-text">
//             <h6>Microsoft</h6>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
//             gravida mauris, ac maximus quam. Ut semper semper turpis a congue.
//           </p>
//           <div className="rating">
//             <span className="star">&#9733;</span>
//             <span className="star">&#9733;</span>
//             <span className="star">&#9733;</span>
//             <span className="star">&#9733;</span>
//             <span className="star">&#9734;</span>
//           </div>
//         </div>
//       </div>
//       <div className="card" style={{ width: '18rem', marginRight: '2rem' }}>
//         <div className="card-body">
//           <h5 className="card-title">
//             <FontAwesomeIcon icon={faFemale} /> Lolla Smith
//           </h5>
//           <p className="card-text">
//             <h6>Microsoft</h6>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
//             gravida mauris, ac maximus quam. Ut semper semper turpis a congue.
//           </p>
//           <div className="rating">
//             <span className="star">&#9733;</span>
//             <span className="star">&#9733;</span>
//             <span className="star">&#9733;</span>
//             <span className="star">&#9733;</span>
//             <span className="star">&#9734;</span>
//           </div>
//         </div>
//       </div>
//       <div className="card" style={{ width: '18rem', marginRight: '2rem' }}>
//         <div className="card-body">
//           <h5 className="card-title">
//             <FontAwesomeIcon icon={faFemale} /> Lolla Smith
//           </h5>
//           <p className="card-text">
//             <h6>Microsoft</h6>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
//             gravida mauris, ac maximus quam. Ut semper semper turpis a congue.
//           </p>
//           <div className="rating">
//             <span className="star">&#9733;</span>
//             <span className="star">&#9733;</span>
//             <span className="star">&#9733;</span>
//             <span className="star">&#9733;</span>
//             <span className="star">&#9734;</span>
//           </div>
//         </div>
//       </div>
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
    // <div className="card-container flex-row">
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginRight: 'px',
      }}
    >
      <div className="card" style={{ width: '18rem', marginRight: '2rem' }}>
        <div className="card-body">
          <FontAwesomeIcon icon={faFemale} size="5x" style={{ marginBottom: '1rem' }} />
          <h5 className="card-title">Lolla Smith</h5>
          <p className="card-text">
            <h6>Microsoft</h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae gravida mauris, ac maximus quam. Ut
            semper semper turpis a congue.
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
      <div className="card" style={{ width: '18rem', marginRight: '2rem' }}>
        <div className="card-body">
          <FontAwesomeIcon icon={faFemale} size="5x" style={{ marginBottom: '1rem' }} />
          <h5 className="card-title">Lolla Smith</h5>
          <p className="card-text">
            <h6>Microsoft</h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae gravida mauris, ac maximus quam. Ut
            semper semper turpis a congue.
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
      <div className="card" style={{ width: '18rem', marginRight: '2rem' }}>
        <div className="card-body">
          <FontAwesomeIcon icon={faFemale} size="5x" style={{ marginBottom: '1rem' }} />
          <h5 className="card-title">Lolla Smith</h5>
          <p className="card-text">
            <h6>Microsoft</h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae gravida mauris, ac maximus quam. Ut
            semper semper turpis a congue.
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
  );
};

export default CustomerReview;
