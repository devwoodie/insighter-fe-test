import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CustomBackBtn = () => {

    const navigate = useNavigate();

    return (
        <div className='absolute right-[-19rem] top-0'>
            <button onClick={() => navigate("/", {state: {"maintain" : true}})} className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
                <span className='text-[16px] ml-1'>뒤로가기</span>
            </button>
        </div>
    )
}
