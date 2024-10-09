import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import "animate.css"
const index = () => {
  const router = useRouter()

  const checkSession = async () => {
    const WebApp = (await import('@twa-dev/sdk')).default
    WebApp.ready()
    const initData = WebApp.initData
    const { data } = await axios.post('/api/auth/session', { data: initData })
    const { ok, message } = data
    if (ok) {
      router.push('/home')
    } else {
      router.push('/signup')
    }
  }
  useEffect(() => {
    checkSession()
  }, [])
  return (
    <div className='flex justify-center items-center min-h-screen flex-col w-full bg-[#f8ff00] Arcade relative overflow-hidden animate__animated animate__fadeIn'>
      <h1 className='uppercase text-5xl mb-5'>Punks</h1>
      <p className=' uppercase pb-24 ml-1'>Loading...</p>
    </div>
  )
}

export default index
