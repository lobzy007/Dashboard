import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";


const fetchData = () => {
  return axios.get("https://65e83bc64bb72f0a9c4eac3a.mockapi.io/fakeAPI");
};

const Home = () => {
  const { isLoading, data, isError, isFetching } = useQuery("data", fetchData);

  if (isLoading || isFetching) {
    return <h1>Loading...</h1>;
  }

  return (
    <>

      <nav className="w-100 flex justify-between border-b-2 p-3">
        <a href="" className="text-xl">Cards</a>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to={"/login"}>Login</Link>
      </nav>

      <div className="grid grid-cols-4 justify-center gap-5 items-center p-10">
        {data.data.map((d, i) => {
          return <div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to={`/card/${i + 1}`}>
                <img className="rounded-t-lg w-full" src={d.img} alt="" />
              </Link>
              <div className="p-5">
                <Link to={`/card/${i + 1}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{d.name}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  In the mask of time, John Doe hides his trace,
                  Deep mysteries in his heart, unknown threads of light blaze.</p>
                <Link to={`/card/${i + 1}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

        })}
      </div >
    </>
  );
};

export default Home;
