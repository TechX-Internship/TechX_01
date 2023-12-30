import React from 'react'

const footer = () => {
    return (
        <section className=' footer  pt-5 pb-3'>
            <div className="container  ">
                <div className="col-12 d-flex">
                    <div className="col-3">
                        <img src="/logo.png" alt="" className='mb-3' />
                        <p className='para-theme fw-normal '>Nidhi healthcare Ltd. has embarked on an ambitious initiative with the launch of Nidhi Hospital a 100 beds Multi Specialty in heart of Ahmedabad. As an associate hospital of Nidhi healthcare Ltd. Nidhi Hospital offers a holistic range of medical services to patients from across the globe.</p>
                        <div className="d-flex align-items-center mb-3">
                            <img src="/foot1.png" alt="" />
                            <p className='para-theme fw-normal ms-2 mb-0'>+91 98987 42121</p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <img src="/foot2.png" alt="" />
                            <p className='para-theme fw-normal ms-2 mb-0'>nidhihospital2011@gmail.com</p>
                        </div>
                        <div className="d-flex align-items-start     mb-3">
                            <img src="/foot3.png" alt="" />
                            <p className='para-theme fw-normal ms-2 mb-0'>Nidhi Hospital, Stadium Commerce College Road, Navarangpura, Ahmedabad - 380009. Gujarat. India.</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <h4 className='text-white'>QUICK LINKS</h4>
                        <ul className='para-theme lh-lg ' style={{fontSize:'16px'}}>
                            <li>ABOUT US</li>
                            <li>MD’S MESSAGE</li>
                            <li>FACILITIES</li>
                            <li>GALLERY</li>
                            <li>FAQ</li>
                            <li>CAREER</li>
                            <li>BLOG</li>
                            <li>AWARDS & AFFILIATIONS</li>
                            <li>CONTACT US</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <div className='mb-3'>
                            <h4 className='text-white'>Emergency No </h4>
                            <p className='para-theme fw-normal '>+91-79-4023 221</p>
                        </div>
                        <div className='mb-4'>
                            <h4 className='text-white'>Health check up inquiry</h4>
                            <p className='para-theme fw-normal '>+91-79-4023 221</p>
                        </div>
                        <div>
                            <h4 className='text-white'>Social Media  </h4>
                            <img src="/social.png" alt="" />
                        </div>
                    </div>
                    <div className="col-3">
                        <h4 className='text-white'>OUR ACHIEVEMENTS</h4>
                        <img src="/archive.png" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <p className='para-theme text-center pt-2' style={{fontSize:'16px',borderTop:"2px solid #353535"}} >Copyright ©2023 All Rights Reserved Nidhi Healthcare Ltd.</p>
            </div>
        </section>
    )
}

export default footer
