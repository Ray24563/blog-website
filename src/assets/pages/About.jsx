import React, {useEffect} from 'react'
import Icon from '../images/icon.png'
import Blog from '../images/blog.png'
import RLogo from '../images/react.png'
import TargetUsers from '../images/target.png'


function About(){

  useEffect(() => {
    document.title = "About";
  }, []);

  return(
    <>

      <section>
        <div className='h-[90vh] bg-white flex flex-col md:flex-row justify-center items-center gap-15 xl:gap-30'>

          <div className='w-auto xl:w-3xl text-center md:text-left md:w-md'>
            <h1 className='font-[sans-serif] text-3xl xl:text-5xl mb-5'>Thoughts to write, day or night — <br/>this space is <span className='custom-font'>Just My Type.</span></h1>

            <p className='font-[sans-serif] leading-relaxed pe-5 ps-5 md:pe-0 md:ps-0'>A personal blog space where your thoughts find a home — simple, private, and always ready when inspiration strikes.</p>
          </div>

          <div>
            <img className='w-60 xl:w-90' src={Icon}/>
          </div>

        </div>
      </section>

      <section className='mt-30'>
        <h1 className='text-center text-4xl font-[sans-serif] mt-15 mb-10'>What is <span className='custom-font'>Just my Type?</span></h1>

        <div className='flex flex-col justify-center xl:flex-row p-5 gap-15'>

          <div className='w-auto xl:w-100 text-center bg-[#A9927D] p-10 rounded-sm h-120 xl:h-140 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <img src={Blog} className='w-50 mx-auto'/>
            <h1 className='custom-font-2 text-2xl mt-5 mb-3'>Personal Blog</h1>
            <hr className='text-[#22333B] w-35 mx-auto mb-6'/>
            <p className='leading-relaxed font-[sans-serif]'> It is a personal blog-style diary app where you can write and save your thoughts, reflections, or daily experiences. It’s your private digital space—simple, personal, and stored locally on your device.</p>
          </div>

          <div className='w-auto xl:w-100 text-center bg-[#A9927D] p-10 rounded-sm h-140 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <img src={RLogo} className='w-50 mx-auto'/>
            <h1 className='custom-font-2 text-2xl mt-5 mb-3'>Understanding React</h1>
            <hr className='text-[#22333B] w-35 mx-auto mb-6'/>
            <p className='leading-relaxed font-[sans-serif]'> It is a learning initiative focused on grasping how React works under the hood. It serves as a foundational reference for future development tasks and is essential preparation for the developer's upcoming capstone project.</p>
          </div>

           <div className='w-auto xl:w-100 text-center bg-[#A9927D] p-10 rounded-sm h-140 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <img src={TargetUsers} className='w-50 mx-auto'/>
            <h1 className='custom-font-2 text-2xl mt-5 mb-3'>Target Users</h1>
            <hr className='text-[#22333B] w-35 mx-auto mb-6'/>
            <p className='leading-relaxed font-[sans-serif]'> This platform is designed for a broad audience, with a special focus on developers and tech enthusiasts. Their insights and expertise are invaluable in refining the user experience and elevating the overall quality of this React-based web application.</p>
          </div>

        </div>
      </section>

      <section className='mt-15'>

        <div className='flex justify-center flex-col xl:flex-row gap-10 xl:gap-50 items-center xl:items-baseline'>

          <div>
            <h1 className='custom-font text-7xl mb-3 text-center xl:text-left'>FAQ</h1>
            <p className='font-[sans-serif] text-xl'>Answers to some questions you might have.</p>
          </div>

          <div>

            <div className='bg-white rounded-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 w-auto md:w-175'>
              <h1 className='custom-font text-2xl mb-3'>1. What database is used in this website?</h1>
              <h1 className='font-[sans-serif] w-auto md:w-140'>- This website uses LocalStorage, a browser-based storage solution. It allows user data such as blog posts to be saved directly on the user's device without needing a server or external database.</h1>
            </div>
            <br/>

            <div className='bg-white rounded-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 w-auto md:w-175'>
              <h1 className='custom-font text-2xl mb-3'>2. What is the main purpose of this website?</h1>
              <h1 className='font-[sans-serif] w-auto md:w-140'>- The goal of this website is to enhance developer skills, particularly in using React.js. It serves as a personal playground for building and understanding component-based architecture, state management, and client-side data handling.</h1>
            </div>
            <br/>

            <div className='bg-white rounded-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 w-auto md:w-175'>
              <h1 className='custom-font text-2xl mb-3'>3. What kind of website is this?</h1>
              <h1 className='font-[sans-serif] w-auto md:w-140'>- This is a personal blog diary-style application. Users can write, edit, and delete their thoughts, much like journaling. Think of it as a minimalist digital notebook built with React.</h1>
            </div>
            <br/>

            <div className='bg-white rounded-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 w-auto md:w-175'>
              <h1 className='custom-font text-2xl mb-3'>4. Why use LocalStorage instead of a traditional database?</h1>
              <h1 className='font-[sans-serif] w-auto md:w-140'>- LocalStorage offers a quick and simple way to persist data without server-side setup. It's ideal for small projects, prototypes, or learning tools that don't require real-time collaboration or cloud storage.</h1>
            </div>
            <br/>
          </div>

        </div>

      </section>

    </>
  )
}

export default About