import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import Card from './Card';

const Blogs = ({topPadding}) => {

  const {posts,loading} = useContext(AppContext);

  return (
    <div className={`dark:bg-[#202124] flex flex-col justify-center items-center gap-y-10 pt-[${topPadding}] pb-20 min-h-screen`}>
        {
            loading ? (<Spinner/>) : 
                posts.length === 0 ? (
                    <div>
                        <p className='font-bold text-3xl'>No Post Found</p>
                    </div>
                ) : 
                (
                    posts.map ( (post) => (<Card post={post} key={post.id}/>))
                )
            
        }
    </div>
  )
}

export default Blogs