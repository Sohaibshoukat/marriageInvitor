import React, { useState } from 'react';
import Logo from "../assets/Marriage.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr"
import { LuLayoutTemplate } from "react-icons/lu"
import { BsCalendar4Event } from "react-icons/bs"
import { IoSettingsOutline } from "react-icons/io5"
import { IoIosLogOut } from "react-icons/io"
import Setting from '../Components/Setting';
import { useLocation, useNavigate } from 'react-router-dom';


function Dashboard() {
  const tabs = [
    {
      name: 'Events',
      Icon: BsCalendar4Event,
      component: Setting

    },
    {
      name: 'Templates',
      Icon: LuLayoutTemplate,
      component: Setting
    },
    {
      name: 'Settings',
      Icon: IoSettingsOutline,
      component: Setting
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [activeComponent, setactiveComponent] = useState(tabs[0])

  const navigate = useNavigate();

  const location = useLocation();
  const { data } = location.state || {};


  const handleTabClick = (index) => {
    setActiveTab(index);
    setactiveComponent(tabs[index])
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>



      <div className="flex h-screen">

        {/* Left Pane  */}
        <div className={`lg:basis-[30%] xl:basis-[22%] absolute lg:relative w-[80%] md:w-[55%]  h-[100%] rounded-tr-2xl ${isMenuOpen && 'hidden'}  lg:block rounded-br-2xl lg:w-auto bg-[#f5d5ad] px-2`}>
          <div
            className={`md:block relative top-0 left-0 h-full rounded-r-3xl `}
          >


            <div className="flex-col absolute top-[3%] right-[-20%] md:mt-0 lg:hidden">
              <button
                type="button"
                className="p-2 text-black text-4xl md:text-5xl focus:outline-none lg:hidden "
                onClick={toggleMenu}
              >
                <GrClose />
              </button>
            </div>

            <div className="flex items-center justify-center pr-2 border-b-4 border-amber-700">
              <img
                src={Logo}
                alt="User avatar"
                className="w-[100%] h-[100%] lg:mb-2"
              />
            </div>

            <ul className='py-4'>
              {tabs.map((tab, index) => (
                <li
                  key={tab.name}
                  className={`
                      px-4 md:px-6 mb-2 md:mb-3 py-4 cursor-pointer font-medium text-black text-2xl 
                      ${activeTab === index && 'bg-amber-700 text-white rounded-lg'} 
                      ${activeTab != index ? 'hover:rounded-2xl hover:text-white  hover:bg-amber-500' : 'hover:text-amber-200'}
                      ease-in-out duration-300`}
                  onClick={() => handleTabClick(index)}
                >
                  <div className='flex flex-row gap-4 items-center'>
                    <tab.Icon />
                    {tab.name}
                  </div>
                </li>
              ))}

            </ul>

            <div
              type="button"
              className="absolute mb-2 rounded-lg flex flex-row items-center gap-4 bottom-0 left-0 w-full px-4 py-4 font-semibold  text-2xl bg-amber-700 text-white hover:bg-amber-600"
              onClick={handleLogout}
            >
              <IoIosLogOut className='text-4xl' />
              Logout
            </div>

          </div>
        </div>

        {/* Right pane */}
        <div className="basis-[100%] lg:basis-[68%] xl:basis-[78%] w-[100%]">

          {/* Header */}
          <div className='flex flex-row items-center justify-between gap-0 md:gap-20 h-auto shadow-xl py-4 bg-white px-4 md:px-10 '>
            <button
              type="button"
              className={`nline-flex p-2 text-2xl md:ext-4xl lg:hidden rounded-md bg-transparent hover:bg-gray-100 focus:outline-none`}
              onClick={toggleMenu}
            >
              <GiHamburgerMenu />
            </button>
            <h2 className='text-xl md:text-3xl font-normal'>{activeComponent.name}</h2>
            <IoIosLogOut className='text-3xl md:text-4xl' />
          </div>

          <div className='py-10 w-[95%] m-auto'>
            <activeComponent.component data={data} />
          </div>

        </div>

      </div>
    </>

  );
}

export default Dashboard;
