import React, {useEffect, useState} from 'react'

function Posts(){

  const [display, setDisplay] = useState([])
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
   const [editCurrentDate, setEditCurrentDate] = useState(
        new Date(). toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
          })
        );

  useEffect(() => {
    document.title = "Posts";
    const loadPosts = JSON.parse(localStorage.getItem('myPosts')) || [];
    setDisplay(loadPosts)
  }, []);

  function removePost(index){
    const removePost = display.filter((_, i) => i !== index)
    localStorage.setItem('myPosts', JSON.stringify(removePost));
    setDisplay(removePost)
  }

  function handleSave(index) {
    const updated = [...display];
    updated[index] = {
      title: editTitle,
      description: editDesc,
      date: editCurrentDate
    };
    localStorage.setItem("myPosts", JSON.stringify(updated));
    setDisplay(updated);
    setEditIndex(null);
  }

  return(

    // For this part, this is where the rendering of Post and Edit interface.
    // The logic behind this code, at first, I set 'editIndex' state that has a Null Value.
    // Below, there is a condition "editIndex === index" which indicates that if the editIndex,
    // and index is equal to each other, the edit interface will be displayed.

    // So, what is the indicator? How can be the editIndex is equal to index?
    // The answer is, when the user click on the Edit button, the editIndex will have a value,
    // that is the index of the post that the user want to edit. So if the user clicks the second,
    // post, the editIndex value is 1 and index is 1. So they are equal, therefore,
    // the condition is TRUE and the edit interface will display.
    // If it is false, the normal post interface will display.
    <>
      <div className='flex flex-wrap p-10 gap-8 justify-center'>

        {display.map((displayPost, index) => 
          <div key={index} className='bg-white w-full 2xl:w-170 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-7 rounded-sm h-70 overflow-y-auto'>

         {editIndex === index ? (
          <>
            <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} className="w-full border p-2 mb-2 font-[sans-serif]"/>

            <textarea value={editDesc} onChange={(e) => setEditDesc(e.target.value)} className="w-full h-30 border p-2 mb-2 font-[sans-serif]"/>

            <button onClick={() => handleSave(index)} className="text-xs hover:opacity-85 bg-[#5E503F] cursor-pointer text-white font-[sans-serif] rounded-sm ps-5 pe-6 pt-2 pb-2 transition-opacity duration-300 me-5">Save</button>

            <button onClick={() => setEditIndex(null)} className="text-xs hover:opacity-85 bg-[#5E503F] cursor-pointer text-white font-[sans-serif] rounded-sm ps-5 pe-6 pt-2 pb-2 transition-opacity duration-300">Cancel</button>
          </>
        ) : (
          <>
            <h1 className='custom-font text-4xl mb-2'>{displayPost.title}</h1>
            <p className='font-[sans-serif] text-[#A9927D] mb-3 text-xs'>{displayPost.date}</p>
            <hr className='mb-5 text-[#A9927D]'/>
            <p className='font-[sans-serif] mb-13'>{displayPost.description}</p>

            <div>
              <button onClick={() => { setEditIndex(index); setEditTitle(displayPost.title); setEditDesc(displayPost.description); setEditCurrentDate(displayPost.date)}} className="text-xs hover:opacity-85 bg-[#5E503F] cursor-pointer text-white font-[sans-serif] rounded-sm ps-6 pe-6 pt-2 pb-2 transition-opacity duration-300 me-3">Edit</button>
              <button key={index} className="text-xs hover:opacity-85 bg-[#5E503F] cursor-pointer text-white font-[sans-serif] rounded-sm ps-5 pe-6 pt-2 pb-2 transition-opacity duration-300" onClick={() => removePost(index)}>Delete</button>
            </div>
          </>
        )}
        </div>
        )}

      </div>

    </>
    
  )
}

export default Posts