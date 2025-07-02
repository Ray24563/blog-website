import React, {useEffect, useState} from 'react'

function Home(){

  // Day Greetings Logic
  const today = new Date();
  const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });

  const greetingsByDay = {
    Sunday: "Take time to rest and recharge — it's",
    Monday: "A fresh start for new goals — it's",
    Tuesday: "Keep the momentum going — it's",
    Wednesday: "You're halfway through the week — it's",
    Thursday: "The weekend is almost here — it's",
    Friday: "Wrap up strong and smile — it's",
    Saturday: "Relax and enjoy yourself — it's",
  };

  const dayGreetings = greetingsByDay[dayName] || "Thank you for using Just my Type!";

  // Adding Post Logic
  const [posts, setPost] = useState(() => {
    const savedPosts = localStorage.getItem('myPosts');
    return savedPosts ? JSON.parse(savedPosts) : []
  });
  
  const [createTitle, setTitle] = useState("")
  const [currentDate, setCurrentDate] = useState(
      new Date(). toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
        })
      );
  const [createDesc, setCreateDesc] = useState("");
  
  function newTitle(event){
    setTitle(event.target.value)
  }

  function newDesc(event){
    setCreateDesc(event.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();

    const newPost = {
      title: createTitle,
      date: currentDate,
      description: createDesc
    }

    setPost(p => [...p, newPost])
    setTitle("")
    setCreateDesc("")

  }

  useEffect(() => {
    document.title = "Just my Type";
    localStorage.setItem("myPosts", JSON.stringify(posts));
  }, [posts]);

  return (
    <>
    <div className="flex items-center justify-center h-[93vh] md:h-[85vh] ">
       <div className="bg-white p-20 text-center max-w-4xl mx-auto rounded-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)]">

        <div>
          <h1 className="text-3xl mb-5 font-[sans-serif]">{dayGreetings} <span className="custom-font">{dayName}</span></h1>
          <p className="mb-10 font-[sans-serif]">Hey there! Hope your day’s been kind to you. Welcome to <span className="custom-font">Just My Type</span> — your own little corner to jot down thoughts, memories, or whatever’s on your mind. Think of it like a digital diary that’s all yours, saved right here on your device. <span className="custom-font">Take a breath, take your time,</span> and <span className="custom-font">start writing</span>.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <input value={createTitle} onChange={newTitle} className="bg-[#F2F4F3] mb-5 rounded-sm border border-black border-solid ps-3 pt-2 pb-2 font-[sans-serif]" placeholder="Enter Title" type="text"/>
          </div>

          <div>
            <textarea value={createDesc} onChange={newDesc} className="resize-none mb-5 bg-[#F2F4F3] w-70 rounded-sm border border-black border-solid ps-3 pt-2 pb-2 font-[sans-serif]" placeholder="How are you feeling today?" type="text"/>
          </div>

          <button className="hover:opacity-85 bg-[#5E503F] cursor-pointer text-white font-[sans-serif] rounded-sm ps-8 pe-8 pt-2 pb-2 transition-opacity duration-300">Post</button>
        </form>

      </div>
    </div>
    </>
  )
}

export default Home