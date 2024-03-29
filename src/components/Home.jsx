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
    <div className="px-5 py-1">

      <nav className="w-100 flex justify-between items-center border-b-2 p-3">
        <a href="" className="text-xl">Cards</a>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to={"/login"}>Login</Link>
      </nav>

      <div className="grid grid-cols-4 justify-center gap-5 items-center p-10 lg:">
        {data.data.map((d, i) => {
          return <div
            className="block border rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
            <Link to={`/card/${i + 1}`}>
              <img
                className="rounded-t-lg w-full max-h-52 object-cover"
                src={d.img}
                alt="" />
            </Link>
            <div className="p-6 text-surface dark:text-white">
              <Link to={`/card/${i + 1}`} className="mb-2 text-xl font-medium leading-tight">{d.name}</Link>
              <p className="mb-4 text-base">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <Link to={`/card/${i + 1}`}
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light">
                Button
              </Link>
            </div>
          </div>

        })}
      </div >

    </div>
  );
};

export default Home;
