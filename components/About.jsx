import Image from 'next/image'
import React from 'react'
import dp from './assets/dp.jpg'
const About = () => {
  return (
    <div className='flex flex-col  w-full h-full md:h-screen items-center  p-2 pt-20  '  id="about">
        <div className='max-w-[1240px] m-auto mx-10  grid md:grid-cols-2 lg:grid-cols-3  gap-10' >
            <div className='md:col-span-1 lg:col-span-2 mx-2' >
                    <p className='text-xl tracking-widest uppercase text-slate-500 dark:text-slate-300' >
                        About
                    </p>
                <h2 className='dark:text-[#28dfff] uppercase text-[#7b28ff]   font-bold ' data-aos="fade-right" data-aos-delay="700">Who I am</h2>
                <p className='font-bold mb-2  text-slate-600 font-sans dark:text-slate-400' data-aos="fade-right" data-aos-delay="900">Full Stack Web Developer</p>
                
                <p data-aos="fade-right" data-aos-delay="1300" className='dark:text-white tracking-tight '>
                    <i>
                    An Engineering student with a creative approach for solving problems. 
                        Currently studying in Jadavpur University and looking forward to take part 
                        in upcoming opportunities that push my boundaries and add to my learning curve. Always ready to undertake new endeavours and work hard with 
                        esteem and dedication.
                    </i>
                
                </p>
                

            </div>
            <div data-aos="zoom-in-left" data-aos-delay="1700">
            <div  className='dark:shadow-none  dark:bg-[#7b28ff]/30 dark:hover:bg-[#7b28ff] w-[300px] h-[300px]  md:col-span-1 lg:col-span-1 flex bg-white-400 hover:bg-[#7b28ff]  justify-center items-center  p-5 mx-7 mt-7 lg:mt-0 rotate-6  mb-10 sm:mb-0 shadow-xl shadow-slate-400 hover:rotate-0 hover:shadow-[#7b28ff] rounded duration-300'>
                <Image src={dp} width={300} height={300} alt="Suvro" className=' rounded ' objectFit='cover' placeholder='blur' />

            </div>
            </div>
            

        </div>
      
    </div>
  )
}

export default About
