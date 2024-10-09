import React from 'react'
import Image from 'next/image'
import { LuUser } from "react-icons/lu";
import { HiOutlineTrophy } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi2";

const Menubar = ({ changeTab }) => {
    return (
        <div className='w-full absolute bottom-0 uppercase pb-5 px-8 text-[0.6rem] bg-[#f8ff00]'>
            <div className='flex justify-around items-center gap-2 overflow-hidden font-bold border-2 border-black rounded-3xl px-4'>
                <div className='w-[30%] flex items-center flex-col py-5 px-3 active:scale-110 transition-all duration-100 ease-in-out' onClick={() => changeTab(0)} >
                    <div className='w-full h-[30px] flex justify-center items-center mb-0.5'>
                        <HiOutlineHome size={'30px'} />
                    </div>
                    Home
                </div>
                <div data-value={1} className='w-[30%] flex items-center flex-col py-5 px-3 active:scale-110 transition-all duration-100 ease-in-out' onClick={() => changeTab(1)}>
                    <div className='w-full h-[30px] flex justify-center items-center mb-0.5'>
                        <LuUser size={'30px'} />
                    </div>
                    Refer
                </div>
                <div data-value={2} className='w-[34%] flex items-center flex-col py-5 px-3 active:scale-110 transition-all duration-100 ease-in-out' onClick={() => changeTab(2)}>
                    <div className='w-full h-[30px] flex justify-center items-center mb-0.5'>
                        <HiOutlineTrophy size={'30px'} />
                    </div>
                    Leaderboard
                </div>
            </div>
        </div>
    )
}

export default Menubar





{/* <div className='w-full absolute bottom-0  uppercase mb-10 px-6 text-[0.6rem]'>
            <div className='flex justify-around items-center gap-2 overflow-hidden font-bold border-2 border-black/50 rounded-3xl px-4'>
                <div className='w-[30%] flex items-center flex-col py-4 px-3 active:scale-110 transition-all duration-100'>
                    <div className='w-full h-[30px] flex justify-center items-center mb-0.5'>
                        <GoHomeFill size={'30px'} />
                    </div>
                    Home
                </div>
                <div className='w-[30%] flex items-center flex-col py-4 px-3 active:scale-110 transition-all duration-100'>
                    <div className='w-full h-[30px] flex justify-center items-center mb-0.5'>
                        <LuUser style={{ fill: "black" }} size={'30px'} />
                    </div>
                    Refer
                </div>
                <div className='w-[34%] flex items-center flex-col py-4 px-3 active:scale-110 transition-all duration-100'>
                    <div className='w-full h-[30px] flex justify-center items-center mb-0.5'>
                        <IoIosTrophy size={'30px'} />
                    </div>
                    Leaderboard
                </div>
            </div>
        </div> */}

// <div className='w-full absolute bottom-0 uppercase pb-4 text-[0.6rem]'>
//     <div className='flex justify-around items-center gap-2 overflow-hidden font-bold border-black w-full border-t-4 px-7'>
//         <div className='w-[30%] flex items-center flex-col py-4 px-3 active:scale-110 transition-all duration-100'>
//             <div className='w-full h-[30px] flex justify-center items-center mb-0.5'>
//                 <GoHomeFill size={'30px'} />
//             </div>
//             Home
//         </div>
//         <div className='w-[30%] flex items-center flex-col py-4 px-3 active:scale-110 transition-all duration-100'>
//             <div className='w-full h-[30px] flex justify-center items-center mb-0.5'>
//                 <LuUser style={{ fill: "black" }} size={'30px'} />
//             </div>
//             Refer
//         </div>
//         <div className='w-[34%] flex items-center flex-col py-4 px-3 active:scale-110 transition-all duration-100'>
//             <div className='w-full h-[30px] flex justify-center items-center mb-0.5'>
//                 <IoIosTrophy size={'30px'} />
//             </div>
//             Leaderboard
//         </div>
//     </div>
// </div>