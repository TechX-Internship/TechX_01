import React from "react";
import Button from "../components/button";

const page = () => {
  return (
    <section className=" service position-relative">
      <div className="breacumb pt-5 bg-theme ">
        <div className="container">
          <div className="d-flex align-items-center ">
            <div className="col-6">
              <h1
                style={{ fontSize: "40px" }}
                className="mb-3 heading-pink heading-border position-relative lh-base "
              >
                Our Services{" "}
              </h1>
            </div>
            <div className="col-6 text-end ">
              <img src="/s-bradcamp.png" alt="" width={300} />
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
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1
            style={{ fontSize: "30px" }}
            className="mb-3 heading-pink heading-border position-relative lh-base "
          >
            Surgical Services
          </h1>
        </div>
        <div className="d-flex   justify-content-between ">
          <div className="col-4">
            <div
              className="d-flex align-items-center  justify-content-between p-3 mb-3 bg-theme"
              style={{ boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.05)" }}
            >
              <h6 className="mb-0 fw-semibold">
                Gastroenterologist in Ahmedabad
              </h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.9738 7.58331C16.9738 7.13458 17.3376 6.77081 17.7863 6.77081H23.8337C24.2824 6.77081 24.6462 7.13458 24.6462 7.58331V13.5913C24.6462 14.04 24.2824 14.4038 23.8337 14.4038C23.3849 14.4038 23.0212 14.04 23.0212 13.5913V9.53641L16.374 16.143C15.866 16.648 15.4281 17.0833 15.0304 17.385C14.6041 17.7084 14.1305 17.953 13.5474 17.953C12.9644 17.9529 12.4908 17.7081 12.0646 17.3847C11.667 17.0829 11.2292 16.6475 10.7213 16.1424L10.4242 15.847C9.86719 15.2931 9.50605 14.9365 9.20536 14.7082C8.92344 14.4943 8.79164 14.4704 8.70436 14.4705C8.61708 14.4705 8.4853 14.4945 8.20353 14.7086C7.903 14.937 7.54213 15.294 6.98554 15.8482L2.74031 20.0757C2.42235 20.3923 1.9079 20.3913 1.59126 20.0733C1.27463 19.7553 1.27571 19.2409 1.59367 18.9243L5.87669 14.6592C6.38469 14.1532 6.82253 13.7172 7.22022 13.4149C7.64651 13.0909 8.12029 12.8457 8.70377 12.8455C9.28724 12.8452 9.7612 13.0901 10.1877 13.4138C10.5856 13.7158 11.0238 14.1515 11.5322 14.6571L11.8293 14.9525C12.3858 15.5059 12.7466 15.8622 13.047 16.0903C13.3287 16.304 13.4604 16.3279 13.5476 16.328C13.6349 16.328 13.7666 16.3041 14.0483 16.0904C14.3487 15.8624 14.7096 15.5062 15.2663 14.9529L21.8636 8.39581H17.7863C17.3376 8.39581 16.9738 8.03204 16.9738 7.58331Z"
                  fill="#1C274C"
                />
              </svg>
            </div>
            <div
              className="d-flex align-items-center  justify-content-between p-3 bg-white mb-3"
              style={{ boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.05)" }}
            >
              <h6 className="mb-0 fw-semibold para-theme">
                Laparoscopic Surgery
              </h6>
            </div>
            <div
              className="d-flex align-items-center  justify-content-between p-3 bg-white mb-3"
              style={{ boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.05)" }}
            >
              <h6 className="mb-0 fw-semibold para-theme">
                Bariatric & Obesity Surgery
              </h6>
            </div>
            <div
              className="d-flex align-items-center  justify-content-between p-3 bg-white mb-3"
              style={{ boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.05)" }}
            >
              <h6 className="mb-0 fw-semibold para-theme">
                Laparoscopic Fundoplication Surgery
              </h6>
            </div>
            <div
              className="d-flex align-items-center  justify-content-between p-3 bg-white mb-3"
              style={{ boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.05)" }}
            >
              <h6 className="mb-0 fw-semibold para-theme">General Surgery</h6>
            </div>
            <div
              className="d-flex align-items-center  justify-content-between p-3 bg-white mb-3"
              style={{ boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.05)" }}
            >
              <h6 className="mb-0 fw-semibold para-theme">Neuro Surgery</h6>
            </div>
            <div
              className="d-flex align-items-center  justify-content-between p-3 bg-white mb-3"
              style={{ boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.05)" }}
            >
              <h6 className="mb-0 fw-semibold para-theme">Spine Surgery</h6>
            </div>
            <div
              className="d-flex align-items-center  justify-content-between p-3 bg-white mb-3"
              style={{ boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.05)" }}
            >
              <h6 className="mb-0 fw-semibold para-theme">
                Orthopaedics / Trauma Surgery
              </h6>
            </div>
            <div
              className="d-flex align-items-center  justify-content-between p-3 bg-white mb-3"
              style={{ boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.05)" }}
            >
              <h6 className="mb-0 fw-semibold para-theme">
                Best Cancer Hospital in Ahmedabad
              </h6>
            </div>
            <div
              className="d-flex align-items-center  justify-content-between p-3 bg-white mb-3"
              style={{ boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.05)" }}
            >
              <h6 className="mb-0 fw-semibold para-theme">
                ENT specialist in Ahmedabad
              </h6>
            </div>
            <div
              className="d-flex align-items-center  justify-content-between p-3 bg-white mb-3"
              style={{ boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.05)" }}
            >
              <h6 className="mb-0 fw-semibold para-theme">Urology Surgery</h6>
            </div>
            <div
              className="d-flex align-items-center  justify-content-between p-3 bg-white mb-3"
              style={{ boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.05)" }}
            >
              <h6 className="mb-0 fw-semibold para-theme">
                Cosmetic And Plastic Surgery
              </h6>
            </div>
            <div
              className="d-flex align-items-center  justify-content-between p-3 bg-white mb-3"
              style={{ boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.05)" }}
            >
              <h6 className="mb-0 fw-semibold para-theme">
                Dental Clinic in Ahmedabad
              </h6>
            </div>
            <div
              className="d-flex align-items-center  justify-content-between p-3 bg-white mb-3"
              style={{ boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.05)" }}
            >
              <h6 className="mb-0 fw-semibold para-theme">Vascular Surgery</h6>
            </div>
          </div>
          <div className="col-8 ps-4">
            <img
              src="/service-img.png"
              alt=""
              className="img-fluid w-100 mb-3"
              style={{ height: "600px" }}
            />
            <ul className="p-0 ">
              <li className=" d-flex ">
                <img src="/arrow.png" alt="" height={22} className="me-2" />
                <p className="para-theme">
                  Nidhi Hospital is one of the Best Midsize Multi Specialty in
                  Ahmedabad.
                </p>
              </li>
              <li className=" d-flex ">
                <img src="/arrow.png" alt="" height={22} className="me-2" />
                <p className="para-theme">
                  Nidhi Hospital was one of the First Hospital in Gujarat to
                  receive NABH Accreditation and ISO 9001:2015 certificate.
                </p>
              </li>
              <li className=" d-flex ">
                <img src="/arrow.png" alt="" height={22} className="me-2" />
                <p className="para-theme">
                  Nidhi Hospital is a very Cosy Unit in Navrangpura – The Heart
                  of Ahmedabad City. Nidhi Hospital caters to almost All Super
                  Specialities & Sub-Specialities except Invasive Cardiology &
                  routine Obstetrics – Normal Delivery.
                </p>
              </li>
              <li className=" d-flex ">
                <img src="/arrow.png" alt="" height={22} className="me-2" />
                <p className="para-theme">
                  Nidhi Hospital is a Unique Institution which is run and
                  managed by professional staffs under the leadership of Eminent
                  Doctors.
                </p>
              </li>
              <li className=" d-flex ">
                <img src="/arrow.png" alt="" height={22} className="me-2" />
                <p className="para-theme">
                  Surgical Gastroenterology has made phenomenal advances and has
                  created a niche for itself, to keep in step with advances in
                  medical Gastroenterology.
                </p>
              </li>
            </ul>
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
