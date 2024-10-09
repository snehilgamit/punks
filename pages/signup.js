import React, { useEffect, useState } from 'react'
import "animate.css"
import axios from 'axios'
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast'
const Signup = () => {
    const router = useRouter()
    const btnTxt = ['Start', 'Next', 'Next', 'Enter']
    const [message, setMessage] = useState('')
    const about = [
        {
            "section": "Joining the Community",
            "description": "To get started, users must join the Punks community via the Telegram mini-app.",
            "purpose": "This app serves as an interactive hub where participants can connect, collaborate, and stay updated on the latest tasks and rewards."
        },
        {
            "section": "Task Completion",
            "description": "The platform offers various tasks that users can complete.",
            "examples": [
                "Engaging with content",
                "Participating in events",
                "Sharing on social media",
                "Promoting the Punks community"
            ],
            "goal": "Incentivize participation and grow the community organically."
        },
        {
            "section": "Earning $PUNKS",
            "description": "Once tasks are completed, users receive rewards in the form of $PUNKS tokens.",
            "useCases": [
                "Store tokens in a compatible wallet",
                "Trade tokens on decentralized exchanges"
            ]
        },
        {
            "section": "Gamified Experience",
            "description": "The platform gamifies the experience, offering leaderboards and bonus rewards for top contributors.",
            "features": [
                "Track progress",
                "Monitor achievements",
                "View rewards"
            ],
            "access": "Available directly within the Telegram app."
        },
        {
            "section": "Community Governance",
            "description": "Holders of $PUNKS tokens may have governance rights.",
            "purpose": "Allow token holders to vote on future updates, changes, and initiatives within the Punks ecosystem."
        }
    ]

    const [slide, setSlide] = useState(0);
    const slideChanger = () => {
        slide < 3 ? setSlide(prev => prev + 1) : signUp()
    }

    const signUp = async () => {
        const WebApp = (await import('@twa-dev/sdk')).default
        WebApp.ready()
        const initData = WebApp.initData
        const { data } = await axios.post('/api/auth/signup', { data: initData })
        const { ok, message } = data
        if (ok) {
            toast('Done!',
                {
                    duration: 1000,
                    icon: '👏',
                    style: {
                        paddingRight: '10px',
                        paddingLeft: '10px',
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
            router.push('/home')
        } else {
            toast.error(message,
                {
                    duration: 1000,
                    style: {
                        paddingRight: '10px',
                        paddingLeft: '10px',
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
            if (message === 'Account exist') {
                    router.push('/home')
            }
        }
    }
    const changeBg = async () => {
        const WebApp = (await import('@twa-dev/sdk')).default
        WebApp.backgroundColor = '#f8ff00'
    }
    useEffect(() => {
        if (window) {
            changeBg()
        }
    }, [])
    return (
        <>
            <Toaster />
            <div className='flex justify-center items-center max-h-screen w-full bg-[#f8ff00] Arcade relative overflow-hidden selection:bg-none'>
                <div className='w-full h-full overflow-hidden'>
                    <div className='h-full flex transition-all duration-500' style={{ transform: `translateX(-${slide * 100}%)` }}>
                        <div className='flex justify-center items-center flex-col animate__animated animate__fadeIn min-w-[100%] mb-28'>
                            <h1 className='uppercase text-5xl '>Punks</h1>
                        </div>
                        <div className='min-h-[90vh] flex flex-col animate__animated animate__fadeIn min-w-[100%]'>

                            <h1 className='uppercase px-5 text-lg pt-10 font-semibold flex gap-0.5'>
                                <div className='flex flex-nowrap w-[30px] h-[30px] leading-none flex-shrink-0 mt-1'>{'->'}</div>
                                Punks are a popular cryptocurrency community centered around the concept of decentralized rewards and earning tokens for completing tasks.
                            </h1>
                        </div>
                        <div className='flex min-h-screen pt-6 flex-col animate__animated animate__fadeIn min-w-[100%] p-6 gap-4 pb-10'>
                            {about.map((el, index) => (
                                <div className='flex gap-1 rounded-lg p-1' key={index}>
                                    <div className='flex flex-nowrap w-[24px] h-[24px] leading-none flex-shrink-0 mt-1'>{'->'}</div>
                                    <div>
                                        <h1 className='font-semibold uppercase'>{el.section}</h1>
                                        <h1 className='font-normal text-[0.65rem] uppercase'>{el.description}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center items-center flex-col animate__animated animate__fadeIn min-w-[100%]'>
                            <h1 className='uppercase text-2xl mb-24'>Enter the punks{message}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-14 right-1/2 translate-x-1/2 Arcade'>
                <div className='px-10 pb-3 py-2.5 text-xl bg-black rounded-xl text-white cursor-pointer' onClick={slideChanger}>
                    {btnTxt[slide]}
                </div>
            </div>
        </>
    )
}

export default Signup;
