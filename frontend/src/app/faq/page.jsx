import React from "react";
import Faq from '../components/faq'

const page = () => {
  return (
    <section className="Faq  position-relative">
      <div className="breacumb pt-5 bg-theme ">
        <div className="container">
          <div className="d-flex align-items-center ">
            <div className="col-6">
              <h1
                style={{ fontSize: "40px" }}
                className="mb-3 heading-pink heading-border position-relative lh-base "
              >
                Our Faq's
              </h1>
            </div>
            <div className="col-6 text-end ">
              <img src="/faq.png" alt="" width={300} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="position-absolute z-n1 "
        style={{ top: "-70%", left: "-5%" }}
      >
        <img src="/Ellipse.png" alt="" className="img-fluid" />
      </div>
    <Faq/>
    </section>
  );
};

export default page;
