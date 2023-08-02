import React from 'react'
import { Link } from 'react-router-dom'
import useBasketStore from '../assets/store/basket.store'

function Navbar() {
    const {basketData} = useBasketStore();
  return (
    <>
    <div className='w-full bg-teal-700 text-black p-2 items-center mx-auto '>
        <div className=' justify-between flex mx-auto ml-10 mr-10'>
            <Link to='/'><h1 className='text-2xl font-bold'>Home</h1></Link>
            <Link to='/basket'><i class="fa-solid fa-basket-shopping fa-xl mt-4">{basketData.map((i)=><small className='text-sm'>{i.quantity}</small>)}</i></Link>
        </div>
    </div>
    </>    
  )
}

export default Navbar