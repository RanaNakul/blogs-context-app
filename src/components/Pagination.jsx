import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

    const {totalpages,page,handlerPageChange} = useContext(AppContext);

    if(!totalpages) return null;

  return (
    <div className='fixed bottom-0 w-full bg-white dark:bg-[#202124] py-2 border-t-2 border-t-gray-300'>
        <div className='flex justify-between items-center max-w-2xl mx-auto'>
            <div className=' space-x-3'>
            {
                page > 1 && 
                (<button onClick={() => handlerPageChange(page-1)}
                  className=' rounded-md border-2 px-4 py-1 border-gray-300'>Previous</button>)
            }

            {
                page < totalpages && 
                (<button onClick={() => handlerPageChange(page+1)}
                  className=' rounded-md border-2 px-4 py-1 border-gray-300'>Next</button>)
            }

            </div>
            <p className='text-sm font-semibold'>Page {page} of {totalpages}</p>
        </div>
        
    </div>
  )
}

export default Pagination