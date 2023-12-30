import React from 'react'
import Button from '../components/button'

const team = () => {
    return (
        <section className='py-5 team'>
            <div className="container">
                <div className='d-flex justify-content-between align-items-center '>
                    <h1 style={{ fontSize: "40px" }} className='mb-3 heading-pink heading-border position-relative lh-base '>Our Team </h1>
                    <Button title='View All' />
                </div>
                <p className='para-theme col-6'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief, Lorem Ipsum is not simply
                </p>
                <div className="col-12">
                    <div className='d-flex justify-content-between align-items-center '>
                        <div className="col-3">
                            <div className="team-img">
                                <img src="/t1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="team-img">
                                <img src="/t2.png" alt="" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="team-img">
                                <img src="/t3.png" alt="" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="team-img">
                                <img src="/t4.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default team
