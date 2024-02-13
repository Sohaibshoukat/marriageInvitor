import React from 'react'
import Banner from "../assets/Banner.jpg"
import Invite from "../assets/InviteTab.jpg"
import BannerInfo from "../assets/BannerInfo.jpg"
import Banner4 from "../assets/Banner4.jpg"
import { motion } from "framer-motion";
import TestimonialSlider from '../Components/TestimonialSlider';
import Steps from '../Components/Steps';

const Home = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-6 px-8 md:px-14 lg:px-20 xl:px-36 py-12 m-auto mb-10'>
        <div className='text-left basis-[45%]'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold mb-2 md:mb-5 lg:leading-[2.5rem] xl:leading-[4.5rem]'>Your Heartfelt Invitation <br /> Now on Your <br />Guest's Screens</h1>
          <p className='xl:max-w-[80%] text-gray-700 text-base md:text-lg lg:text-xl mb-5'>Infuse your wedding invitation with a personal touch that transcends the miles and brings the celebration straight to your guests' screens.</p>
          <button className='bg-amber-700 hover:bg-transparent border-amber-700 border-2 hover:text-amber-700 ease-in-out duration-300 text-white font-medium text-lg px-4 py-2 md:px-6 md:py-2 rounded-2xl'>Try Now</button>

        </div>
        <div className='basis-[45%] rounded-xl'>
          <img src={Banner} alt="" className='w-[100%] h-[100%] rounded-2xl object-cover' />
        </div>
      </div>

      {/*  */}
      <div className='flex flex-col md:flex-row justify-between gap-6 px-8 md:px-14 lg:px-20 xl:px-36 py-12 m-auto bg-gray-100 '>
        <div className='basis-[45%] rounded-xl'>
          <img src={Invite} alt="" className='w-[100%] h-[100%] rounded-2xl object-cover' />
        </div>
        <div className='text-left basis-[45%]'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold mb-2 md:mb-5 lg:leading-[2.5rem] xl:leading-[4.5rem]'>Unveiling <br />Digital Inviter</h1>
          <p className='xl:max-w-[80%] text-gray-700 text-base md:text-lg lg:text-xl mb-5'>Create A Custom Digital Invitation For Your Precious life Moments.</p>
          <button className='bg-amber-700 hover:bg-transparent border-amber-700 border-2 hover:text-amber-700 ease-in-out duration-300 text-white font-medium text-lg px-4 py-2 md:px-6 md:py-2 rounded-2xl'>Demo</button>
        </div>
      </div>


      {/*  */}
      <Steps/>

      <div className='flex flex-col md:flex-row justify-between gap-6 px-8 md:px-14 lg:px-20 xl:px-36 py-12 m-auto bg-gray-100 '>
        <div className='basis-[45%] rounded-xl'>
          <img src={BannerInfo} alt="" className='w-[100%] h-[100%] rounded-2xl object-cover' />
        </div>
        <div className='text-left basis-[45%]'>
          <p className='text-base text-gray-700 mb-5 md:mb-20'>Cost-Effective</p>
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold mb-2 md:mb-5 lg:leading-[2.5rem] xl:leading-[4.5rem]'>Celebrate Smart with <br />Digital Inviter</h1>
          <p className='xl:max-w-[80%] text-gray-700 text-base md:text-lg lg:text-xl mb-5'>Design luxurious invites with Einvite and save. Elegant, cost-effective, and just a click away to start your eco-friendly celebration journey.</p>
          <button className='bg-amber-700 hover:bg-transparent border-amber-700 border-2 hover:text-amber-700 ease-in-out duration-300 text-white font-medium text-lg px-4 py-2 md:px-6 md:py-2 rounded-2xl'>Create Invite</button>
        </div>
      </div>

      {/*  */}
      <div className=" bg-primary/30 py-10 md:py-16 lg:py-20  xl:py-32 text-center lg:max-w-[85%] xl:max-w-[80%] md:max-w-[90%] max-w-[95%] m-auto">
        <div className="container mx-auto h-full flex flex-col justify-center">
          <motion.h2
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-8 xl:mb-0  text-2xl md:text-4xl lg:text-6xl text-black font-semibold"
          >
            What clients <span className="text-amber-700">say.</span>
          </motion.h2>

          {/* slider */}
          <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <TestimonialSlider />
          </motion.div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between gap-6 px-8 md:px-14 lg:px-20 xl:px-36 py-12 m-auto bg-gray-100 '>
        <div className='text-left basis-[55%]'>
          <p className='text-base text-gray-700 mb-5 md:mb-20'>- Free</p>
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold mb-2 md:mb-5 lg:leading-[2.5rem] xl:leading-[4.5rem]'>Ready to Save Big  <br />on Stylish Invitations?</h1>
          <p className='xl:max-w-[80%] text-gray-700 text-base md:text-lg lg:text-xl mb-5'>Choose our environment and budget-friendly option today and begin crafting memorable moments with Einvite.</p>
          <button className='bg-amber-700 hover:bg-transparent border-amber-700 border-2 hover:text-amber-700 ease-in-out duration-300 text-white font-medium text-lg px-4 py-2 md:px-6 md:py-2 rounded-2xl'>Create Invite</button>
        </div>
        <div className='basis-[40%] rounded-xl'>
          <img src={Banner4} alt="" className='w-[100%] h-[100%] rounded-2xl object-cover' />
        </div>
      </div>
    </>
  )
}

export default Home