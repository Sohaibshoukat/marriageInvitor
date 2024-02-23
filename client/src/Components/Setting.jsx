import React, { useState } from 'react'

const Setting = ({ data }) => {

    const [Password, setPassword] = useState('')
    const [ConfirmPassword, setconfirmPassword] = useState('')

    const UpdatePassword = async () => {
        try {
            const response = await fetch('https://autowebtest.tiklive.club/AutoWeb/AutoWebUserChangePassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'LoginTypeID': '2',
                    'TokenID': localStorage.getItem('token'),
                    'OLDPassword': Password,
                    'NewPassword': ConfirmPassword,
                    'UserId': localStorage.getItem('userid')
                }),
            });

            if (response.ok) {
                const data = await response.json();
            } else {
                // If the response is not successful, you can handle it here
                console.error('API error:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error during API call:', error);
        }
    }
    return (
        <>
            <div>
                <h2 className='text-black font-semibold text-2xl mb-3'>Profile Settings</h2>
                <div className='bg-white shadow-xl rounded-2xl py-4 px-4'>
                    <div className='flex flex-col gap-2 mb-4'>
                        <label htmlFor="" className='font-normal text-black text-xl'>Name</label>
                        <input
                            type="text"
                            className='border-2 text-xl text-black shadow-xl placeholder:text-gray-400 py-2 px-4 rounded-lg border-gray-300'
                            value={data?.DisplayName}
                            placeholder='Your Name'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='font-normal text-black text-xl'>Email</label>
                        <input
                            type="text"
                            value={data?.UserName}
                            className='border-2 text-xl text-black shadow-xl placeholder:text-gray-400 py-2 px-4 rounded-lg border-gray-300'
                            placeholder='Enter Your Email'
                        />
                    </div>
                    <div
                        className="w-fit mt-6 bg-amber-700 hover:bg-amber-600 ease-in-out duration-300 cursor-pointer text-xl text-white px-4 py-4 md:px-8 md:py-3 rounded-3xl"
                    >
                        Save
                    </div>
                </div>

            </div>
            <div className='bg-white shadow-xl rounded-2xl py-4 px-4 mt-8'>
                <h2 className='text-black font-semibold text-2xl mb-3'>Change Password</h2>
                <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-6 lg:gap-10'>
                    <div className='flex flex-col gap-2 w-[100%] mb-6'>
                        <label htmlFor="" className='font-normal text-black text-xl'>New Password</label>
                        <input
                            type="text"
                            className='border-2 text-xl text-black shadow-xl placeholder:text-gray-400 py-2 px-4 rounded-lg border-gray-300'
                            value={Password}
                            onChange={(e)=>{
                                setPassword(e.target.value)
                            }}
                            placeholder='New Password'
                        />
                    </div>
                    <div className='flex flex-col gap-2 w-[100%]'>
                        <label htmlFor="" className='font-normal text-black text-xl'>Confirm Password</label>
                        <input
                            type="text"
                            className='border-2 text-xl text-black shadow-xl placeholder:text-gray-400 py-2 px-4 rounded-lg border-gray-300'
                            value={ConfirmPassword}
                            onChange={(e)=>{
                                setconfirmPassword(e.target.value)
                            }}
                            placeholder='Confirm Password'
                        />
                    </div>
                </div>
                <div
                    className="w-fit mt-6 bg-amber-700 hover:bg-amber-600 ease-in-out duration-300 cursor-pointer text-xl text-white px-4 py-4 md:px-8 md:py-3 rounded-3xl"
                    onClick={UpdatePassword}
                >
                    Update
                </div>
            </div>
        </>
    )
}

export default Setting