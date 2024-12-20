import React from 'react'
import photo from './profile.jpg'


export const ProfileParent = ({ props }) => {
    console.log(props);

    return (
        <div className='flex justify-center items-center bg-gray-100 h-screen'>
            <div className='w-[400px] border-4 border-gray-950  grid grid-rows-2 '>
                <div>
                    <img src={photo} alt="profile photo" />
                </div>
                <div>
                    <h1 className='flex justify-center items-center text-2xl m-5'>Sharon Shamitha S</h1>
                    <p className='flex justify-center items-center  m-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, consequuntur amet? Dolor temporibus quod amet unde magni veritatis quibusdam impedit eum natus at, quos, est velit distinctio autem, beatae vero.</p>
                    <div className='flex flex-wrap '>
                        {props.map((item, index) => (<span key={index} className=' flex flex-row-reverse m-2 px-3  text-white rounded' style={{ backgroundColor: item.color }}>{item.skill}{item.emoji}</span>))}
                    </div>
                </div>

            </div>
        </div>
    )
}




