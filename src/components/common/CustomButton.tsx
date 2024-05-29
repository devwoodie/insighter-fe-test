import React from 'react';

type TProps = {
    title: string;
    onClick: () => void;
    bgColor: string;
    ml?: string;
}

export const CustomButton = ({
    title,
    onClick,
    bgColor,
    ml
}: TProps) => {
    return (
        <button onClick={onClick} style={{backgroundColor: bgColor, marginLeft: ml? `${ml}px` : "0"}} className='px-5 py-1.5 text-[14px] rounded-lg ml-2 text-[#4f4f4f]'>
            {title}
        </button>
    )
}
