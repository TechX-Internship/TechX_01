import React from "react";

const page = () => {
  return (
    <section className=" about position-relative">
      <div className="breacumb pt-5 bg-theme ">
        <div className="container">
          <div className="d-flex align-items-center ">
            <div className="col-6">
              <h1
                style={{ fontSize: "40px" }}
                className="mb-3 heading-pink heading-border position-relative lh-base "
              >
                About Us{" "}
              </h1>
            </div>
            <div className="col-6 text-end ">
              <img src="/Vector.png" alt="" width={300} />
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
      <div className="about-content container  py-5">
        <div className="bg-theme p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1
              style={{ fontSize: "30px" }}
              className="mb-3 heading-pink heading-border position-relative lh-base "
            >
              About Us
            </h1>
            <div className="d-flex align-items-center">
              <img
                src="/global.png"
                alt=""
                className="img-fluid"
                width={32}
                height={32}
              />
              <p className="mb-0 ms-2">nidhihospital2011@gmail.com</p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div className="col-6">
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
                    Nidhi Hospital is a very Cosy Unit in Navrangpura – The
                    Heart of Ahmedabad City. Nidhi Hospital caters to almost All
                    Super Specialities & Sub-Specialities except Invasive
                    Cardiology & routine Obstetrics – Normal Delivery.
                  </p>
                </li>
                <li className=" d-flex ">
                  <img src="/arrow.png" alt="" height={22} className="me-2" />
                  <p className="para-theme">
                    Nidhi Hospital is a Unique Institution which is run and
                    managed by professional staffs under the leadership of
                    Eminent Doctors.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-6 ">
              <div className="ps-3">
                <img src="/about1.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div className="col-6 pe-3">
              <img src="/about2.png" alt="" className="img-fluid" />
            </div>
            <div className="col-6">
              <ul className="p-0 ">
                <li className=" d-flex ">
                  <img src="/arrow.png" alt="" height={22} className="me-2" />
                  <p className="para-theme">
                    Nidhi Hospital has advanced Modern Equipments for
                    Laparoscopic Surgery, Gastro Surgery, GI Endoscopy, Obesity
                    Surgery, Orthopaedics & Trauma Surgery, Joint Replacement
                    Surgery, Neuro Surgery, Dialysis Unit, Intensive Care Unit,
                    Isolation Unit, Urology, E.N.T. Surgery, Dental Clinic and
                    Plastic Surgery.
                  </p>
                </li>
                <li className=" d-flex ">
                  <img src="/arrow.png" alt="" height={22} className="me-2" />
                  <p className="para-theme">
                  Nidhi Hospital has more than 50,000 patients’ base and caters to Ahmedabad, Gujrat. And nearby states. Nidhi Hospital receives many Patients from Overseas Countries. NRIs living Abroad and Residents of many African and Western Countries.
                  </p>
                </li>
                <li className=" d-flex ">
                  <img src="/arrow.png" alt="" height={22} className="me-2" />
                  <p className="para-theme mb-0">
                    Nidhi Hospital has won the Award for Best Midsize
                    Multi-Specialty in Ahmedabad – “Pride for the City”.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex align-items-center ">
            <div className="col-6 pe-3">
              <ul className="p-0 ">
               
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
                    Nidhi Hospital is a very Cosy Unit in Navrangpura – The
                    Heart of Ahmedabad City. Nidhi Hospital caters to almost All
                    Super Specialities & Sub-Specialities except Invasive
                    Cardiology & routine Obstetrics – Normal Delivery.
                  </p>
                </li>
                <li className=" d-flex ">
                  <img src="/arrow.png" alt="" height={22} className="me-2" />
                  <p className="para-theme">
                    Nidhi Hospital is a Unique Institution which is run and
                    managed by professional staffs under the leadership of
                    Eminent Doctors.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="">
                <img src="/about3.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
