import React from 'react'

type WrapperProps = {
	children: React.ReactNode;
    title: string;
}

export const DetailCont = ({ children, title }: WrapperProps) => {
    return (
        <div className='flex justify-start items-center p-5 border-b-[1px] border-solid border-[#d4d4d4] last:border-none'>
            <h3 className='text-[18px] w-[100px]'>{title}</h3>
            {children}
        </div>
    )
}
