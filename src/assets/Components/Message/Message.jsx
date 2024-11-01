import React from 'react'
import './Message.css'
const Message = () => {
  return (
    <div className='Message flex gap-10' id='message'>
      <div className='Message_left flex flex-col gap-4'>
        <h2 className='text-2xl font-bold flex gap-6'>Send Us a message<i class="ri-message-3-fill"></i></h2>
        <p className='text-[#676767]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam iusto ea dicta assumenda quod qui numquam, necessitatibus unde. Dolores est ea omnis cupiditate aspernatur non nisi deleniti, inventore, saepe commodi eos rerum eligendi quasi distinctio id, dolore labore obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus quam, ea odio vero ipsam earum quos temporibus mollitia dignissimos voluptate deserunt, at, impedit labore natus harum repellat! Provident, eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia neque non amet quo. Tempore suscipit placeat nisi sed magni perspiciatis velit quod, sapiente aspernatur ab dolor deleniti amet ad tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione reiciendis asperiores neque molestiae nulla aliquam, non dolorem earum nisi quis dolores eius voluptates consequatur quae voluptas eligendi veniam ut distinctio.</p>
        <h2 className='flex gap-5 text-lg'><i class="ri-phone-fill text-[#212EA0]"></i>8638638733</h2>
        <h2 className='flex gap-5 text-lg'><i class="ri-mail-fill text-[#212EA0]"></i>info@example.com</h2>
        <h2 className='flex gap-5 text-lg'><i class="ri-map-pin-user-fill text-[#212EA0]"></i>1234 Street Name, City, Country</h2>
      </div>
      <div className='Message_right'>
        <form>
          <div className='flex gap-2 flex-col'>
            <h2>Your Name</h2>
            <input type='text' className='p-2 bg-[#F5F5F5] rounded-md outline-none' placeholder='Name' />
            <h2>Your Email</h2>
            <input type='email' className='p-2 rounded-md outline-none bg-[#F5F5F5]' placeholder='Email' />
            <h2>Subject</h2>
            <input type='text' className='p-2 rounded-md outline-none bg-[#F5F5F5]' placeholder='Subject' />
            <h2>Message</h2>
            <textarea name='' id='' cols='30' rows='7' className='p-2 rounded-md outline-none bg-[#F5F5F5]' placeholder='Message'></textarea>
            <button className='bg-[#212EA0] text-white p-2 rounded-md w-[100px]'>Submit</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Message