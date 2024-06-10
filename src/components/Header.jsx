import React, { useEffect, useState } from 'react'

const Header = () => {

  const [dark , setDark] = useState(false);
  const [theme , setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme('dark');
        setDark(false);
    }
    else{
        setTheme('light');
        setDark(true);
    }
  },[]);

  useEffect ( () => {
      if(theme === "dark"){
          document.documentElement.classList.add("dark");
      }
      else(
          document.documentElement.classList.remove("dark")
      )
  },[theme])

  function darkHandler(){
    setDark(!dark);
    setTheme(theme === "dark"? "light": "dark");
  }

  
  return (
    <div className=' fixed top-0 bg-white dark:bg-[#202124] py-4 border-b-2 border-b-gray-300 shadow-md w-full'>
      <div className='flex justify-between max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold uppercase'>Codehelp Blogs</h1>

        <div>
          {
            dark ? (
                <button onClick={darkHandler} className='rounded-md border-2 px-4 py-1 border-gray-300 font-bold '>Dark </button>
              ) : 
              (
                <button onClick={darkHandler} className='rounded-md border-2 px-4 py-1 border-gray-300 font-bold '>Light </button>
              )
            }
          </div>
        </div>
        
    </div>
  )
}

export default Header