import Image from 'next/image'
import React from 'react'


const Skills = () => {
  return (
    <div className=' flex flex-col w-full lg:h-screen p-2 py-20 mt-20 md:pt-[130px] lg:pt-[180px]  ' id="skills">
        <div className='max-w-[1240px]  flex flex-col justify-center h-full ml-10 mr-10'>
            <p className='text-xl tracking-widest uppercase text-slate-500 dark:text-slate-300' data-aos="fade-right">
                Skills
            </p>
            <h2 className='uppercase dark:text-[#28dfff] text-[#7b28ff]'  data-aos="fade-right" data-aos-delay="700" >What i can  do</h2>
            <p className='font-bold mb-2 text-slate-600 font-sans dark:text-slate-400' data-aos="fade-right " data-aos-delay="900">Awesome Web development</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5  md:mb-[180px] lg:mb-0   '>

                <div data-aos="zoom-in"  data-aos-delay="1200">
                    <div className='p-6 mx-2 shadow-xl rounded-xl hover:scale-105 hover:text-[#7b28ff] hover:shadow-[#7b28ff] hover:shadow-lg ease-in duration-200  dark:bg-[#7b28ff] dark:text-slate-300 dark:shadow-none dark:hover:text-white dark:hover:shadow-none' >
                        <div className='grid grid-cols-2 gap-2 justify-start items-center'>
                            <div className='m-auto rounded '>
                                <Image priority objectFit='cover' src="/../public/assets/html.png" width="50" height="50" alt="html" className='rounded'/>
                            </div>
                                <div className='m-auto'>
                                    <h3 className='flex flex-col items-center justify-center'>HTML</h3>
                                </div>
                            </div>
                    </div>

                </div>
                
                <div data-aos="zoom-in"  data-aos-delay="1400">
                    <div className='p-6 mx-2 shadow-xl rounded-xl hover:scale-105 hover:text-[#7b28ff] hover:shadow-[#7b28ff] hover:shadow-lg ease-in duration-200  dark:bg-[#7b28ff] dark:text-slate-300 dark:shadow-none dark:hover:text-white dark:hover:shadow-none'  >
                        <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                            <div className='m-auto rounded'>
                                <Image priority objectFit='cover' src="/../public/assets/css1.png" width="50" height="50" alt="css" className='rounded'/>
                            </div>
                                <div className='m-auto'>
                                    <h3 className='flex flex-col items-center justify-center'>CSS</h3>
                                </div>
                            </div>
                 </div>
                </div>

                <div  data-aos="zoom-in"  data-aos-delay="1500">
                    <div className='p-6 mx-2 shadow-xl rounded-xl hover:scale-105 hover:text-[#7b28ff] hover:shadow-[#7b28ff] hover:shadow-lg ease-in duration-200  dark:bg-[#7b28ff] dark:text-slate-300 dark:hover:text-white dark:hover:shadow-none' >
                        <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                            <div className='m-auto rounded'>
                                <Image priority objectFit='cover' src="/../public/assets/tailwind.png" width="50" height="50" alt="Tailwindcss" className='rounded'/>
                            </div>
                                <div className='m-auto'>
                                    <h3 className='flex flex-col items-center justify-center'>Tailwind CSS</h3>
                                </div>
                            </div>
                    </div>
                 </div>
                 
                <div data-aos="zoom-in"  data-aos-delay="1600">
                    <div className='p-6 mx-2 shadow-xl rounded-xl hover:scale-105 hover:text-[#7b28ff] hover:shadow-[#7b28ff] hover:shadow-lg ease-in duration-200  dark:bg-[#7b28ff] dark:text-slate-300 dark:shadow-none dark:hover:text-white dark:hover:shadow-none ' >
                        <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                            <div className='m-auto rounded'>
                                <Image priority objectFit='cover' src="/../public/assets/js.png" width="50" height="50" alt="javascript" className='rounded'/>
                            </div>
                                <div className='m-auto'>
                                    <h3 className='flex flex-col items-center justify-center'>Javascript</h3>
                                </div>
                            </div>
                    </div>
                </div>
                 
                
                <div data-aos="zoom-in"  data-aos-delay="1800">
                    <div className='p-6 mx-2 shadow-xl rounded-xl hover:scale-105 hover:text-[#7b28ff] hover:shadow-[#7b28ff] hover:shadow-lg ease-in duration-200  dark:bg-[#7b28ff] dark:text-slate-300 dark:shadow-none dark:hover:text-white dark:hover:shadow-none' >
                        <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                            <div className='m-auto rounded'>
                                <Image priority objectFit='cover' src="/../public/assets/react.png" width="50" height="50" alt="react.js" className='rounded'/>
                            </div>
                                <div className='m-auto'>
                                    <h3 className='flex flex-col items-center justify-center'>React</h3>
                                </div>
                            </div>
                    </div>
                </div>

                <div data-aos="zoom-in"  data-aos-delay="2000">
                    <div className='p-6 mx-2 shadow-xl rounded-xl hover:scale-105 hover:text-[#7b28ff] hover:shadow-[#7b28ff] hover:shadow-lg ease-in duration-200  dark:bg-[#7b28ff] dark:text-slate-300 dark:shadow-none dark:hover:text-white dark:hover:shadow-none' >
                        <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                            <div className='m-auto rounded'>
                                <Image priority objectFit='cover' src="/../public/assets/next.png" width="50" height="50" alt="Next.js" className='rounded'/>
                            </div>
                                <div className='m-auto'>
                                    <h3 className='flex flex-col items-center justify-center'>Next</h3>
                                </div>
                            </div>
                    </div>
                </div>

                 
                <div  data-aos="zoom-in"  data-aos-delay="2100">
                    <div className='p-6 mx-2 shadow-xl rounded-xl hover:scale-105 hover:text-[#7b28ff] hover:shadow-[#7b28ff] hover:shadow-lg ease-in duration-200  dark:bg-[#7b28ff] dark:text-slate-300 dark:shadow-none dark:hover:text-white dark:hover:shadow-none' >
                        <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                            <div className='m-auto rounded'>
                                <Image priority objectFit='cover' src="/../public/assets/node.png" width="50" height="50" alt="Node.js" className='node.js'/>
                            </div>
                                <div className='m-auto'>
                                    <h3 className='flex flex-col items-center justify-center'>Node</h3>
                                </div>
                            </div>
                    </div>
                </div>
                 
                <div  data-aos="zoom-in"  data-aos-delay="2200">
                    <div className='p-6 mx-2 shadow-xl rounded-xl hover:scale-105 hover:text-[#7b28ff] hover:shadow-[#7b28ff] hover:shadow-lg ease-in duration-200  dark:bg-[#7b28ff] dark:text-slate-300 dark:shadow-none dark:hover:text-white dark:hover:shadow-none' >
                        <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                            <div className='m-auto rounded'>
                                <Image priority objectFit='cover' src="/../public/assets/expressJS1.png" width="50" height="50" alt="Express.js" className='rounded'/>
                            </div>
                                <div className='m-auto'>
                                    <h3 className='flex flex-col items-center justify-center'>Express</h3>
                                </div>
                            </div>
                    </div>

                </div>
                

                 <div  data-aos="zoom-in"  data-aos-delay="2300">
                    <div className='p-6 mx-2 shadow-xl rounded-xl hover:scale-105 hover:text-[#7b28ff] hover:shadow-[#7b28ff] hover:shadow-lg ease-in duration-200  dark:bg-[#7b28ff] dark:text-slate-300 dark:shadow-none dark:hover:text-white dark:hover:shadow-none' >
                        <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                            <div className='m-auto rounded'>
                                <Image priority objectFit='cover' src="/../public/assets/newdb.png" width="50" height="50" alt="Mongodb" className='rounded'/>
                            </div>
                                <div className='m-auto'>
                                    <h3 className='flex flex-col items-center justify-center'>MongoDb</h3>
                                </div>
                            </div>
                    </div>
                 </div>

                 <div  data-aos="zoom-in"  data-aos-delay="2400">
                    <div className='p-6 mx-2 shadow-xl rounded-xl hover:scale-105 hover:text-[#7b28ff] hover:shadow-[#7b28ff] hover:shadow-lg ease-in duration-200  dark:bg-[#7b28ff] dark:text-slate-300 dark:shadow-none dark:hover:text-white dark:hover:shadow-none' >
                        <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                            <div className='m-auto rounded'>
                                <Image priority objectFit='cover' src="/../public/assets/sql.png" width="50" height="50" alt="MySQL" className='rounded'/>
                            </div>
                                <div className='m-auto'>
                                    <h3 className='flex flex-col items-center justify-center'>MySQL</h3>
                                </div>
                            </div>
                    </div>
                 </div>

                 <div  data-aos="zoom-in"  data-aos-delay="2500">
                    <div className='p-6 mx-2 shadow-xl rounded-xl hover:scale-105 hover:text-[#7b28ff] hover:shadow-[#7b28ff] hover:shadow-lg ease-in duration-200  dark:bg-[#7b28ff] dark:text-slate-300 dark:shadow-none dark:hover:text-white dark:hover:shadow-none' >
                        <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                            <div className='m-auto rounded'>
                                <Image priority objectFit='cover' src="/../public/assets/photo1.png" width="90" height="50" alt="Photoshop" className='rounded'/>
                            </div>
                                <div className='m-auto'>
                                    <h3 className='flex flex-col items-center justify-center'>Adobe Photoshop</h3>
                                </div>
                            </div>
                    </div>
                 </div>

                 <div  data-aos="zoom-in"  data-aos-delay="2600">
                    <div className='p-6 mx-2 shadow-xl rounded-xl hover:scale-105 hover:text-[#7b28ff] hover:shadow-[#7b28ff] hover:shadow-lg ease-in duration-200  dark:bg-[#7b28ff] dark:text-slate-300 dark:hover:text-white dark:hover:shadow-none' >
                        <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                            <div className='m-auto rounded'>
                                <Image priority objectFit='cover' src="/../public/assets/illu.png" width="80" height="50" alt="Illustrator" className='rounded'/>
                            </div>
                                <div className='m-auto'>
                                    <h3 className='flex flex-col items-center justify-center'>Adobe Illustrator</h3>
                                </div>
                            </div>
                    </div>
                 </div>

                

                

            </div>

        </div>
         

         
      
    </div>
  )
}

export default Skills
