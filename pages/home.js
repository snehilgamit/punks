import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import ReferredBy from '@/components/ReferredBy'
import Menubar from '@/components/Menubar'
import Image from 'next/image'
import { HiGift } from "react-icons/hi";
import Airdrop from '@/components/Home/Airdrop'
import Index from '@/components/Home/Index'
import LeaderBoard from '@/components/Home/More'
import Refer from '@/components/Home/Refer'
import "animate.css"
const home = () => {
    const router = useRouter()
    const [isLogined, setIsLogined] = useState(false)
    const fetching = useRef(false)
    const [user, setUser] = useState({})
    const [showOnboarding, setShowOnboarding] = useState(false);
    const [currentTab, setCurrentTab] = useState({ current: 0, previous: 0 })
    
    const components = [<Index />, <Refer />, <LeaderBoard />, <Airdrop />]
    const changeTab = (number) => {
        if (currentTab.current !== number) {
            setCurrentTab(prev => {
                return {
                    previous: prev,
                    current: number
                }
            })
        }
    }

    const fetchUser = async (initData) => {
        const userData = await axios.post('/api/user', { data: initData })
        const { ok, message, user } = userData.data
        if (ok) {
            setUser(user)
            if (user.referralOnboarding) {
                setTimeout(() => {
                    setShowOnboarding(true)
                }, 1400)
            }
            setIsLogined(true)
        }
    }

    

    const checkSession = async () => {
        fetching.current = true
        const WebApp = (await import('@twa-dev/sdk')).default
        WebApp.ready()
        const initData = WebApp.initData
        const { data } = await axios.post('/api/auth/session', { data: initData })
        const { ok, message, referralCode } = data
        if (!ok) {
            router.push('/signup')
        } else {
            fetchUser(initData)
        }
    }
    
    const close_function = () => {
        setShowOnboarding(false)
    }
    useEffect(() => {
        if (!fetching.current) {
            checkSession()
        }
    }, [])
    return (
        <>{isLogined ?
            <div className='flex flex-col h-screen Arcade uppercase text-black selection:bg-none animate__animated animate__fadeIn overflow-hidden'>
                {components[currentTab.current]}
                {showOnboarding ? <ReferredBy first_name={user?.referredBy?.first_name} last_name={user?.referredBy?.last_name} username={user?.referredBy?.username} close={close_function} /> : ''}
                <Menubar changeTab={changeTab} />
            </div>
            :
            <div className='flex justify-center items-center min-h-screen flex-col w-full bg-[#f8ff00] Arcade relative overflow-hidden'>
                <h1 className='uppercase text-5xl mb-5'>Punks</h1>
                <p className=' uppercase pb-24 ml-1'>Loading...</p>
            </div>
        }
        </>
    )
}

export default home
