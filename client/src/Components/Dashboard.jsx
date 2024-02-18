import React, { useState } from 'react';

function Dashboard({ userImage }) {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { name: 'Overview', content: 'This is the overview content' },
    { name: 'Feed', content: 'This is the feed content' },
    { name: 'Statistics', content: 'This is the statistics content' },
    { name: 'Teams', content: 'This is the teams content' },
    { name: 'Projects', content: 'This is the projects content' },
    { name: 'Settings', content: 'This is the settings content' },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    setIsMenuOpen(false); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <div className="flex h-screen">
    <div className='w-1/6'>

 {/* Left pane */}
      <div className="flex h-16">
        <button
          type="button"
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          }inline-flex p-2 rounded-md bg-transparent hover:bg-gray-100 focus:outline-none` }
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

     
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } w-64 bg-gray-800 md:block fixed top-0 left-0 h-full rounded-r-3xl `}
      >
        <div className="flex-col h-16 md:mt-0 lg:mt-6 ">
          <button
            type="button"
            className="p-2 text-white hover:text-gray-300 focus:outline-none md:hidden text-right "
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h1 className="text-xl font-bold text-white text-center md:mt-4">Marriage Invitor</h1>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={userImage}
            alt="User avatar"
            className="w-20 h-20 rounded-full lg:mt-2 lg:mb-4 md:my-8"
          />
        </div>
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className={`px-4 py-2 cursor-pointer text-gray-300 hover:text-white ${
                activeTab === tab.name ? 'bg-gray-700 text-white rounded-full' : ''
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.name}
            </li>
          ))}
          
        </ul>
        <button
          type="button"
          className="absolute bottom-0 left-0 w-full py-2 bg-gray-700 text-white hover:bg-gray-600"
          onClick={handleLogout}
        >
          Logout
        </button>
        
      </div>
      </div>
      {/* Right pane */}
      <div className="flex-grow p-4">
          <h2 className="text-2xl font-bold mb-4 ">{activeTab}</h2>
          <p>{tabs.find((tab) => tab.name === activeTab).content}</p>
      </div>
    </div>
  );
}

export default Dashboard;
