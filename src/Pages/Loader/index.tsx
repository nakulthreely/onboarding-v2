import React, { useEffect } from 'react'
import Loader from '../../Components/Loader'
import { useNavigate } from 'react-router-dom';


export default function LoaderPage() {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/welcome')
        }, 2000)
    }, [])

    return (
        <div>
            <div className='mt-80'><Loader /></div>
        </div>
    )
}
