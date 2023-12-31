"use client"
import React from "react";
import Button from "../button";
import style from "../header/style.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const header = () => {

  const pathname = usePathname()

  console.log(pathname)

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
            <ul className="d-flex justify-content-between align-items-center mb-0 gap-4 text-decoration-none list-unstyled   ">
              <li>
                <Link
                  href={"/"}
                  className={ pathname === '/' ? `${style.active} text-decoration-none list-unstyled `  : `${style.tag} fw-normal ` }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/about"} className={ pathname === '/about' ? `${style.active} text-decoration-none list-unstyled `  : `${style.tag} fw-normal ` }>
                  About Us
                </Link>
              </li>
              <li>
                <Link href={'/service'} className={ pathname === '/service' ? `${style.active} text-decoration-none list-unstyled `  : `${style.tag} fw-normal ` }>
                  Services
                </Link>
              </li>
              <li>
                <Link href={'/team'} className={ pathname === '/team' ? `${style.active} text-decoration-none list-unstyled `  : `${style.tag} fw-normal ` }>
                  Team
                </Link>
              </li>
              <li>
                <Link href={"/blog"} className={ pathname === '/blog' ? `${style.active} text-decoration-none list-unstyled `  : `${style.tag} fw-normal ` }>
                  Blog
                </Link>
              </li>
              <li>
                <Link href={"/gallery"} className={ pathname === '/gallery' ? `${style.active} text-decoration-none list-unstyled `  : `${style.tag} fw-normal ` }>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href={'/faq'} className={ pathname === '/faq' ? `${style.active} text-decoration-none list-unstyled `  : `${style.tag} fw-normal ` }>
                  FAQ's
                </Link>
              </li>
              <li>
                <Link href={"/contact"} className={ pathname === '/contact' ? `${style.active} text-decoration-none list-unstyled `  : `${style.tag} fw-normal ` }>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="  ">
            <Button title="Book Appointment" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
