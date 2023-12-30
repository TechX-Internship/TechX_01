import React from "react";
import Button from "../components/button";

const page = () => {
  return (
    <section className=" team position-relative">
      <div className="breacumb pt-5 bg-theme ">
        <div className="container">
          <div className="d-flex align-items-center ">
            <div className="col-6">
              <h1
                style={{ fontSize: "40px" }}
                className="mb-3 heading-pink heading-border position-relative lh-base "
              >
                Contact Us
              </h1>
            </div>
            <div className="col-6 text-end ">
              <img src="/c-bradcamp.png" alt="" width={300} />
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
      <div className="contact-content container bg-theme my-5  p-5">
        <div className="bg-white p-5">
          <div className="d-flex">
            <div className="col-8 pe-4">
            <h1
                style={{ fontSize: "30px" }}
                className="mb-3 heading-pink  position-relative lh-base fw-bold"
              >
                Contact Us
              </h1>
              <input type="text" className="form-control rounded-0  mb-3" placeholder="Name" />
              <input type="text" className="form-control rounded-0  mb-3" placeholder="Phone Number" />
              <input type="text" className="form-control rounded-0  mb-3" placeholder="Email" />
              <textarea name="" id="" className="form-control rounded-0 mb-3" placeholder="Subject" cols="20" rows="7"></textarea>
              <div className="w-100">
                <Button title='Submit' />
              </div>
            </div>
            <div className="col-4">
              <img src="/map.png" alt="" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
