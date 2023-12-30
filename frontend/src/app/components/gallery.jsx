import React from 'react'
import Button from '../components/button'

const gallery = () => {
    return (
        <section className='gallery'>
            <div className=' container py-5'>
                <div className="main-banner  ">
                    <div className='d-flex justify-content-center'>
                        <div className="heading text-center col-6">
                            <h1 style={{ fontSize: "40px" }} className='mb-3 heading-pink heading-center-border position-relative lh-base '>Our Gallery</h1>
                        </div>
                    </div>
                    <div className="gallery-img mt-3">
                        <img src="/gallrey.png" alt="" className=' img-fluid ' />
                    </div>
                    <div className="text-center mt-3">
                        <Button title='View All' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default gallery
