import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({post}) => {
  return (
    <div className='w-11/12 max-w-2xl'>
        <NavLink to={`/blog/${post.id}`}><span className='font-bold text-lg hover:underline '>{post.title}</span></NavLink>
        <p className='text-sm pt-1'>
            By <span className='italic '>{post.author}</span> on <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}><span className='font-semibold underline'>{post.category}</span></NavLink> 
        </p>
        <p className='text-sm pt-1'>
            Posted On {post.date}
        </p>
        <p className='pt-4 pb-2'>{post.content}</p>
            <div className='flex gap-2'>
                {post.tags.map((tag , index) =>(
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                        <span  className='text-xs underline text-[#1d4ed8] font-semibold'>#{tag}</span>
                    </NavLink>
                ))}
            </div>
       
       
    </div>
  )
}

export default Card