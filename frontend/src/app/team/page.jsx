import React from "react";
import Button from "../components/button";
import Team2 from '../components/team2'

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
                About Us
              </h1>
            </div>
            <div className="col-6 text-end ">
              <img src="/t-bradcamp.png" alt="" width={300} />
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
      <div className="service-content container  py-5">
        <div className="col-12 mb-3">
          <div className="d-flex justify-content-between align-items-center ">
            <div className="col-3">
              <div className="team-img">
                <img src="/t1.png" alt="" />
              </div>
            </div>
            <div className="col-3">
              <div className="team-img">
                <img src="/t2.png" alt="" />
              </div>
            </div>
            <div className="col-3">
              <div className="team-img">
                <img src="/t3.png" alt="" />
              </div>
            </div>
            <div className="col-3">
              <div className="team-img">
                <img src="/t4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mb-3">
          <div className="d-flex justify-content-between align-items-center ">
            <div className="col-3">
              <div className="team-img">
                <img src="/t5.png" alt="" />
              </div>
            </div>
            <div className="col-3">
              <div className="team-img">
                <img src="/t2.png" alt="" />
              </div>
            </div>
            <div className="col-3">
              <div className="team-img">
                <img src="/t3.png" alt="" />
              </div>
            </div>
            <div className="col-3">
              <div className="team-img">
                <img src="/t6.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mb-3">
          <div className="d-flex justify-content-between align-items-center ">
            <div className="col-3">
              <div className="team-img">
                <img src="/t1.png" alt="" />
              </div>
            </div>
            <div className="col-3">
              <div className="team-img">
                <img src="/t2.png" alt="" />
              </div>
            </div>
            <div className="col-3">
              <div className="team-img">
                <img src="/t3.png" alt="" />
              </div>
            </div>
            <div className="col-3">
              <div className="team-img">
                <img src="/t4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Button title="Load More" />
        </div>

      </div>
      <Team2/>
    </section>
  );
};

export default page;
