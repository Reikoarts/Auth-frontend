import React from 'react'

function Home() {
    return (
        <div className="min-h-screen w-[100vw] bg-gray-100 flex items-center justify-center">
            <div className="p-12 text-center bg-white shadow-md">
                <h1 className="text-5xl font-bold text-gray-800">
                    Bienvenue sur mon application
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                    Gérez vos utilisateurs facilement et efficacement
                </p>
            </div>
        </div>
    )
}

export default Home