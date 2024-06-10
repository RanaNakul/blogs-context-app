import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Card from '../components/Card';
import Spinner from '../components/Spinner';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedBlogs , setRelatedBlogs] = useState([]);
    const location = useLocation();
    const Navigate = useNavigate();
    const {setLoading , loading} = useContext(AppContext);

    const blogId = location.pathname.split('/').at(-1);

    async function fetchRelatedPosts(){
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        // console.log(url);
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data)
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch (error) {
            console.log("Error while fetching data")
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        if(blogId){
            fetchRelatedPosts();
        }
    },[ location.pathname ]);

   return (
    <div className='dark:text-[#bdc1c6] '>
        <Header/>
        <div className='dark:bg-[#202124] pt-[70px]'>
            <div className=' flex items-center justify-start pt-6 gap-4 mx-auto max-w-2xl'>
                <button onClick={() => Navigate(-1)} 
                className='rounded-md border-2 px-4 py-1 border-gray-300 font-bold '>
                    Back
                </button>
            </div>
        </div>
        {
            <div className='dark:bg-[#202124] flex flex-col justify-center items-center gap-y-10 pt-5 pb-10 min-h-screen'>
                {
                    loading ? (<Spinner/>) : 
                    blog ? (
                        <div className='flex flex-col justify-center gap-y-10 '>

                            <Card post={blog}/>
                            <h2 className='text-3xl font-bold'>Related Blogs</h2>
                            {
                                relatedBlogs.map( (post) => (
                                    <div key={post.id}>
                                        <Card post={post}/>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (<p className='font-bold text-3xl'>No Blog Found</p>)
                }
            </div>
        }
    </div>
  )
}

export default BlogPage