import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div className='container mx-auto flex justify-between items-center py-4'>
                <Link to='/' className='text-2xl font-bold'>Home</Link>
                <ul className='flex space-x-4'>
                    <li>
                        <Link to='/' className='text-blue-500'>Home</Link>
                    </li>
                    <li>
                        <Link to='/register' className='text-blue-500'>Inscription</Link>
                    </li>
                    <li>
                        <Link to='/login' className='text-blue-500'>Connexion</Link>
                    </li>
                    <li>
                        <Link to='/profile' className='text-blue-500'>Profil</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar