import React from 'react'

const facility = () => {
    return (
        <section className='py-5 facility'  >
            <div className="container">
                <div className='d-flex justify-content-between align-items-center '>
                    <div className="col-3 text-center f-before position-relative ">
                        <img src="/f1.png" alt="" />
                    </div>
                    <div className="col-3 text-center f-before position-relative ">
                        <img src="/f2.png" alt="" />
                    </div>
                    <div className="col-3 text-center f-before position-relative ">
                        <img src="/f3.png" alt="" width={300}/>
                    </div>
                    <div className="col-3 text-center ">
                        <img src="/f4.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default facility
