import React from 'react';

type TProps = {
    value: string;
    setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const SearchInput = ({
    value,
    setSearchKeyword,
    setCurrentPage
}: TProps) => {

    return (
        <div className='absolute top-[-4.2rem] left-[50%] translate-x-[-50%]'>
            <div className='absolute left-2 top-[50%] translate-y-[-50%]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#575757" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <input
                type="text"
                placeholder="이벤트명을 입력해주세요."
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchKeyword(e.target.value)
                    setCurrentPage(1)
                }}
                className='w-[350px] py-1.5 px-10 rounded-lg bg-[#eeeeee] border-[1px] border-solid border-[#575757] placeholder:text-[16px] placeholder:text-[#b4b4b4] text-[18px] outline-none'
            />
            {value !== "" &&
                <button 
                    className='absolute right-2 top-[50%] translate-y-[-50%]'
                    onClick={() => setSearchKeyword("")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#575757" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            }
        </div>
    )
}
