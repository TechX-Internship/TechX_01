import React from 'react'
import Button from '../components/button'

const blog = () => {

    const blogCard = [
        {
            heading: "NIDHI HOSPITAL VERY KEEN ON STAFF TRAINING",
            img: '/blog1.jpg'
        },
        {
            heading: "OUR PATIENT’S TRUE STORY INCIDENT",
            img: '/blog2.jpg'
        },
        {
            heading: "WHY NIDHI HOSPITAL FOR TREATMENT",
            img: '/blog3.jpg'
        },
    ]

    return (
        <section className='blog py-5'>
            <div className="container">
                <div className='d-flex justify-content-center'>
                    <div className="heading text-center col-6">
                        <h1 style={{ fontSize: "40px" }} className='mb-3 heading-pink heading-border position-relative lh-base '>Our Blogs</h1>
                        <p className='para-theme '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief, Lorem Ipsum is not simply</p>
                    </div>
                </div>

                <div className="row  col-12 ">
                    {
                        blogCard && blogCard.map((item, index) => {
                            return (
                                <div class="col-4 " style={{ boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.06)" }} >
                                    <div className="card rounded-0 border-0  ">
                                        <img src={item.img} alt="..." className='p-3' />
                                        <div class="card-body">
                                            <h5 class="card-title text-primary" style={{ fontSize: "24px" }}>{item.heading}</h5>
                                            <p class="card-text para-theme">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                            <div className='d-flex justify-content-between  '>
                                                <div className='d-flex align-items-center '>
                                                    <img src="/Calendar.png" alt="" />
                                                    <p className='para-theme mb-0 ms-1'>April 15, 2023</p>
                                                </div>
                                                <div className='d-flex align-items-center '>
                                                    <p className='text-primary mb-0 mx-2'>Read More</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="16" viewBox="0 0 23 16" fill="none">
                                                        <path d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.2929L16.3431 0.928934C15.9526 0.538409 15.3195 0.538409 14.9289 0.928933C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM-8.74228e-08 9L22 9L22 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#0072BC" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="text-center mt-4">
                <Button title='View All' />
            </div>
        </section>
    )
}

export default blog
