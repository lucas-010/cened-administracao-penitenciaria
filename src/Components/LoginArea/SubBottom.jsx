import React from 'react'
import congress from '../../Images/congress.jpg'
import dfFlag from '../../Images/dfFlag.png'

export default function SubBottom() {
  return (
    <div className='w-full h-2/3' style={{background: `url(${congress})`,backgroundSize: '100% 100%', backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
        <div className='flex items-end lg:items-start p-4 flex-col'>
            <img className='w-28' src={dfFlag} alt="" />
            <p className='text-white ml-1 text-xl'>Brasília - DF</p>
        </div>
    </div>
  )
}
