import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'


const Home = () => {
  return (
    <div>
        <div className='dark:text-[#bdc1c6]'>
            <Header/>
            <Blogs topPadding = {"85px"}/>
            <Pagination/>
        </div>
    </div>
  )
}

export default Home