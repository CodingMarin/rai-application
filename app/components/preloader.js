'use client'

import { useEffect, useState, React } from 'react'

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])
    return (
        loading && (
            <div className='preloader text-center'>
                <div className='circle'></div>
            </div>
        )
    )
}

export default Preloader