import React from 'react'
import Button from '../components/button'

const about = () => {
    return (
        <div className=' container mt-5'>
            <div className="main-banner d-flex align-items-center ">
                <div className="col-6 pe-3 ">
                    <img src="/aboutBanner.png" alt="" className='img-fluid' />
                </div>
                <div className="col-6 ps-4">
                    <h1 style={{ fontSize: "40px" }} className='mb-3 heading-pink heading-border position-relative lh-base '>About Us </h1>
                    <ul className='p-0 '>
                        <li className=' d-flex '>
                            <img src="/arrow.png" alt="" height={22} className='me-2' />
                            <p className='para-theme'>Nidhi Hospital is one of the Best Midsize Multi Specialty in Ahmedabad.</p>
                        </li>
                        <li className=' d-flex '>
                            <img src="/arrow.png" alt="" height={22} className='me-2' />
                            <p className='para-theme'>Nidhi Hospital was one of the First Hospital in Gujarat to receive NABH Accreditation and ISO 9001:2015 certificate.</p>
                        </li>
                        <li className=' d-flex '>
                            <img src="/arrow.png" alt="" height={22} className='me-2' />
                            <p className='para-theme'>Nidhi Hospital is a very Cosy Unit in Navrangpura – The Heart of Ahmedabad City. Nidhi Hospital caters to almost All Super Specialities & Sub-Specialities except Invasive Cardiology & routine Obstetrics – Normal Delivery.</p>
                        </li>
                        <li className=' d-flex '>
                            <img src="/arrow.png" alt="" height={22} className='me-2' />
                            <p className='para-theme'>Nidhi Hospital is a Unique Institution which is run and managed by professional staffs under the leadership of Eminent Doctors.</p>
                        </li>
                    </ul>
                    <Button title='Read More'/>
                </div>
            </div>
        </div>
    )
}

export default about
