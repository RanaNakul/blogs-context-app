import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const Navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split('/').at(-1);
  return (
    <div className='dark:text-[#bdc1c6] '>

        <Header/>
        <div className='dark:bg-[#202124] pt-[70px] '>
            <div className=' flex items-center justify-start pt-6 gap-4 mx-auto max-w-2xl'>
                <button onClick={() => Navigate(-1)} 
                className='rounded-md border-2 px-4 py-1 border-gray-300 font-bold '>
                    Back
                </button>

                <h2 className='font-bold text-xl'>
                    Blogs on <span>{category}</span>  
                </h2>
            </div>
        </div>
        
        <Blogs topPadding = {"20px"}/>
        <Pagination/>
    </div>
  )
}

export default CategoryPage