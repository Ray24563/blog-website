import React, {useEffect} from 'react'

function About(){

  useEffect(() => {
    document.title = "About";
  }, []);

  return(
    <h1>Hello World</h1>
  )
}

export default About