import React, { useState } from 'react';

type TProps = {
    selectedTime: string;
    setSelectedTime: React.Dispatch<React.SetStateAction<string>>;
    disabled: boolean;
    placeholder: string;
}

export const TimePickerCont = ({
    selectedTime,
    setSelectedTime,
    disabled,
    placeholder
}: TProps) => {

    return (
        <div className='relative'>
            <input 
                type='time'
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                disabled={disabled}
                placeholder={placeholder}
                className='disabled:bg-[#cecece] w-[180px] py-1.5 px-5 rounded-lg bg-[#eeeeee] border-[1px] border-solid border-[#575757] placeholder:text-[16px] placeholder:text-[#b4b4b4] text-[16px] outline-none'
            />
        </div>
    )
}
