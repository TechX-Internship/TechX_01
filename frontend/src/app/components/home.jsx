import React from 'react'
import Button from '../components/button'

const home = () => {
  return (
    <div className=' container mt-5'>
      <div className="main-banner d-flex align-items-center ">
        <div className="col-6">
          <h1 style={{fontSize:"50px"}} className='mb-3'>Best ICU @ Critical  Care Welcome to <span className='heading-pink'>Nidhi Hospital</span></h1>
          <p className='para-theme mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief, Lorem Ipsum is not simply random text1500s, when an unknown printer took.</p>
          <Button title='Book Appointment'/>
        </div>
        <div className="col-6">
          <img src="/main-banner.png" alt="" className='img-fluid' />
        </div>
      </div>
    </div>
  )
}

export default home
