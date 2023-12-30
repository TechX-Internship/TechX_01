import React from "react";
import Button from "../components/button";

const page = () => {
  return (
    <section className="  position-relative">
      <div className="breacumb pt-5 bg-theme ">
        <div className="container">
          <div className="d-flex align-items-center ">
            <div className="col-6">
              <h1
                style={{ fontSize: "40px" }}
                className="mb-3 heading-pink heading-border position-relative lh-base "
              >
                Our Gallery
              </h1>
            </div>
            <div className="col-6 text-end ">
              <img src="/g-bradcamp.png" alt="" width={300} />
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
      <div className="gallery-content container  py-5">
        <img src="/gallery2.png" alt="" className="img-fluid" />
        <div className="text-center">
          <Button title="Load More" />
        </div>
      </div>
    </section>
  );
};

export default page;
