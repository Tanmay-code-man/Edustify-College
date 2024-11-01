import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className='w-full min-h-screen bg-heroPattern bg-cover bg-center text-white ' id='hero'>
        <div className='pt-20 px-44 flex flex-col justify-center w-full min-h-screen items-center'>
            <h1 className="font-bold text-7xl w-max ">We are the Best ! </h1>
            <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi inventore temporibus, assumenda laboriosam corporis maxime tenetur explicabo numquam sequi, esse quo deleniti ad, tempore blanditiis. Sit corrupti neque culpa cumque aliquid quia quis deserunt, ut veritatis maxime obcaecati sunt enim aperiam veniam quae nesciunt, molestias animi voluptatibus, non autem dolores dolor numquam! Accusantium perferendis, nemo ea voluptatem  </p>
            <button className='border-2 bg-white text-black mt-8 rounded-xl px-5 py-3 hover:bg-transparent hover:text-white transition-all duration-300 flex items-center gap-2'>Explore More<i class="ri-arrow-right-line"></i></button>
        </div>
    </div>
  )
}

export default Hero