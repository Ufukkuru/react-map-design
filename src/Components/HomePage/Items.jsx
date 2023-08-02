import React, { useEffect } from 'react'
import StarSvg from '../../assets/star.svg'
import { Link } from 'react-router-dom'
import useDataStore from '../../assets/store/data.store'
import useBasketStore from '../../assets/store/basket.store'

function Items({filters}) {
  const {data , fetchData} = useDataStore()
  const {addToBasket} = useBasketStore();

  useEffect(() => {
      fetchData()
  }, [])

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(filters.toLowerCase()) ||
      item.explanation.toLowerCase().includes(filters.toLowerCase()) 
  );
  
return (
  <>
  <div className='w-full mt-10'>
            <div className='w-full container'>
              <div className=' w-full grid grid-cols-3 '>
                {filteredData.map((item,i)=><div key={i} className='w-60 h-80 mb-5 bg-white justify-between mx-auto rounded-lg relative'>
                        <div className=''><img className='h-48 w-56 mx-auto p-2' src={item.image} alt="" /></div>
                        <div className='flex text-xl font-semibold justify-between'><h2 className='ml-2'>{item.title}</h2><h2 className='mr-2'>${item.price}</h2></div>
                        <div className='mt-1'><small className=' ml-2 mr-2 text-base'>{item.explanation}</small></div>
                        <div className='absolute right-2 bottom-9'><h3 className='text-sm flex'>{[...Array(Math.round(item.raiting)).keys()].map((i)=>(<img className='w-3' key={i} src={StarSvg} alt="" />))}{item.raiting}</h3></div>
                        <Link to='/basket' onClick={()=>addToBasket(item)} className='bg-teal-950 rounded-bl-lg text-center hover:bg-teal-800 transation delay-150 ease-in-out text-white absolute p-1  bottom-0 left-0 w-1/2'>Buy Now</Link>
                        <button onClick={()=>addToBasket(item)} className='bg-teal-950 rounded-br-lg border-l-2 border-white hover:bg-teal-800 transation delay-150 ease-in-out text-white absolute p-1  bottom-0 right-0 w-1/2'>Add Basket</button>
                  </div>)}
                </div>
            </div>
        </div>
    </>
  )
}

export default Items