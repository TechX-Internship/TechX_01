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
                    <button className='btn btn-primary rounded-0 fw-normal' style={{ fontSize: '20px' }}>View All
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" className='ms-1' viewBox="0 0 23 22" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.17157 3.39624C3.97845 3.5896 3.86998 3.85171 3.86998 4.12499C3.86998 4.39828 3.97845 4.66038 4.17157 4.85374L10.3164 11L4.1702 17.1462C3.98243 17.3408 3.87861 17.6014 3.88109 17.8718C3.88356 18.1422 3.99214 18.4008 4.18343 18.5919C4.37473 18.783 4.63343 18.8913 4.90382 18.8935C5.17422 18.8958 5.43466 18.7917 5.62907 18.6037L12.5041 11.7287C12.6972 11.5354 12.8057 11.2733 12.8057 11C12.8057 10.7267 12.6972 10.4646 12.5041 10.2712L5.62907 3.39624C5.5333 3.30041 5.41959 3.22439 5.29443 3.17253C5.16927 3.12066 5.03511 3.09396 4.89963 3.09396C4.76415 3.09396 4.63 3.12066 4.50484 3.17253C4.37968 3.22439 4.26596 3.30041 4.1702 3.39624H4.17157Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0466 3.39624C10.8535 3.5896 10.745 3.85171 10.745 4.12499C10.745 4.39828 10.8535 4.66038 11.0466 4.85374L17.1914 11L11.0452 17.1462C10.8574 17.3408 10.7536 17.6014 10.7561 17.8718C10.7586 18.1422 10.8671 18.4008 11.0584 18.5919C11.2497 18.783 11.5084 18.8913 11.7788 18.8935C12.0492 18.8958 12.3097 18.7917 12.5041 18.6037L19.3791 11.7287C19.5722 11.5354 19.6807 11.2733 19.6807 11C19.6807 10.7267 19.5722 10.4646 19.3791 10.2712L12.5041 3.39624C12.4083 3.30041 12.2946 3.22439 12.1694 3.17253C12.0443 3.12066 11.9101 3.09396 11.7746 3.09396C11.6392 3.09396 11.505 3.12066 11.3798 3.17253C11.2547 3.22439 11.141 3.30041 11.0452 3.39624H11.0466Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default about
