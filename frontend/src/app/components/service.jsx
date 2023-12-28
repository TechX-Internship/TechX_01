import React from 'react'

const service = () => {
    return (
        <div className=' container my-5'>
            <div className="main-banner  ">
                <div className='d-flex justify-content-center'>
                    <div className="heading text-center col-6">
                        <h1 style={{ fontSize: "40px" }} className='mb-3 heading-pink heading-border position-relative lh-base '>Our Service</h1>
                        <p className='para-theme '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief, Lorem Ipsum is not simply</p>
                    </div>
                </div>
                <div className="service-card d-flex ">
                    <div className="col-3 s-card py-3 px-4 position-relative ">
                        <div className="service_heading d-flex align-items-center mb-3   ">
                            <span className='s-num d-flex justify-content-center align-items-center text-white' >1</span>
                            <h3 className='ms-3 p-0 m-0 text-white ' style={{ fontSize: "20px" }}>Surgical Services</h3>
                        </div>
                        <p className='text-white fw-light ' style={{ fontSize: '14px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting.industry. Contrary to popular</p>
                        <button className='btn fw-bold text-white ps-0 py-0' style={{ fontSize: '18px' }}>Read More <img src="/s-arrow.png" alt="" className=' img-fluid ' /></button>
                        <span className='s-num d-flex justify-content-center align-items-center text-white position-absolute' style={{backgroundColor:"#0076C2",right:"-18px",top:'43%'}} ></span>
                    </div>
                    <div className="col-3  py-3 px-4 ">
                        <div className="service_heading d-flex align-items-center mb-3   ">
                            <span className='s-num d-flex justify-content-center align-items-center text-black'>2</span>
                            <h3 className='ms-3 p-0 m-0 text-white ' style={{ fontSize: "20px" }}>Surgical Services</h3>
                        </div>
                        <p className=' fw-light para-theme' style={{ fontSize: '14px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting.industry. Contrary to popular</p>
                        <button className='btn fw-bold ps-0 py-0' style={{ fontSize: '18px' }}>Read More <img src="/s-arrowB.png" alt="" className=' img-fluid ' /></button>
                    </div>
                    <div className="col-3  py-3 px-4 ">
                        <div className="service_heading d-flex align-items-center mb-3   ">
                            <span className='s-num d-flex justify-content-center align-items-center text-black'>3</span>
                            <h3 className='ms-3 p-0 m-0 text-white ' style={{ fontSize: "20px" }}>Surgical Services</h3>
                        </div>
                        <p className=' fw-light para-theme' style={{ fontSize: '14px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting.industry. Contrary to popular</p>
                        <button className='btn fw-bold ps-0 py-0' style={{ fontSize: '18px' }}>Read More <img src="/s-arrowB.png" alt="" className=' img-fluid ' /></button>
                    </div>
                    <div className="col-3  py-3 px-4 ">
                        <div className="service_heading d-flex align-items-center mb-3   ">
                            <span className='s-num d-flex justify-content-center align-items-center text-black'>4</span>
                            <h3 className='ms-3 p-0 m-0 text-white ' style={{ fontSize: "20px" }}>Surgical Services</h3>
                        </div>
                        <p className=' fw-light para-theme' style={{ fontSize: '14px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting.industry. Contrary to popular</p>
                        <button className='btn fw-bold ps-0 py-0' style={{ fontSize: '18px' }}>Read More <img src="/s-arrowB.png" alt="" className=' img-fluid ' /></button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default service
