import React from "react";
import Button from "../button";
import style from "../header/style.module.css";
import Link from "next/link";

const header = () => {
  return (
    <header>
      <div className=" container ">
        <div
          className={`${style.header} d-flex  align-items-center justify-content-between pt-2  `}
        >
          <div className={style.logo}>
            <img src="/logo.png" alt="" />
          </div>
          <div className="menu">
            <ul className="d-flex justify-content-between align-items-center mb-0 gap-4 list-unstyled  ">
              <li>
                <Link
                  href={"/"}
                  className={`${style.tag} ${style.active} fw-bold `}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/about"} className={`${style.tag} fw-lighter `}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href={'/service'} className={`${style.tag} fw-lighter `}>
                  Services
                </Link>
              </li>
              <li>
                <Link href={'/team'} className={`${style.tag} fw-lighter `}>
                  Team
                </Link>
              </li>
              <li>
                <Link href={"/blog"} className={`${style.tag} fw-lighter `}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href={"/gallery"} className={`${style.tag} fw-lighter `}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href={'/faq'} className={`${style.tag} fw-lighter `}>
                  FAQ's
                </Link>
              </li>
              <li>
                <Link href={"/contact"} className={`${style.tag} fw-lighter `}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <Button title="Book Appointment" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
