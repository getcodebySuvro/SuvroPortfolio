import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import dp from './assets/dp.jpg'
import {AiFillMail, AiOutlineClose,AiOutlineMenu} from "react-icons/ai"
import {FaGithub, FaLinkedin,} from "react-icons/fa"
import {BsMoonStarsFill,BsFillSunFill} from "react-icons/bs"
import {HiDocumentText} from "react-icons/hi"


function Navbar() {

const [nav,setNav] = useState(false);
const [theme,setTheme] = useState("light");


const handleNav = ()=>{
  setNav(true);
  }
 const closeNav = ()=>{
    setNav(false);
  } 


useEffect(()=>{
  const usertheme = localStorage.getItem("theme");
  if(usertheme === "dark")
{
  document.body.classList.add("dark");
document.body.classList.add("darkbg");
localStorage.setItem("theme","dark");

setTheme("dark");
}
if(usertheme === "light")
{
  document.body.classList.remove("dark");
  document.body.classList.remove("darkbg");
document.body.classList.add("lightkbg");
localStorage.setItem("theme","light");
setTheme("light");
}

},[])

const darkthemeChanger = (e)=>{

document.body.classList.add("dark");
document.body.classList.add("darkbg");
localStorage.setItem("theme","dark");

setTheme("dark");
     
}

const lightthemeChanger = (e)=>{
  document.body.classList.remove("dark");
  document.body.classList.remove("darkbg");
document.body.classList.add("lightkbg");
localStorage.setItem("theme","light");
setTheme("light");
}





  return (
    <div className='fixed w-full h-20 shadow-xl z-[1000]  top-0 dark:bg-white/5 backdrop-blur-lg pl-3 pr-3 bg-white/30'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 rounded-full '>
        <div className=' flex justify-center items-center'>
        <Image src={dp} alt="Suvro" width={40} height={40} className='rounded-full hover:animate-spin shadow-lg ' objectFit='cover' placeholder='blur'/>
        {
          theme === "light"
          ?
          <span className='bg-[#7b28ff] ml-7 text-[#fcfcfc] rounded-full p-3 ease-in duration-200' onClick={darkthemeChanger}><BsMoonStarsFill/></span>
          :
          <span className='text-[#7b28ff]  ml-7 bg-[#fcfcfc] rounded-full p-3 ease-in duration-200' onClick={lightthemeChanger}><BsFillSunFill/></span>
        }
        
        
        </div>
        

        <div>
        <ul className='hidden lg:flex ease-in duration-800'>
          <Link href="#home ">
            <li className='ml-10 p-2 text-sm uppercase border-b-2 border-transparent hover:text-[#7b28ff]   hover:border-[#7b28ff] dark:hover:border-[#7b28ff] font-bold dark:text-slate-200 dark:hover:text-white'>Home</li>
          </Link>
          <Link href="#about">
            <li className='ml-10 p-2 text-sm uppercase border-[#fcfcfc] hover:border-[#7b28ff] hover:text-[#7b28ff]  hover:border-b-2  font-bold dark:text-slate-300 dark:hover:text-white'>About</li>
          </Link>
          <Link href="#qualification">
            <li className='ml-10 p-2 text-sm uppercase border-[#fcfcfc] hover:border-[#7b28ff] hover:text-[#7b28ff] hover:border-b-2  font-bold dark:text-slate-300 dark:hover:text-white'>Qualification</li>
          </Link>
          <Link href="#skills">
            <li className='ml-10 p-2 text-sm uppercase border-[#fcfcfc] hover:border-[#7b28ff] hover:text-[#7b28ff]  hover:border-b-2  font-bold dark:text-slate-300 dark:hover:text-white'>Skills</li>
          </Link>
          <Link href="#project">
            <li className='ml-10 p-2 text-sm uppercase border-[#fcfcfc] hover:border-[#7b28ff] hover:text-[#7b28ff]  hover:border-b-2  font-bold dark:text-slate-300 dark:hover:text-white'>Project</li>
          </Link>
          <Link href="#contact">
            <li className='ml-10 p-2 text-sm uppercase border-[#fcfcfc] hover:border-[#7b28ff] hover:text-[#7b28ff]  hover:border-b-2 font-bold dark:text-slate-300 dark:hover:text-white'>Contact</li>
          </Link>
        </ul>
        <div className='lg:hidden mr-2 text-2xl dark:text-slate-200' onClick={handleNav}>
           <AiOutlineMenu/>
        </div>
       </div>

       </div>
      
       <div>
       <div className= {nav? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/80  ":""  }  >
        <div className =  { nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  bg-white  p-7 shadow-2xl ease-out duration-500 dark:bg-[#1b0146]' : 'fixed left-[-100%] top-0 p-10 ease-out duration-500'} >
          <div className='flex w-full items-center justify-between'>
            <div >
              <Image src={dp} alt="fav" width="50" height="50" className="rounded shadow-slate-400" objectFit='cover' placeholder='blur'/>
            </div>
            <div className='rounded-full shadow-sm shadow-gray-400 p-3 cursor-pointer dark:shadow-none dark:text-white dark:bg-[#7b28ff]' onClick={closeNav}><AiOutlineClose/></div>
          </div>
          <div className='border-b border-gray-300 p-7 font-bold uppercase text-[#7b28ff]'>
            <p>Welcome to my portfolio</p>
          </div>

          <div className='my-8 flex flex-col'>
            <ul className='uppercase'>
              <Link href="#home"><li className='py-4 text-sm hover:text-[#7b28ff] dark:text-white dark:hover:text-white'>Home</li></Link>
              <Link href="#about"><li className='py-4 text-sm hover:text-[#7b28ff] dark:text-white'>About</li></Link>
              <Link href="#qualification"><li className='py-4 text-sm hover:text-[#7b28ff] dark:text-white'>Qualification</li></Link>
              <Link href="#skills"><li className='py-4 text-sm hover:text-[#7b28ff] dark:text-white'>Skills</li></Link>
              <Link href="#project"><li className='py-4 text-sm hover:text-[#7b28ff] dark:text-white'>Project</li></Link>
              <Link href="#contact"><li className='py-4 text-sm hover:text-[#7b28ff] dark:text-white'>Contact</li></Link>
            </ul>

            <div className='mt-10'>
              <p className='pb-3 text-[#7b28ff] font-bold '>Contact Me</p>
              <div className='flex flex-row mt-3'>
              <a href="https://www.linkedin.com/in/suvrojyoti-bhuniya-a497881b1" target='_blank' rel="noreferrer">
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  mx-2 md:mx-3  hover:text-[#7b28ff] hover:shadow-[#7b28ff] justify-center active:scale-[0.9]   dark:shadow-none dark:bg-[#7b28ff]/50 dark:hover:bg-[#7b28ff] dark:hover:text-white dark:text-white'>
                 <FaLinkedin/>
                 </div>
                </a>
              
              
                <a href="https://github.com/getcodebySuvro" target='_blank' rel="noreferrer" >
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer mx-2 md:mx-3   hover:text-[#7b28ff] hover:shadow-[#7b28ff] active:scale-[0.9]   dark:shadow-none dark:bg-[#7b28ff]/50 dark:hover:bg-[#7b28ff] dark:hover:text-white dark:text-white'>
                  <FaGithub/>
                  </div>
                  </a>
              
              
                <a href="mailto:suvrojyotibhuniya@gmail.com" target='_blank' rel="noreferrer">
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer mx-2 md:mx-3  hover:text-[#7b28ff] hover:shadow-[#7b28ff] active:scale-[0.9]   dark:shadow-none dark:bg-[#7b28ff]/50 dark:hover:bg-[#7b28ff] dark:hover:text-white dark:text-white'>
                  <AiFillMail/>
                  </div>
                  </a>
              
              
                <a href="https://drive.google.com/file/d/1EqfYcv7kFgaC-Q0RbeBX8KhqoDF2QfMB/view?usp=sharing" target='_blank' rel="noreferrer">
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer mx-2 md:mx-3  hover:text-[#7b28ff] hover:shadow-[#7b28ff] active:scale-[0.9]   dark:shadow-none dark:bg-[#7b28ff]/50 dark:hover:bg-[#7b28ff] dark:hover:text-white dark:text-white'>
                  <HiDocumentText/></div>
                </a>
              </div>
              
            </div>
            
          </div>

        </div>

       </div>
       </div>
       
      
    </div>
  )
}

export default Navbar
