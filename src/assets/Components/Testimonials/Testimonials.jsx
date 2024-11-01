import React from 'react'
import './Testimonials.css'
import { useRef } from 'react';
const Testimonials = () => {
    const slider = useRef();
    let tx=0;
const slideforward= ()=>{
    if (tx > -75){
        tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
}
const slidebackward= ()=>{
    if (tx <= 0){
        tx = tx+25;    
    }
    slider.current.style.transform=`translateX(${tx}%)`;
}

  return (
    <div className='relative w-[90%] h-[50vh] px-auto mx-auto mb-[80px]' id='testimonials'>
        <i onClick={slidebackward} class="ri-arrow-left-line absolute top-[50%] translate-y-[-50%] cursor-pointer scale-150 left-0 right-auto w-[40px] h-[40px] bg-blue-700 rounded-full flex items-center justify-center text-white" ></i>
        <div className='overflow-hidden'>
            <ul className=' slider flex w-[200%] overflow-x-hidden transition-all duration-500' ref={slider}>
                <li className='w-[50%] p-[20px] list-none'>
                    <div className="testimonial">
                        <div className="user-info">
                            <img className='rounded-full w-[65px] h-[65px] object-cover mr-[10px] border-4 border-[#212EA0] ' src='https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''></img>
                            <div>
                                <h3 className='select-none'>Vedant</h3>
                                <p className='select-none'>Position</p>
                            </div>
                        </div>
                        <div className="">
                            <p className='select-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, architecto perferendis. Totam eius earum voluptatem nemo reiciendis quasi harum dolorem ad est perspiciatis sunt obcaecati quo consequatur, temporibus aliquam ea incidunt. Quaerat dicta voluptatem, libero eius inventore minima doloribus molestiae.</p>
                        </div>
                    </div>
                </li>
                <li className='w-[50%] p-[20px] list-none'>
                    <div className="testimonial">
                        <div className="user-info">
                            <img className='rounded-full w-[65px] h-[65px] object-cover mr-[10px] border-4 border-[#212EA0] ' src='https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''></img>
                            <div>
                                <h3 className='select-none'>Swayam</h3>
                                <p className='select-none'>Position</p>
                            </div>
                        </div>
                        <div className="">
                            <p className='select-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, architecto perferendis. Totam eius earum voluptatem nemo reiciendis quasi harum dolorem ad est perspiciatis sunt obcaecati quo consequatur, temporibus aliquam ea incidunt. Quaerat dicta voluptatem, libero eius inventore minima doloribus molestiae.</p>
                        </div>
                    </div>
                </li>
                <li className='w-[50%] p-[20px] list-none'>
                    <div className="testimonial">
                        <div className="user-info">
                            <img className='rounded-full w-[65px] h-[65px] object-cover mr-[10px] border-4 border-[#212EA0]' src='https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''></img>
                            <div>
                                <h3 className='select-none'>Pawni</h3>
                                <p className='select-none'>Position</p>
                            </div>
                        </div>
                        <div className="">
                            <p className='select-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, architecto perferendis. Totam eius earum voluptatem nemo reiciendis quasi harum dolorem ad est perspiciatis sunt obcaecati quo consequatur, temporibus aliquam ea incidunt. Quaerat dicta voluptatem, libero eius inventore minima doloribus molestiae.</p>
                        </div>
                    </div>
                </li>
                <li className='w-[50%] p-[20px] list-none'>
                    <div className="testimonial">
                        <div className="user-info">
                            <img className='rounded-full w-[65px] h-[65px] object-cover mr-[10px] border-4 border-[#212EA0]' src='https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''></img>
                            <div>
                                <h3 className='select-none'>Tanmay</h3>
                                <p className='select-none'>Position</p>
                            </div>
                        </div>
                        <div className="">
                            <p className='select-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, architecto perferendis. Totam eius earum voluptatem nemo reiciendis quasi harum dolorem ad est perspiciatis sunt obcaecati quo consequatur, temporibus aliquam ea incidunt. Quaerat dicta voluptatem, libero eius inventore minima doloribus molestiae.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <i onClick={slideforward} class="ri-arrow-right-line absolute top-[50%] translate-y-[-50%] cursor-pointer scale-150 right-0 left-auto w-[40px] h-[40px] bg-blue-700 rounded-full flex items-center justify-center text-white" ></i>
    </div>
  )
}

export default Testimonials