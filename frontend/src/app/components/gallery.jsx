import React from 'react'
const mystyle = {
    color: 'fff'
}
const gallery = () => {
    return (
        <div className=' container my-5'>
            <div className="main-banner  ">
                <div className='d-flex justify-content-center'>
                    <div className="heading text-center col-6">
                        <h1 style={{ fontSize: "40px" }} className='mb-3 heading-pink heading-center-border position-relative lh-base '>Our Gallery</h1>
                    </div>
                </div>
                <div className="gallery-img mt-5">
                    <img src="/gallrey.png" alt="" className=' img-fluid ' />
                </div>

            </div>
        </div>
    )
}

export default gallery
