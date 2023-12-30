import React from 'react'
import Button from '../button'
import style from '../header/style.module.css'

const header = () => {
    return (
        <div className=' container '>
            <div className={`${style.header} d-flex  align-items-center justify-content-between pt-2  `}>
                <div className={style.logo}>
                    <img src='/logo.png' alt="" />
                </div>
                <div className="menu">
                    <ul className='d-flex justify-content-between align-items-center mb-0 gap-4 list-unstyled  '>
                        <li><a href="" className={`${style.tag} ${style.active} fw-bold `}>Home</a></li>
                        <li><a href="" className={`${style.tag} fw-lighter `}>About Us</a></li>
                        <li><a href="" className={`${style.tag} fw-lighter `}>Services</a></li>
                        <li><a href="" className={`${style.tag} fw-lighter `}>Team</a></li>
                        <li><a href="" className={`${style.tag} fw-lighter `}>Blog</a></li>
                        <li><a href="" className={`${style.tag} fw-lighter `}>Gallery</a></li>
                        <li><a href="" className={`${style.tag} fw-lighter `}>FAQ's</a></li>
                        <li><a href="" className={`${style.tag} fw-lighter `}>Contact Us</a></li>
                    </ul>
                </div>
                <div className=''>
                    <Button title='Book Appointment'/>
                </div>
            </div>
        </div>
    )
}

export default header
