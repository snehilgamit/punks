import React from 'react'
import CopyText from '@/helper/CopyText';
import 'animate.css'
const Refer = () => {
    const referrals = [{ name: 'snehil', reward: 20 }, { name: 'snehi2l', reward: 204 }, { name: 'sne2hil', reward: 204 }];
    const username = 'snehil'

    const share = () => {
        const content = `http://t.me/punksceo_bot/join?startapp=${username}`
        if (navigator.share && navigator.canShare(content)) {
            navigator.share(content)
        }
    }
    return (
        <div className='flex justify-center items-start '>
            <div className='p-4 animate__animated animate__fadeIn text-black w-[90%]'>
                <div className='text-xl font-semibold'>{referrals ? referrals.length : 0} Friend</div>
                <div className='text-start text-black/80 mb-3 mt-2 Barlow'>Every time your friend claims PUNKS. you get 20% of there Punks. And 5% every time his referrals claim punk.</div>
                <div className='text-xl mt-2 font-semibold Barlow'>😱 Earn Upto <span className='text-emerald-700 text-2xl'>∞</span></div>
                <div className=' bg-emerald-700 rounded-xl p-4  my-2 text-end Barlow' onClick={share}>
                    <div className='flex justify-between items-center text-white'>
                        <div className='text-lg font-semibold text-center -mt-[4px]'>Click to invite</div>
                        <div className='bg-[#000] px-4 py-2 text-sm text-center font-semibold  text-white rounded-full' onClick={() => CopyText(username ? 'https://step3.net/sign-up?referralcode=' + username : 'Copy again', 'Invite link')}>
                            share
                        </div>
                    </div>
                </div>
                {referrals.length !== 0 && <table className='w-full mt-2 text-lg Barlow'>
                    <div className='py-0.5 flex justify-between rounded-xl'>
                        <td className='text-start w-[130px] px-3.5'>Friend's</td>
                        <td className='text-end px-3.5'>$Punks</td>
                    </div>
                    <tbody className='w-full text-emerald-700 flex flex-col gap-1'>
                        {referrals.map((el, index) => (
                            <tr key={index} className='border border-black py-0.5 flex justify-between rounded-xl'>
                                <td className='text-start w-[130px] px-4'>{el.name}</td>
                                <td className='text-end px-4'>{el.reward}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
            </div>
        </div>
    )
}

export default Refer
