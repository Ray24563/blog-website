// These components are tools that enable routing in a React project.
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavigationBar from "./assets/components/Navbar"
import Home from "./assets/pages/Home"
import About from "./assets/pages/About"
import Posts from './assets/pages/Posts';
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/posts' element={<Posts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
