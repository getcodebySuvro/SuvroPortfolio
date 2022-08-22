import React from 'react'
import {AiFillMail} from "react-icons/ai"
import {FaGithub, FaLinkedin,} from "react-icons/fa"
import {HiDocumentText} from "react-icons/hi"

const Contact = () => {
  return (
    <div className='w-full  lg:h-full p-2 mt-20  md:mb-20 lg:mb-0 pt-20   ' id='contact' >
       <div className='grid grid-cols-1 gap-8  lg:mb-15 items-center mt-20 ' >
        <div className='max-w-[1240px] m-auto mx-5 md:mx-10 '>
            <div>
            <p className='text-xl tracking-widest uppercase text-slate-500 dark:text-slate-300'   data-aos="fade-right">
                Contact
            </p>
                <h2 className='uppercase dark:text-[#28dfff] text-[#7b28ff] ' data-aos="fade-right" data-aos-delay="700">Contact me anytime</h2>
                <p className='font-bold mb-2 text-slate-600  font-sans dark:text-slate-400 '  data-aos="fade-right" data-aos-delay="900">Get In Touch</p>
             </div> 

             <div className=' w-full flex flex-col pt-10 justify-center items-center  mb-12 '>
                <form action='https://getform.io/f/93c37a91-2767-419f-bee1-488c787724a5'method="POST" className='flex flex-col max-w-[600px] w-full  '>
                  <div  data-aos="zoom-in-up" data-aos-delay="1200"> <input type="text" placeholder='Name' name="name" autoComplete="off" className='w-full shadow-slate-400 shadow-md p-3 text-[#7b28ff] mb-3 outline-0 border-0 rounded-full focus:shadow-[#7b28ff] hover:scale-105 duration-300 dark:shadow-none dark:bg-[#7b28ff]/40 dark:text-white dark:focus:bg-[#7b28ff]' /></div>
                   
                   <div  data-aos="zoom-in-up" data-aos-delay="1400"><input type="email" placeholder='Email' name="email" className='w-full shadow-slate-400 shadow-md p-3 text-[#7b28ff] my-3 mb-3 outline-0 border-0 rounded-full focus:shadow-[#7b28ff] hover:scale-105 duration-300 dark:shadow-none dark:bg-[#7b28ff]/40 dark:text-white  dark:focus:bg-[#7b28ff]'/></div>
                    
                    <div data-aos="zoom-in-up" data-aos-delay="1600">
                    <textarea name="message" id="" cols="30" rows="10" placeholder='Type your message here' className='w-full shadow-slate-400 shadow-md p-3 pt-4 mb-5 text-[#7b28ff] my-3 outline-0 border-0 rounded-3xl focus:shadow-[#7b28ff] hover:scale-105 duration-300 dark:shadow-none dark:bg-[#7b28ff]/40 dark:text-white  dark:focus:bg-[#7b28ff]'  /> </div>
                    
                    <div data-aos="zoom-in-up" data-aos-delay="1800"><button type='submit' className='w-full py-3 px-3 mt-3 rounded-full font-bold uppercase shadow-slate-400 shadow-lg text-[#7b28ff] hover:bg-[#7b28ff] hover:text-white  duration-300 active:scale-105  dark:shadow-none dark:bg-[#7b28ff]/40 dark:text-white  dark:focus:bg-[#7b28ff]'  >
                        Submit
                    </button></div>
                    
                </form>

               
              <div className='flex flex-row mt-12 '>
                    <div data-aos="fade-right" data-aos-delay="1950">
                    <a href="https://www.linkedin.com/in/suvrojyoti-bhuniya-a497881b1" target='_blank' rel="noreferrer">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  mx-5 hover:text-[#7b28ff] hover:shadow-[#7b28ff] justify-center active:scale-[0.9] dark:shadow-none dark:bg-[#7b28ff]/50 dark:hover:bg-[#7b28ff] dark:hover:text-white dark:text-white' >
                        <FaLinkedin/>
                        </div>
                    </a>
                </div>
              
              
              <div data-aos="fade-right" data-aos-delay="1800">
              <a href="https://github.com/getcodebySuvro" target='_blank' rel="noreferrer" >
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer mx-5  hover:text-[#7b28ff] hover:shadow-[#7b28ff] active:scale-[0.9] dark:shadow-none dark:bg-[#7b28ff]/50 dark:hover:bg-[#7b28ff] dark:hover:text-white dark:text-white' >
                  <FaGithub/>
                  </div>
                  </a>

              </div>
                
              
              <div data-aos="fade-right" data-aos-delay="1700">
                <a href="mailto:suvrojyotibhuniya@gmail.com" target='_blank' rel="noreferrer">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer mx-5  hover:text-[#7b28ff] hover:shadow-[#7b28ff] active:scale-[0.9] dark:shadow-none dark:bg-[#7b28ff]/50 dark:hover:bg-[#7b28ff] dark:hover:text-white dark:text-white' >
                      <AiFillMail/>
                      </div>
                    </a>
              </div>
                
              
              <div data-aos="fade-right" data-aos-delay="1600">
                <a href="https://drive.google.com/file/d/14BsnFkpauWy33YF6-PIgdML271IhCK9Q/view?usp=drivesdk" target='_blank' rel="noreferrer">
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer mx-5  hover:text-[#7b28ff] hover:shadow-[#7b28ff] active:scale-[0.9] dark:shadow-none dark:bg-[#7b28ff]/50 dark:hover:bg-[#7b28ff] dark:hover:text-white dark:text-white' >
                    <HiDocumentText/>
                  </div>
                  </a>
              </div>
                
              </div>
       


            </div>  
             
           
              
         </div>
      

        </div>
    </div>

        
        
        
      
    
  )
}

export default Contact
