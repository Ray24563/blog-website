import React, {useEffect, useState} from 'react'

function Posts(){

  const [display, setDisplay] = useState([])

  useEffect(() => {
      document.title = "Posts";
      const loadPosts = JSON.parse(localStorage.getItem('myPosts')) || [];
      setDisplay(loadPosts)
    }, []);

  return(
    
    <>

      <div className='flex flex-wrap p-10 gap-8 justify-center'>

        {display.map((displayPost, index) => 
          <div className='bg-white w-full 2xl:w-170 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-7 rounded-sm h-70 overflow-y-auto'>
          <h1 key={index} className='custom-font text-4xl'>{displayPost.title}</h1>
          <p key={index} className='font-[sans-serif] text-[#A9927D] mb-3'>{displayPost.date}</p>
          <hr key={index} className='mb-5'/>
          <p key={index} className='font-[sans-serif]'>{displayPost.description}</p>
        </div>
        )}

      </div>

    </>
    
  )
}

export default Posts