import React from 'react'

type TProps = {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
    placeholder: string;
    textarea?: boolean;
    disabled: boolean;
}

export const CustomInput = ({
    state,
    setState,
    placeholder,
    textarea,
    disabled
}: TProps) => {
    return !textarea ? (
        <input
            type='text'
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className='disabled:bg-[#cecece] w-[350px] py-1.5 px-5 rounded-lg bg-[#eeeeee] border-[1px] border-solid border-[#575757] placeholder:text-[16px] placeholder:text-[#b4b4b4] text-[18px] outline-none'
        />
    ) : (
        <textarea
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className='disabled:bg-[#cecece] scrollbar-custom h-[100px] resize-none w-[350px] py-1.5 px-5 rounded-lg bg-[#eeeeee] border-[1px] border-solid border-[#575757] placeholder:text-[16px] placeholder:text-[#b4b4b4] text-[18px] outline-none'
        ></textarea>
    )
}
