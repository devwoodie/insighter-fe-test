import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center max-w-[1280px] min-w-[1280px] my-4" >
            <h1 className='z-[1] text-black text-[25px] relative cursor-pointer' onClick={() => navigate("/")}>
                EVENT LIST
                <span className='absolute left-[50%] top-[52%] translate-x-[-50%] translate-y-[-50%] z-[-1] bg-primary w-[120%] h-2 '></span>
            </h1>
            <span className='text-[#575757] text-[16px]'>by 유동우</span>
        </div>
    )
}
