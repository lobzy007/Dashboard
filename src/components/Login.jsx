import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                                    <input onChange={(e) => setName(e.target.value)} type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johndoe" required="" />
                                </div>
                                <div>
                                    <label className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input onChange={(e) => setPass(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <Link to={'/dashboard'} type="submit" className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign in</Link>
                            </form>
                        </div>
                    </div>
                    <Link to={'/'} className='p-5 dark:text-white text-xl underline text-pretty'>Go Back</Link>
                </div>
            </section>
        </>
    )
}
