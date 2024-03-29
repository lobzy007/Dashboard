import { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import { useQuery } from "react-query";

const fetchData = () => {
    return axios.get("https://65e83bc64bb72f0a9c4eac3a.mockapi.io/fakeAPI");
};

export const Dashboard = () => {

    const { isLoading, data, isError, isFetching } = useQuery("data", fetchData);
    const [activeItem, setActiveItem] = useState(0)
    const [isHidden, setHidden] = useState(true)

    const [addName, setAddName] = useState('')
    const [addImage, setAddImage] = useState('')

    if (isLoading || isFetching) {
        return <h1>Loading...</h1>;
    }
    return (
        <>
            <div className="flex w-screen text-gray-700">

                <div className="flex h-screen sticky top-0 flex-col items-center w-16 pb-4 overflow-auto border-r border-gray-300">
                    <Link to={'/'} className="flex items-center justify-center flex-shrink-0 w-full h-16 bg-gray-300">
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </Link>
                    <Link to={'/'} className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </Link>
                    <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </a>
                    <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                    </a>
                    <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </a>
                    <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </a>
                    <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 mt-auto rounded hover:bg-gray-300" href="#">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>

                <div className="flex flex-col w-56 border-r border-gray-300 h-screen sticky top-0">
                    <button className="relative text-sm focus:outline-none group">
                        <div className="flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 ">
                            <span className="font-medium">
                                Cards list
                            </span>
                        </div>
                    </button>
                    <div className="flex flex-col flex-grow p-4 overflow-auto">
                        {data.data.map((d, i) => {
                            return <button onClick={() => { setActiveItem(`${i}`) }} className="flex items-center border-b-2 flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300 truncate">
                                <span className="leading-none">{`${i + 1}: ${d.name}`}</span>
                            </button>
                        })}
                    </div>

                </div >

                <div className="flex flex-col flex-grow">
                    <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300 justify-between">
                        <h1 className="text-lg font-medium">Card Info</h1>
                        <button className="flex items-center flex-shrink-0 h-10 px-3 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
                            href="#" onClick={() => { setHidden(false) }}>
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <button className="ml-2 leading-none">New Item</button>
                        </button>
                    </div>
                    <div className='p-5 flex flex-col items-center justify-center gap-3'>
                        <h1 className='text-2xl mb-2'>{data.data[activeItem].name}</h1>
                        <img className='w-1/4' src={data.data[activeItem].img} alt="" />
                        <div className='w-full px-10 flex items-center gap-5'>
                            <label htmlFor="img">Img:</label>
                            <input id='img' className='bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" value={data.data[activeItem].img} disabled />
                        </div>
                        <div className='w-full px-10 flex items-center gap-5'>
                            <label htmlFor="name">Name:</label>
                            <input id='name' className='bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" value={data.data[activeItem].name} disabled />
                        </div>
                    </div>
                </div>

            </div >

            <div className={`modal absolute ${isHidden ? 'hidden' : ''} left-0 right-0 bottom-0 top-0`}>
                <div className="container h-full flex flex-col items-center justify-center bg-white gap-4">
                    <div className='flex gap-4 items-center justify-center'>
                        <label htmlFor="addName">Name:</label>
                        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id='addName' type="text" placeholder='Name' onChange={(e) => { setAddName(e.target.value) }} />
                    </div>
                    <div className='flex gap-4 items-center justify-center'>
                        <label htmlFor="addImg">Img:</label>
                        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id='addImg' type="text" placeholder='Url' onChange={(e) => { setAddImage(e.target.value) }} />
                    </div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => {
                        axios.post('https://65e83bc64bb72f0a9c4eac3a.mockapi.io/fakeAPI', { address: "", id: `${data.data.length + 1}`, img: addImage, name: addName }).then((res) => { console.log(res) }).then(setHidden(true))
                    }}>Add</button>
                    <button onClick={() => { setHidden(true) }} className=" underline text-2xl text-black">
                        Go back
                    </button>
                </div>
            </div>
        </>
    )
}
