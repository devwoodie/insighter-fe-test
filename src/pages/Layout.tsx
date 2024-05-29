import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Layout/Header'

export const Layout = () => {
    return (
        <div className="flex flex-wrap justify-center">
            <Header />
            <div className="max-w-[1280px] min-w-[1280px] flex-1">
                <Outlet />
            </div>
        </div>
    )
}
