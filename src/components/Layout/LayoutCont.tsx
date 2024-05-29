import React from 'react'

type WrapperProps = {
	children: React.ReactNode;
}

export const LayoutCont = ({ children }: WrapperProps) => {
    return (
        <div className='p-6 my-5 h-[600px] relative' style={{
            borderRadius: "30px",
            background: "#e0e0e0",
            boxShadow: "15px 15px 60px #bebebe, -20px -20px 60px #ffffff"
        }}>
            {children}
        </div>
    )
}
