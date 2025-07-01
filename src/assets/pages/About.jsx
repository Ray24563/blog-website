import React, {useEffect} from 'react'
import Icon from '../images/icon.png'

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

    </>
  )
}

export default About