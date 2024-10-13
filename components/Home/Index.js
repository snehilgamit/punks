import React, { useState } from 'react'
import 'animate.css'
import Image from 'next/image'
import "animate.css"
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
                <CodeGame />
                <Tasks />
            </div>
        </div>
    )
}

export default Index


const Tasks = () => {
    const [opened, setOpened] = useState(false);
    return (
        <div className='w-[85%] mt-5 pb-[35%]'>
            <p className='text-xl mb-3'>Tasks</p>
            <Task title={'Follow on X'} reward={20} bottonTxt={'Follow'} />
            <Task title={'Join our Telegram Group'} reward={10} bottonTxt={'Join'} />
            {!opened ? <div className='flex items-center gap-0.5 ml-1 cursor-pointer' onClick={() => setOpened(prev => !prev)}>
                Show more
                <HiOutlineChevronDown className='mt-0.5' size={20} />
            </div> :
                <div className='animate__animated animate__fadeIn'>
                    <Task title={'Subscribe on Telegram Channel'} reward={15} bottonTxt={'Open'} />
                    <Task title={'Subscribe on YouTube'} reward={25} bottonTxt={'Subscribe'} />
                </div>
            }
        </div>
    )
}


const Task = ({ title, reward, bottonTxt }) => {
    const [loading, setLoading] = useState(false)
    const complete = () => {
        setLoading(prev => !prev)
    }
    return (
        <div className='border-black/80 border-2 bg-opacity-70 rounded-3xl p-3.5 w-full z-10 my-2'>
            <div className='flex justify-between items-center'>
                <div className='text-start mx-2'>
                    <div className='font-bold '>{title}</div>
                    <div className='text-[0.65rem]'>{reward} punks</div>
                </div>
                <div className='text-xs p-2.5 bg-black text-white rounded-3xl font-semibold cursor-pointer transition-all duration-200 border-purple-500/70 border w-fit px-5' onClick={complete} >{loading ? bottonTxt + '..' : bottonTxt}</div>
            </div>
        </div>
    )
}


const CodeGame = () => {
    const [code, setCode] = useState(new Array(5).fill(''));
    const [border, setBorder] = useState('rgb(0 0 0 / 0.5) 2px solid')
    const [available, setAvailable] = useState(false)
    const handleCode = (e, index) => {
        const codee = code.join('')
        if (codee.length == 4) {
            setBorder('blue 2px solid')
        } else {
            setBorder('rgb(239 68 68 / 0.5) 2px solid')
        }
        const value = e.target.value;
        if (!isNaN(value) && value.length <= 1) {
            setCode(prev => {
                const newCode = [...prev];
                newCode[index] = value;
                return newCode;
            });
            if (value !== "" && index < 4) {
                document.getElementById(`code${index + 1}`).focus();
            }
        } else {
            if (index < 4 && !isNaN(value)) {
                document.getElementById(`code${index + 1}`).focus();
            }
        }
    };

    const onback = (e, index) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            setCode(prev => {
                const newCode = [...prev];
                newCode[index - 1] = '';
                return newCode;
            });
            document.getElementById(`code${index - 1}`).focus();
        }
    };

    return (
        <div className='w-[85%] mt-5 flex justify-center items-center flex-col'>
            {available ?
                <>
                    <div className='mb-2'>Punks code</div>
                    <div className='flex gap-2 justify-center items-center w-[85%]'>
                        {code.map((digit, index) => (
                            <div key={index} className='rounded-lg overflow-hidden'>
                                <input
                                    onChange={(e) => handleCode(e, index)}
                                    maxLength={1}
                                    className='w-[45px] h-[45px] text-center rounded-lg text-black flex justify-center items-center'
                                    value={digit}
                                    style={{ border: border }}
                                    type="text"
                                    name={`code${index}`}
                                    id={`code${index}`}
                                    onKeyDown={(e) => onback(e, index)}
                                />
                            </div>
                        ))}
                    </div>
                </> : <>
                        <div className='w-full flex justify-center py-3 bg-emerald-700 text-white rounded-xl'>Available in 20h</div>
                </>
            }
            <div className='mt-2 text-xs'>Earn Punks by entering punks code</div>
        </div>
    );
};
