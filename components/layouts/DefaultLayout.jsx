import React from 'react'
import DefaultFooter from './DefaultFooter'
import DefaultHeader from './DefaultHeader'

const DefaultLayout = ({ children, className }) => {
    return (
        <>
            <DefaultHeader />
            <div className={`min-h-[calc(100vh-130px)] ${className}`}>
                {children}
            </div>
            <DefaultFooter />
        </>
    )
}

export default DefaultLayout