import React from 'react'
import {BiBookReader} from 'react-icons/bi'

export default function Header() {
  return (
    <div className='bg-[#594ae1] w-full p-2'>
        <div className='text-white flex items-center text-xl'>
            <BiBookReader size={40}/>
            <h1 className='ml-2'>CENED Qualificando</h1>
        </div>
    </div>
  )
}
