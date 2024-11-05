import React, { useState } from 'react'
import axios from 'axios'

function Register() {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3000/api/auth/register', form)
            alert('Inscription réussie')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex items-center w-[100vw] justify-center min-h-screen bg-gray-100">
            <div className="p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-700">Inscription</h2>
                <form onSubmit={handleSubmit} className="space-y-4 w-[500px]">
                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                            Nom d'utilisateur
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 mt-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        S'inscrire
                    </button>
                </form>
            </div>
        </div>
    )

}

export default Register
