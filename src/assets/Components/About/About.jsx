import React from 'react'
import './About.css'
const About = (props) => {
  return (
    <div className='flex items-center justify-between my-[100px] w-[90%] mx-auto' id='about'>
        <div className='basis-[40%] relative'>
            <img className='w-[100%] rounded-md ' src='https://images.unsplash.com/photo-1719937206341-38a6392dfdef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='about_img'/>
            <i class="ri-play-circle-fill absolute top-[40%] left-[40%] text-[rgba(0,15,152,0.7)] cursor-pointer text-7xl translate-[-50% -50%]"></i>
        </div>
        <div className='basis-[56%] '>
            <h3 className='text-xl font-bold text-[#212EA0]'>{props.subTitle}</h3>
            <h2 className='text-4xl font-bold text-[#000F38]'>{props.title}</h2>
            <p className='text-small text-[#676767]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vero tempore similique placeat laboriosam excepturi, magni fugiat totam! Vitae modi odit maxime et accusamus facere ut at consectetur possimus dolorum error natus dolores labore nesciunt, aut eos! Ad iusto cupiditate perferendis ipsa ipsam quidem! Sint aut repudiandae possimus eum.</p>
            <p className='text-small text-[#676767]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem optio at dicta eum, magnam ex, sapiente modi, architecto molestias similique est. Adipisci dolore non et, aperiam voluptas architecto provident, necessitatibus aut minus ad soluta! Blanditiis totam nemo, minima cumque ipsam adipisci id rem, temporibus sed facere laudantium sunt corrupti enim qui quos optio quasi hic nihil beatae distinctio perspiciatis. Ducimus nostrum odio iste velit dolorum consequatur pariatur distinctio. Vero.</p>
            <p className='text-small text-[#676767]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis facere neque impedit quidem! Ullam id vel molestiae similique tempore, non atque, corrupti enim explicabo nostrum beatae voluptatibus magnam. At eos voluptatem dicta, adipisci voluptates earum maiores ullam, omnis, sed magni ab necessitatibus consectetur maxime est explicabo sint consequuntur. Dolorum magnam rerum in eius praesentium ex nulla, perferendis reprehenderit.</p>
        </div>
    </div>
  )
}

export default About