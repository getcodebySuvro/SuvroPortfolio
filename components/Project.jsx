import React from 'react'
import Singleproject from './Singleproject'



const Project = () => {
  return (
    <div className=' w-full lg:h-[100%] p-2 mt-20 py-20  md:py-[130px] lg:pt-[100px] ' id='project'>
         <div className='  flex flex-col justify-center h-full mx-5 md:mx-10'>
            <p className='text-xl tracking-widest uppercase text-slate-500 dark:text-slate-300' data-aos="fade-right">
                My Projects
            </p>
            <h2 className='uppercase dark:text-[#28dfff] text-[#7b28ff] ' data-aos="fade-right" data-aos-delay="700">What i build</h2>
            <p className='font-bold mb-2 text-slate-600  font-sans dark:text-slate-400' data-aos="fade-right" data-aos-delay="900">Fast and Modern Websites</p>
            <Singleproject/>


           

        </div>
      
    </div>
  )
}

export default Project
