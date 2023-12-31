import React from 'react'
import Button from '../components/button'

const media = () => {
    return (
        <section className='py-5 team'>
            <div className="container">
                <div className='d-flex justify-content-between align-items-center '>
                    <h1 style={{ fontSize: "40px" }} className='mb-3 heading-pink heading-border position-relative lh-base '>Media Interviews</h1>
                    <Button title='View All' />
                </div>
                <p className='para-theme col-6'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief, Lorem Ipsum is not simply
                </p>
                <div className="col-12 mt-4">
                    <div className='d-flex justify-content-between align-items-center  position-relative'>
                        <img src="/media.png" alt="" className='img-fluid  ' />
                        <div className='position-absolute start-50 top-50 '>
                            <img src="/play.png" alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default media
