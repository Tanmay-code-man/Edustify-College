import React from 'react'
import './Programs.css'
const Programs = () => {
    return (
        <div className='flex justify-between items-center gap-10 w-[90%] my-[80px] mx-auto' id='programs'>
            <div className='program relative'>
                <img src='https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='program' className='w-full block border-red rounded-xl ' />
                <div className='caption absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,15,152,0.3)] rounded-xl flex flex-col justify-center items-center cursor-pointer text-white pt-[70%]'>
                    <i class="ri-user-3-line text-2xl"></i>
                    <p className='text-lg'>Lorem ipsum dolor </p>
                </div>
            </div>
            <div className='program relative'>
                <img src='https://images.unsplash.com/photo-1677594334053-afe4b41aa0a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='program' className='w-full block border-2 rounded-xl ' />
                <div className='caption absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,15,152,0.3)] rounded-xl flex flex-col justify-center items-center cursor-pointer text-white pt-[70%]'>
                    <i class="ri-user-3-line text-2xl"></i>
                    <p className='text-lg'>Lorem ipsum dolor </p>
                </div>
            </div>
            <div className='program relative'>
                <img src='https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='program' className='w-full block rounded-xl ' />
                <div className='caption absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,15,152,0.3)] rounded-xl flex flex-col justify-center items-center cursor-pointer text-white pt-[70%]'>
                    <i class="ri-user-3-line text-2xl"></i>
                    <p className='text-lg'>Lorem ipsum dolor</p> 
                </div>
            </div>
        </div>
    )
}

export default Programs