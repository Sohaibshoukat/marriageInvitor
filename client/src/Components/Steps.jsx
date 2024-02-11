import React from 'react'
import BannerStep from "../assets/StepsBanner.jpg"

const Steps = () => {
    return (
        <div className='lg:w-[80%] md:w-[90%] w-[95%] m-auto py-32'>
            <div className="flex md:flex-row flex-col gap-20 items-center justify-between">
                <div className='basis-[40%]'>
                    <div className='flex flex-col gap-8'>
                        <div className='text-left pb-20 border-b-2 border-black'>
                            <h1 className='text-lg md:text-3xl font-bold mb-5'>Step 1</h1>
                            <p className='text-gray-700 text-xl mb-5'>SignUp to Our Outstanding Platform.</p>
                        </div>
                        <div className='text-left pb-20 border-b-2 border-black'>
                            <h1 className='text-lg md:text-3xl font-bold'>Step 2</h1>
                            <p className='text-gray-700 text-xl mb-5'>You will assign with a dedicated panel to make your perzionlized Wedding invitation with our pre created templates.</p>
                        </div>
                        <div className='text-left pb-20 border-b-2 border-black'>
                            <h1 className='text-lg md:text-3xl font-bold'>Step 3</h1>
                            <p className='text-gray-700 text-xl mb-5'>Share your invitation to all your guest and impress them with your invite.</p>
                        </div>
                    </div>
                </div>
                <div className='basis-[50%] w-[100%]'>
                    <div className='mb-8 w-[100%]'>
                        <img src={BannerStep} alt="" className='w-[70%] object-cover' />
                    </div>
                    <h1 className='text-6xl font-semibold mb-5' style={{ lineHeight: "4.5rem" }}>How Everything <br /> Work</h1>
                    <p className='max-w-[80%] text-gray-700 text-xl mb-5'>Create Memorable Events in 3 Easy Steps</p>
          <button className='bg-amber-700 hover:bg-transparent border-amber-700 border-2 hover:text-amber-700 ease-in-out duration-300 text-white font-medium text-lg px-6 py-2 rounded-2xl'>Sign Up now</button>
                </div>
            </div>
        </div>
    )
}

export default Steps