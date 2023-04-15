import React from 'react'
import Image from 'next/image'
import mov from './assets/mov.jpg'
import pin from './assets/Pinplace.jpg'
import temp from './assets/temp3dm.jpg'
import chatanything from './assets/chatanything.jpg'

const Singleproject = () => {
  return (
    <div className='sm:mx-2 lg:mx-0'>
       <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-8 pt-5 lg:mx-7 ' >

           <div data-aos="zoom-in" data-aos-delay="1400">
           <div className='p-6  shadow-xl rounded-xl hover:scale-105  hover:shadow-[#7a28ff87] hover:shadow-lg ease-in duration-300 dark:shadow-none dark:hover:shadow-none dark:bg-[#7b28ff]' >
    <div className='grid grid-cols-1 gap-4 justify-center items-center'>
        <div className='m-auto rounded relative'>
            <Image src={mov}  width={1000} height={500}  alt="Movieweb" className='rounded' placeholder='blur' objectFit='cover'/>
            <div className='absolute w-full h-full bg-black/70 top-0 left-0 rounded hover:bg-transparent duration-500'></div>
            <div className='absolute bottom-2 left-0 uppercase text-white font-bold text-2xl border-b-white font-sans bg-black/40 px-3 py-1 '>MovieWeb</div>
        </div>
            <div className='m-auto'>
                <h3 className='flex flex-col items-center justify-center text-sm  font-light dark:text-white tracking-tight text-justify font-monts'>A simple and eye catchy Movie Information and Movie Booking completely responsive reactapp with attractive stylish user interface with MaterialUI. It has many features like Add to favourites, Search by movie name , search by movie rating and also a dummy movie ticket booking Ui. So why wait ? try it now !</h3>
               <div className='flex flex-wrap mt-1'>
                    <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2  justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            React.js
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2  justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            Hooks
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2  justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            UseContext Hook
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2  justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            API
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2  justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            Axios
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2  justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            Material Ui
                        </span>
               </div>
                
                <div className='flex my-1  justify-center items-center '>
                    <a href='https://github.com/getcodebySuvro/MovieWeb' target="_blank" rel="noreferrer" className='w-[50%]'>
                        <div className='flex justify-center p-2 cursor-pointer  mt-2 rounded-full uppercase font-bold text-[#7b28ff] hover:shadow-slate-400 shadow-lg hover:bg-[#7b28ff] hover:text-white duration-300 active:scale-90 dark:shadow-none dark:hover:shadow-none dark:text-slate-300 dark:hover:text-white dark:bg-[#170338]/80 dark:hover:bg-[#170338]'>
                            Code
                        </div>
                    </a>
                    <a href='https://moviewebwithsuvro.netlify.app/' target="_blank" rel="noreferrer" className='w-[50%]'>
                        <div className='flex justify-center p-2 cursor-pointer  mt-2 ml-3 rounded-full uppercase font-bold text-[#7b28ff] hover:shadow-slate-400 shadow-lg hover:bg-[#7b28ff] hover:text-white duration-300 active:scale-90  dark:shadow-none dark:hover:shadow-none dark:text-slate-300 dark:hover:text-white dark:bg-[#170338]/80 dark:hover:bg-[#170338]'>
                            Demo
                        </div>
                    </a>
                </div>
            </div>
         </div>

         
     </div>
           </div>

    <div data-aos="zoom-in" data-aos-delay="1600">
    <div className='p-6  shadow-xl rounded-xl hover:scale-105  hover:shadow-[#7a28ff87] hover:shadow-lg ease-in duration-300 dark:shadow-none dark:hover:shadow-none dark:bg-[#7b28ff]'>
    <div className='grid grid-cols-1 gap-4 justify-center items-center'>
        <div className='m-auto rounded relative'>
        <Image src={temp}  width={1000} height={500} alt="tempchat" className='rounded ' placeholder='blur' objectFit='cover'/>
            <div className='absolute w-full h-full bg-black/70 top-0 left-0 rounded hover:bg-transparent duration-500'></div>
            <div className='absolute bottom-2 left-0 uppercase text-white font-bold text-2xl border-b-white font-sans bg-black/40 px-3 py-1 '>TempChat</div>
        </div>
            <div className='m-auto '>
                <h3 className='flex flex-col items-center justify-center text-sm dark:text-white font-light tracking-tight text-justify'>A simple but attractive responsive chat web-application made up with React for frontend , Node and Express.js for backend , Socket.io for maintaining the Websocket protocol . Has many features like Group chat as well as Private chat ,any kind of file sharing , notification option , also it nullifies duplicate user problem. So why wait ? try it now !</h3>
               <div className='flex flex-wrap mt-1'>
                    <span className='bg-[hsl(263,100%,63%)]  rounded-full mt-2 text-white px-3 py-1 font-bold mr-2   justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            React.js
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2  justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            Node
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2  justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            Express
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2  justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            Socket.io
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2  justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            File Sharing
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2  justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            Moment.js
                        </span>
               </div>
                
                <div className='flex my-1  justify-center items-center'>
                    
                     <a href='https://github.com/getcodebySuvro/TempChat' target="_blank" rel="noreferrer" className='w-[50%] '>
                        <div className='justify-center flex p-2 cursor-pointer  mt-2 rounded-full uppercase font-bold text-[#7b28ff] hover:shadow-slate-400 shadow-lg hover:bg-[#7b28ff] hover:text-white duration-300 active:scale-90  dark:shadow-none dark:hover:shadow-none dark:text-slate-300 dark:hover:text-white dark:bg-[#170338]/80 dark:hover:bg-[#170338]'>
                            Code
                        </div>
                    </a>
                    <a href='https://tempchatwithsuvro.netlify.app/' target="_blank" rel="noreferrer" className='w-[50%] '>
                        <div className='justify-center flex p-2 cursor-pointer mt-2 ml-3 rounded-full uppercase font-bold text-[#7b28ff] hover:shadow-slate-400 shadow-lg hover:bg-[#7b28ff] hover:text-white duration-300 active:scale-90  dark:shadow-none dark:hover:shadow-none dark:text-slate-300 dark:hover:text-white dark:bg-[#170338]/80 dark:hover:bg-[#170338]'>
                            Demo
                        </div>
                    </a>
                    
                </div>
            </div>
         </div>

         
     </div>
    </div>
   
    <div data-aos="zoom-in" data-aos-delay="1800">
    <div className='p-6  shadow-xl rounded-xl hover:scale-105  hover:shadow-[#7a28ff87] hover:shadow-lg ease-in duration-300 dark:shadow-none dark:hover:shadow-none dark:bg-[#7b28ff]'>
    <div className='grid grid-cols-1 gap-4 justify-center items-center'>
        <div className='m-auto rounded relative  '>
        <Image src={pin}  width={1000} height={500} alt="PinPlace" className='rounded ' placeholder='blur' objectFit='cover'/>
            <div className='absolute w-full h-full bg-black/70 top-0  left-0 rounded hover:bg-transparent duration-500'></div>
            <div className='absolute bottom-2 left-0 uppercase text-white font-bold text-2xl border-b-white font-sans bg-black/40 px-3 py-1 '>PinPlace</div>
        </div>
            <div className='m-auto '>
                <h3 className='flex flex-col items-center justify-center text-sm dark:text-white font-light tracking-tight text-justify'>Pinplace  is a completely responsive geological Map Web-application made up with React for frontend, Node and Express.js for Backend and MongoDb Atlas for the Database. It has many features like User authentication, Logout and Delete my account option , Crud Application , Rest Api , Filter for showing only your pin or all pins also a Search by Pin title option . So why wait ? try it now !</h3>
               <div className='flex flex-wrap mt-1'>
                    <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2   justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            MERN
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2   justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            User Authentication
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2  justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            CRUD
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2  justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            REST API
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2  justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            Mapbox
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2  justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            React-map-gl
                        </span>
               </div>
                
                <div className='flex my-1  justify-center items-center'>
                    
                     <a href='https://github.com/getcodebySuvro/PinPlace' target="_blank" rel="noreferrer" className='w-[50%] '>
                        <div className='justify-center flex p-2 cursor-pointer  mt-2 rounded-full uppercase font-bold text-[#7b28ff] hover:shadow-slate-400 shadow-lg hover:bg-[#7b28ff] hover:text-white duration-300 active:scale-90  dark:shadow-none dark:hover:shadow-none dark:text-slate-300 dark:hover:text-white dark:bg-[#170338]/80 dark:hover:bg-[#170338]'>
                            Code
                        </div>
                    </a>
                    <a href='https://pinplacewithsuvro.netlify.app/' target="_blank" rel="noreferrer" className='w-[50%] '>
                        <div className='justify-center flex p-2 cursor-pointer mt-2 ml-3 rounded-full uppercase font-bold text-[#7b28ff] hover:shadow-slate-400 shadow-lg hover:bg-[#7b28ff] hover:text-white duration-300 active:scale-90  dark:shadow-none dark:hover:shadow-none dark:text-slate-300 dark:hover:text-white dark:bg-[#170338]/80 dark:hover:bg-[#170338]'>
                            Demo
                        </div>
                    </a>
                    
                </div>
            </div>
         </div>

         
     </div>
    </div>
     

    <div data-aos="zoom-in" data-aos-delay="2000">
    <div className='p-6  shadow-xl rounded-xl hover:scale-105  hover:shadow-[#7a28ff87] hover:shadow-lg ease-in duration-300 dark:shadow-none dark:hover:shadow-none dark:bg-[#7b28ff]'>
    <div className='grid grid-cols-1 gap-4 justify-center items-center'>
        <div className='m-auto rounded relative  '>
        <Image src={chatanything}  width={1000} height={500} alt="PinPlace" className='rounded ' placeholder='blur' objectFit='cover'/>
            <div className='absolute w-full h-full bg-black/70 top-0  left-0 rounded hover:bg-transparent duration-500'></div>
            <div className='absolute bottom-2 left-0 uppercase text-white font-bold text-2xl border-b-white font-sans bg-black/40 px-3 py-1 '>ChatAnything</div>
        </div>
            <div className='m-auto '>
                <h3 className='flex flex-col items-center justify-center text-sm dark:text-white font-light tracking-tight text-justify'>Chatanything is the ultimate solution for your every queries.It is made up with Nextjs,Nodejs,expressjs,mongodb.It has many features like User authentication, Logout and Delete my account option , Crud Application , Rest Api , Ai Chating , You can save your desired question and answers in form of notes and you can edit or delete those notes also . So why wait ? try it now !</h3>
               <div className='flex flex-wrap mt-1'>
                    <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2   justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            MERN
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2   justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            User Authentication
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2  justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            CRUD
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2  justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            REST API
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2  justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            OpenAi
                        </span>
                        <span className='bg-[hsl(263,100%,63%)] rounded-full mt-2 text-white px-3 py-1 font-bold mr-2  justify-center items-center dark:bg-[#170338]/40 text-sm'>
                            SSR
                        </span>
               </div>
                
                <div className='flex my-1  justify-center items-center'>
                    
                     <a href='https://github.com/getcodebySuvro/ChatAnything' target="_blank" rel="noreferrer" className='w-[50%] '>
                        <div className='justify-center flex p-2 cursor-pointer  mt-2 rounded-full uppercase font-bold text-[#7b28ff] hover:shadow-slate-400 shadow-lg hover:bg-[#7b28ff] hover:text-white duration-300 active:scale-90  dark:shadow-none dark:hover:shadow-none dark:text-slate-300 dark:hover:text-white dark:bg-[#170338]/80 dark:hover:bg-[#170338]'>
                            Code
                        </div>
                    </a>
                    <a href='https://chat-anything.vercel.app/' target="_blank" rel="noreferrer" className='w-[50%] '>
                        <div className='justify-center flex p-2 cursor-pointer mt-2 ml-3 rounded-full uppercase font-bold text-[#7b28ff] hover:shadow-slate-400 shadow-lg hover:bg-[#7b28ff] hover:text-white duration-300 active:scale-90  dark:shadow-none dark:hover:shadow-none dark:text-slate-300 dark:hover:text-white dark:bg-[#170338]/80 dark:hover:bg-[#170338]'>
                            Demo
                        </div>
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

export default Singleproject
