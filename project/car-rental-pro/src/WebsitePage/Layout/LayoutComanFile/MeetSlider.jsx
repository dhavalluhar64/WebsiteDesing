// import React from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

// function MeetSlider() {
//   const options = {
//     loop: true,
//     margin: 10,
//     nav: true,
//     dots: true,
//     navText: [
//       '<i class="fa fa-chevron-left"></i>', // Left Arrow
//       '<i class="fa fa-chevron-right"></i>', // Right Arrow
//     ],
//     responsive: {
//       0: {
//         items: 1, // 1 item on small screens
//       },
//       600: {
//         items: 2, // 2 items on medium screens
//       },
//       1000: {
//         items: 3, // 3 items on larger screens
//       },
//     },
//   };

//   return (
//     <div className="container-fluid py-5">
//       <div className="container py-5">
//         <h1 className="display-1 text-primary text-center">05</h1>
//         <h1 className="display-4 text-uppercase text-center mb-5">
//           Our Client's Say
//         </h1>

//         {/* OwlCarousel for Testimonials */}
//         <OwlCarousel className="owl-carousel testimonial-carousel" {...options}>
//           {/* Testimonial 1 */}
//           <div className="testimonial-item d-flex flex-column justify-content-center px-4">
//             <div className="d-flex align-items-center justify-content-between mb-3">
//               <img
//                 className="img-fluid ml-n4"
//                 src="img/testimonial-1.jpg"
//                 alt="Client 1"
//               />
//               <h1 className="display-2 text-white m-0 fa fa-quote-right" />
//             </div>
//             <h4 className="text-uppercase mb-2">Client Name</h4>
//             <i className="mb-2">Profession</i>
//             <p className="m-0">
//               Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum
//               stet, justo elitr dolor amet sit sea sed
//             </p>
//           </div>

//           {/* Testimonial 2 */}
//           <div className="testimonial-item d-flex flex-column justify-content-center px-4">
//             <div className="d-flex align-items-center justify-content-between mb-3">
//               <img
//                 className="img-fluid ml-n4"
//                 src="img/testimonial-2.jpg"
//                 alt="Client 2"
//               />
//               <h1 className="display-2 text-white m-0 fa fa-quote-right" />
//             </div>
//             <h4 className="text-uppercase mb-2">Client Name</h4>
//             <i className="mb-2">Profession</i>
//             <p className="m-0">
//               Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum
//               stet, justo elitr dolor amet sit sea sed
//             </p>
//           </div>

//           {/* Testimonial 3 */}
//           <div className="testimonial-item d-flex flex-column justify-content-center px-4">
//             <div className="d-flex align-items-center justify-content-between mb-3">
//               <img
//                 className="img-fluid ml-n4"
//                 src="img/testimonial-3.jpg"
//                 alt="Client 3"
//               />
//               <h1 className="display-2 text-white m-0 fa fa-quote-right" />
//             </div>
//             <h4 className="text-uppercase mb-2">Client Name</h4>
//             <i className="mb-2">Profession</i>
//             <p className="m-0">
//               Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum
//               stet, justo elitr dolor amet sit sea sed
//             </p>
//           </div>

//           {/* Testimonial 4 */}
//           <div className="testimonial-item d-flex flex-column justify-content-center px-4">
//             <div className="d-flex align-items-center justify-content-between mb-3">
//               <img
//                 className="img-fluid ml-n4"
//                 src="img/testimonial-4.jpg"
//                 alt="Client 4"
//               />
//               <h1 className="display-2 text-white m-0 fa fa-quote-right" />
//             </div>
//             <h4 className="text-uppercase mb-2">Client Name</h4>
//             <i className="mb-2">Profession</i>
//             <p className="m-0">
//               Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum
//               stet, justo elitr dolor amet sit sea sed
//             </p>
//           </div>
//         </OwlCarousel>
//       </div>
//     </div>
//   );
// }

// export default MeetSlider;

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function MeetSlider() {
  const options = {
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1, // 1 item on small screens
      },
      600: {
        items: 2, // 2 items on medium screens
      },
      1000: {
        items: 3, // 3 items on larger screens
      },
    },
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <h1 className="display-1 text-primary text-center">05</h1>
        <h1 className="display-4 text-uppercase text-center mb-5">
          Our Client's Say
        </h1>

        {/* OwlCarousel for Testimonials */}
        <OwlCarousel className="owl-carousel testimonial-carousel" {...options}>
          {/* Testimonial 1 */}
          <div className="testimonial-item text-center d-flex flex-column justify-content-center p-4 rounded shadow-sm bg-light">
            <img
              className="img-fluid rounded-circle mb-4"
              src="img/testimonial-1.jpg"
              alt="Client 1"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <h4 className="text-uppercase mb-2">Client Name</h4>
            <i className="mb-2">Profession</i>
            <p className="m-0 text-muted">
              Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum
              stet, justo elitr dolor amet sit sea sed
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-item text-center d-flex flex-column justify-content-center p-4 rounded shadow-sm bg-light">
            <img
              className="img-fluid rounded-circle mb-4"
              src="img/testimonial-2.jpg"
              alt="Client 2"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <h4 className="text-uppercase mb-2">Client Name</h4>
            <i className="mb-2">Profession</i>
            <p className="m-0 text-muted">
              Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum
              stet, justo elitr dolor amet sit sea sed
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-item text-center d-flex flex-column justify-content-center p-4 rounded shadow-sm bg-light">
            <img
              className="img-fluid rounded-circle mb-4"
              src="img/testimonial-3.jpg"
              alt="Client 3"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <h4 className="text-uppercase mb-2">Client Name</h4>
            <i className="mb-2">Profession</i>
            <p className="m-0 text-muted">
              Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum
              stet, justo elitr dolor amet sit sea sed
            </p>
          </div>

          {/* Testimonial 4 */}
          <div className="testimonial-item text-center d-flex flex-column justify-content-center p-4 rounded shadow-sm bg-light">
            <img
              className="img-fluid rounded-circle mb-4"
              src="img/testimonial-4.jpg"
              alt="Client 4"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <h4 className="text-uppercase mb-2">Client Name</h4>
            <i className="mb-2">Profession</i>
            <p className="m-0 text-muted">
              Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum
              stet, justo elitr dolor amet sit sea sed
            </p>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default MeetSlider;
