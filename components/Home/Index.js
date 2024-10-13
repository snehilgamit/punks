import React, { useState } from 'react'
import 'animate.css'
import Image from 'next/image'
import { HiOutlineChevronDown } from 'react-icons/hi2'
const Index = () => {
    const [data, setData] = useState({ punks: 3009 })

    return (
        <div className='border-black w-full min-h-screen overflow-x-hidden flex justify-center Barlow tracking-wide'>
            <div className='w-full flex items-center flex-col'>
                <div className='py-2 w-[83%] text-3xl mt-2'>Home</div>
                <div className='flex justify-between items-center gap-2 py-5 border-2 border-black w-[85%] h-fit rounded-xl px-4'>
                    <div>Your $punks</div>
                    <div className='flex gap-0.5'>
                        <div className='text-3xl font-semibold'>
                            {data.punks}
                        </div>
                    </div>
                </div>
                <Tasks />
            </div>
        </div>
    )
}

export default Index


const Tasks = () => {
    const [opened, setOpened] = useState(false);
    return (
        <div className='w-[85%] mt-5'>
            <p className='text-xl mb-3'>Tasks</p>
            <Task title={'Follow on X'} reward={20} bottonTxt={'open'} />
            <Task title={'Follow on X'} reward={20} bottonTxt={'open'} />
            {!opened ? <div className='flex items-center gap-0.5 ml-1 cursor-pointer' onClick={() => setOpened(prev => !prev)}>
                Show more
                <HiOutlineChevronDown className='mt-0.5' size={20} />
            </div> :
                <>
                    <Task title={'Follow on X'} reward={20} bottonTxt={'open'} />
                    <Task title={'Follow on X'} reward={20} bottonTxt={'open'} />
                </>
            }
        </div>
    )
}


const Task = ({ title, reward, bottonTxt }) => (
    <div className='w-full border-2 border-black rounded-lg p-3.5 py-2.5 flex justify-between my-2'>
        <div>
            <div className='text-lg'>{title}</div>
            <div className='text-[0.82rem] text-black/50 leading-[0.6rem]'>{reward} PUNKS</div>
        </div>
        <div className='flex justify-center items-center'>
            <div className='px-2.5 py-1.5 bg-green-500/30 rounded-xl cursor-pointer text-xs'>
                {bottonTxt}
            </div>
        </div>
    </div>
)