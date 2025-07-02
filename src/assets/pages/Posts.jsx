import React, {useEffect, useState} from 'react'

function Posts(){

  const [display, setDisplay] = useState([])

  useEffect(() => {
      document.title = "Posts";
      const loadPosts = JSON.parse(localStorage.getItem('myPosts')) || [];
      setDisplay(loadPosts)
    }, []);

  return(
    <div>
      <ul>
        {display.map((displayPost, index) => (
        <li key={index}>{displayPost.title} - {displayPost.date} - {displayPost.description}</li>))}
      </ul>
    </div>
  )
}

export default Posts