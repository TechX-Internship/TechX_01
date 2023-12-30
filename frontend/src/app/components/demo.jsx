import React from 'react'
import Image from 'next/image'
import logo from './header/next.svg'
import Button from './button'



const demo = () => {
    return (
        <div className=' container '>
            <div>
                <Image src={logo} />
            </div>
            <div className='mt-3'>
                <Button title='Read more' />
            </div>
            <div className='mt-3'>
                <Button title='Book Appointment' />
            </div>
        </div>
    )
}

export default demo
