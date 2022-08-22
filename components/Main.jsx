import React from 'react'
import {AiFillMail} from "react-icons/ai"
import {FaGithub, FaLinkedin,} from "react-icons/fa"
import {HiDocumentText} from "react-icons/hi"

const Main = () => {




  return (
    <div className='w-full h-[100vh] text-center pt-10 m-auto snap-y  ' id='home'>
      
        <div className='max-w-[1280px] w-full h-full  p-2 flex justify-center items-center relative '  data-aos="fade-up">
          <div className='dark:hidden absolute rounded-full top-[20vh] left-[13vw] w-52 h-52 sm:w-72 sm:h-72 sm:top-[30vh] sm:left-[20vh] md:left-[40%] bg-[#cd28ff] opacity-50 filter blur-xl animate-blob animation-delay-2000 blend-multiply
           '></div>
          <div className='dark:hidden absolute rounded-full top-[20vh] left-[30vw] w-52 h-52  sm:w-72 sm:h-72 sm:top-[32vh] sm:left-[30vh] md:left-[30%] bg-yellow-300 opacity-70 filter blur-xl animate-blob animation-delay-4000 blend-multiply
          '></div>
          
        
            <div className='z-[700] absolute mt-20'>
                <h1 className='font-sans uppercase '><span className='text-[#33195d] animate-slideright dark:text-white'>Hello,I&apos;m</span> <span className='text-[#7b28ff] dark:text-[#28dfff] font-comfort '>Suvro</span> </h1>
                <h2 className='font-sans mt-2 uppercase text-slate-600 dark:text-slate-300'>A full stack Web Developer</h2>
                <p className='py-4 text-slate-700 max-w-[70%] m-auto font-sans tracking-tight dark:text-slate-400'>I&apos;m a self-taught developer from India. I love building cool stuff for web using Reactjs , Nextjs , Nodejs , Expressjs and MongoDB</p>
                
             <div className='flex  justify-center items-center m-auto max-w-[80%] p-3 '>
             
                <a href="https://www.linkedin.com/in/suvrojyoti-bhuniya-a497881b1" data-aos="fade-right" data-aos-delay="1000" target='_blank' rel="noreferrer">
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer bg-[#fdfbfb] mx-5 hover:text-[#7b28ff] hover:shadow-[#7b28ff] justify-center active:scale-[0.9] dark:shadow-none dark:bg-[#7b28ff]/50 dark:hover:bg-[#7b28ff] dark:hover:text-white dark:text-white'>
                 <FaLinkedin/>
                 </div>
                </a>
              
              
                <a href="https://github.com/getcodebySuvro" data-aos="fade-right" data-aos-delay="800" target='_blank' rel="noreferrer" >
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer mx-5 bg-[#fdfbfb]  hover:text-[#7b28ff] hover:shadow-[#7b28ff] active:scale-[0.9]  dark:shadow-none dark:bg-[#7b28ff]/50 dark:hover:bg-[#7b28ff] dark:hover:text-white dark:text-white'>
                  <FaGithub/>
                  </div>
                  </a>
              
              
                <a href="mailto:suvrojyotibhuniya@gmail.com" data-aos="fade-right" data-aos-delay="600" target='_blank' rel="noreferrer">
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer mx-5 bg-[#fdfbfb] hover:text-[#7b28ff] hover:shadow-[#7b28ff] active:scale-[0.9]  dark:shadow-none dark:bg-[#7b28ff]/50 dark:hover:bg-[#7b28ff] dark:hover:text-white dark:text-white'>
                  <AiFillMail/>
                  </div>
                  </a>
              
              
                <a href="https://drive.google.com/file/d/14BsnFkpauWy33YF6-PIgdML271IhCK9Q/view?usp=drivesdk" target='_blank' rel="noreferrer" data-aos="fade-right" data-aos-delay="400" >
                <div className='rounded-full shadow-lg  shadow-gray-400 p-3 cursor-pointer mx-5 bg-[#fdfbfb] hover:text-[#7b28ff] hover:shadow-[#7b28ff] active:scale-[0.9]  dark:shadow-none dark:bg-[#7b28ff]/50 dark:hover:bg-[#7b28ff] dark:hover:text-white dark:text-white'>
                  <HiDocumentText/></div>
                </a>
              

             </div>
              
              
              
            </div>
        </div>

        

      
    </div>
  )
}

export default Main
