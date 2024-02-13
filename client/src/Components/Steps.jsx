import React from 'react'
import BannerStep from "../assets/StepsBanner.jpg"

const Steps = () => {
    return (
        <div className='lg:w-[80%] md:w-[90%] w-[90%] m-auto py-20 md:py-32'>
            <div className="flex md:flex-row flex-col gap-20 lg:items-start xl:items-center justify-between">
                <div className='basis-[40%]'>
                    <div className='flex flex-col gap-8'>
                        <div className='text-left lg:pb-10 xl:pb-20 border-b-2 border-black'>
                            <h1 className='text-lg md:text-3xl font-bold mb-2 md:mb-5'>Step 1</h1>
                            <p className='text-gray-700 text-base md:text-xl mb-5'>SignUp to Our Outstanding Platform.</p>
                        </div>
                        <div className='text-left lg:pb-10 xl:pb-20 border-b-2 border-black'>
                            <h1 className='text-lg md:text-3xl font-bold mb-2 md:mb-5'>Step 2</h1>
                            <p className='text-gray-700 text-base md:text-xl mb-5'>You will assign with a dedicated panel to make your perzionlized Wedding invitation with our pre created templates.</p>
                        </div>
                        <div className='text-left lg:pb-10 xl:pb-20 border-b-2 border-black'>
                            <h1 className='text-lg md:text-3xl font-bold mb-2 md:mb-5'>Step 3</h1>
                            <p className='text-gray-700 text-base md:text-xl mb-5'>Share your invitation to all your guest and impress them with your invite.</p>
                        </div>
                    </div>
                </div>
                <div className='basis-[50%] w-[100%]'>
                    <div className='mb-8 w-[100%]'>
                        <img src={BannerStep} alt="" className='lg:w-[90%] xl:w-[70%] object-cover' />
                    </div>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold mb-5 lg:leading-[2.5rem] xl:leading-[4.5rem]'>How Everything <br /> Work</h1>
                    <p className='max-w-[80%] text-gray-700 text-lg md:text-xl mb-2 md:mb-5'>Create Memorable Events in 3 Easy Steps</p>
          <button className='bg-amber-700 hover:bg-transparent border-amber-700 border-2 hover:text-amber-700 ease-in-out duration-300 text-white font-medium text-base md:text-lg px-4 py-2 md:px-6 md:py-2 rounded-2xl'>Sign Up now</button>
                </div>
            </div>
        </div>
    )
}

export default Steps