import React from 'react';

type TProps = {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalPages: number;
}

export const Pagenation = ({
    currentPage,
    setCurrentPage,
    totalPages
}: TProps) => {
    return (
        <div className="flex items-center justify-center absolute bottom-6 left-[50%] translate-x-[-50%]">
            <button
                className='px-2 mx-2 disabled:opacity-[0.2]'
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`${currentPage === index + 1 ? 'text-black' : 'text-[#959595]'} px-1 mx-1`}
                >
                    [{index + 1}]
                </button>
            ))}
            <button
                className='px-2 mx-2 disabled:opacity-[0.2]'
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    )
}
