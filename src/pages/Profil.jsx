import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
axios.defaults.withCredentials = true;


function Profil() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        //JWT//

        // const token = localStorage.getItem('token')

        // if (!token) {
        //     navigate('/login')
        //     return
        // }


        //SESSION//
        const fetchUser = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/users/me')
                setUser(res.data)
            } catch (error) {
                console.log(error)
                navigate('/login')
            }
        }

        fetchUser()
    }, [navigate])

    const handleLogout = async () => {
        // localStorage.removeItem('token')
        const res = await axios.delete('http://localhost:3000/api/auth/logout')
        navigate('/login')
    }

    if (!user) {
        return <div className="w-[100vw] flex items-center justify-center min-h-screen">Chargement...</div>
    }

    return (
        <div className="flex w-[100vw] items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-700">Profil de l'utilisateur</h2>

                <div className="space-y-4">

                    <div>
                        <span className="block text-sm font-medium text-gray-700">Email</span>
                        <p className="p-2 mt-1 text-gray-900 border border-gray-300 rounded-md bg-gray-50">{user.email}</p>
                    </div>

                    <div>
                        <span className="block text-sm font-medium text-gray-700">Rôle</span>
                        <p className="p-2 mt-1 text-gray-900 border border-gray-300 rounded-md bg-gray-50">{user.role}</p>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="w-full py-2 mt-6 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                    Se déconnecter
                </button>
            </div>
        </div>
    )
}

export default Profil
