import React from 'react'
import './Title.css'
const Title = (props) => {
  return (
    <div className='title text-center mt-20 mb-8 font-semibold' id="title">
        <p className=' text-base uppercase'> {props.subTitle} </p>
        <h2 className='text-4xl mt-1'> {props.title} </h2>
    </div>
  )
}
export default Title