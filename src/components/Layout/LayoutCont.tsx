import React from 'react'

type WrapperProps = {
	children: React.ReactNode;
    width: string;
}

export const LayoutCont = ({ children, width }: WrapperProps) => {
    return (
        <div className='p-6 my-5 h-[600px] relative mx-auto' style={{
            borderRadius: "30px",
            background: "#e0e0e0",
            boxShadow: "15px 15px 60px #bebebe, -20px -20px 60px #ffffff",
            width: width
        }}>
            {children}
        </div>
    )
}
