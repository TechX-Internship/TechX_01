import React from "react";
import Button from "../components/button";

const page = () => {
  return (
    <section className=" blog position-relative">
      <div className="breacumb pt-5 bg-theme ">
        <div className="container">
          <div className="d-flex align-items-center ">
            <div className="col-6">
              <h1
                style={{ fontSize: "40px" }}
                className="mb-3 heading-pink heading-border position-relative lh-base "
              >
                Our Blog
              </h1>
            </div>
            <div className="col-6 text-end ">
              <img src="/blog.png" alt="" width={300} />
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
      <div className="blog-content py-5 container ">
        <div className="row  col-12 ">
          <div
            class="col-4 mb-3"
            style={{ boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.06)" }}
          >
            <div className="card rounded-0 border-0  ">
              <img src="/blog1.jpg" alt="..." className="p-3" />
              <div class="card-body">
                <h5
                  class="card-title text-primary"
                  style={{ fontSize: "24px" }}
                >
                  NIDHI HOSPITAL VERY KEEN ON STAFF TRAINING
                </h5>
                <p class="card-text para-theme">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
                <div className="d-flex justify-content-between  ">
                  <div className="d-flex align-items-center ">
                    <img src="/Calendar.png" alt="" />
                    <p className="para-theme mb-0 ms-1">April 15, 2023</p>
                  </div>
                  <div className="d-flex align-items-center ">
                    <p className="text-primary mb-0 mx-2">Read More</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="16"
                      viewBox="0 0 23 16"
                      fill="none"
                    >
                      <path
                        d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.2929L16.3431 0.928934C15.9526 0.538409 15.3195 0.538409 14.9289 0.928933C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM-8.74228e-08 9L22 9L22 7L8.74228e-08 7L-8.74228e-08 9Z"
                        fill="#0072BC"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-4 mb-3"
            style={{ boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.06)" }}
          >
            <div className="card rounded-0 border-0  ">
              <img src="/blog2.jpg" alt="..." className="p-3" />
              <div class="card-body">
                <h5
                  class="card-title text-primary"
                  style={{ fontSize: "24px" }}
                >
                  OUR PATIENT’S TRUE STORY
                </h5>
                <p class="card-text para-theme">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
                <div className="d-flex justify-content-between  ">
                  <div className="d-flex align-items-center ">
                    <img src="/Calendar.png" alt="" />
                    <p className="para-theme mb-0 ms-1">April 15, 2023</p>
                  </div>
                  <div className="d-flex align-items-center ">
                    <p className="text-primary mb-0 mx-2">Read More</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="16"
                      viewBox="0 0 23 16"
                      fill="none"
                    >
                      <path
                        d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.2929L16.3431 0.928934C15.9526 0.538409 15.3195 0.538409 14.9289 0.928933C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM-8.74228e-08 9L22 9L22 7L8.74228e-08 7L-8.74228e-08 9Z"
                        fill="#0072BC"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-4 mb-3"
            style={{ boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.06)" }}
          >
            <div className="card rounded-0 border-0  ">
              <img src="/blog3.jpg" alt="..." className="p-3" />
              <div class="card-body">
                <h5
                  class="card-title text-primary"
                  style={{ fontSize: "24px" }}
                >
                  WHY NIDHI HOSPITAL FOR TREATMENT
                </h5>
                <p class="card-text para-theme">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
                <div className="d-flex justify-content-between  ">
                  <div className="d-flex align-items-center ">
                    <img src="/Calendar.png" alt="" />
                    <p className="para-theme mb-0 ms-1">April 15, 2023</p>
                  </div>
                  <div className="d-flex align-items-center ">
                    <p className="text-primary mb-0 mx-2">Read More</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="16"
                      viewBox="0 0 23 16"
                      fill="none"
                    >
                      <path
                        d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.2929L16.3431 0.928934C15.9526 0.538409 15.3195 0.538409 14.9289 0.928933C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM-8.74228e-08 9L22 9L22 7L8.74228e-08 7L-8.74228e-08 9Z"
                        fill="#0072BC"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-4 mb-3"
            style={{ boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.06)" }}
          >
            <div className="card rounded-0 border-0  ">
              <img src="/blog4.png" alt="..." className="p-3" />
              <div class="card-body">
                <h5
                  class="card-title text-primary"
                  style={{ fontSize: "24px" }}
                >
                  The Importance of Regular Health Check-Up
                </h5>
                <p class="card-text para-theme">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
                <div className="d-flex justify-content-between  ">
                  <div className="d-flex align-items-center ">
                    <img src="/Calendar.png" alt="" />
                    <p className="para-theme mb-0 ms-1">April 15, 2023</p>
                  </div>
                  <div className="d-flex align-items-center ">
                    <p className="text-primary mb-0 mx-2">Read More</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="16"
                      viewBox="0 0 23 16"
                      fill="none"
                    >
                      <path
                        d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.2929L16.3431 0.928934C15.9526 0.538409 15.3195 0.538409 14.9289 0.928933C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM-8.74228e-08 9L22 9L22 7L8.74228e-08 7L-8.74228e-08 9Z"
                        fill="#0072BC"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-4 mb-3"
            style={{ boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.06)" }}
          >
            <div className="card rounded-0 border-0  ">
              <img src="/blog-5.png" alt="..." className="p-3" />
              <div class="card-body">
                <h5
                  class="card-title text-primary"
                  style={{ fontSize: "24px" }}
                >
                  How to Prepare for Surgery: A Step-by-Step Guide"
                </h5>
                <p class="card-text para-theme">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
                <div className="d-flex justify-content-between  ">
                  <div className="d-flex align-items-center ">
                    <img src="/Calendar.png" alt="" />
                    <p className="para-theme mb-0 ms-1">April 15, 2023</p>
                  </div>
                  <div className="d-flex align-items-center ">
                    <p className="text-primary mb-0 mx-2">Read More</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="16"
                      viewBox="0 0 23 16"
                      fill="none"
                    >
                      <path
                        d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.2929L16.3431 0.928934C15.9526 0.538409 15.3195 0.538409 14.9289 0.928933C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM-8.74228e-08 9L22 9L22 7L8.74228e-08 7L-8.74228e-08 9Z"
                        fill="#0072BC"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-4 mb-3"
            style={{ boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.06)" }}
          >
            <div className="card rounded-0 border-0  ">
              <img src="/blog6.png" alt="..." className="p-3" />
              <div class="card-body">
                <h5
                  class="card-title text-primary"
                  style={{ fontSize: "24px" }}
                >
                  Exploring the Benefits of Telemedicine in Healthcare
                </h5>
                <p class="card-text para-theme">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
                <div className="d-flex justify-content-between  ">
                  <div className="d-flex align-items-center ">
                    <img src="/Calendar.png" alt="" />
                    <p className="para-theme mb-0 ms-1">April 15, 2023</p>
                  </div>
                  <div className="d-flex align-items-center ">
                    <p className="text-primary mb-0 mx-2">Read More</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="16"
                      viewBox="0 0 23 16"
                      fill="none"
                    >
                      <path
                        d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.2929L16.3431 0.928934C15.9526 0.538409 15.3195 0.538409 14.9289 0.928933C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM-8.74228e-08 9L22 9L22 7L8.74228e-08 7L-8.74228e-08 9Z"
                        fill="#0072BC"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Button title="Load More" />
        </div>
      </div>
    </section>
  );
};

export default page;
