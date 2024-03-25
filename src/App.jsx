import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import "./App.css";


const fetchData = () => {
  return axios.get("https://65e83bc64bb72f0a9c4eac3a.mockapi.io/fakeAPI");
};


function App() {

  const { isLoading, data, isError, isFetching } = useQuery("data", fetchData);

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        {data.data.map((d, i) => {
          return <Route path={`/card/${i + 1}`} element={
            <>
              <div className="w-full lg:w-4/12 px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                  <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full px-4 flex justify-center">
                        <div className="">
                          <img alt="..." src={d.img} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                        </div>
                      </div>
                      <div className="w-full px-4 text-center mt-20">
                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                          <div className="mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                              22
                            </span>
                            <span className="text-sm text-blueGray-400">Friends</span>
                          </div>
                          <div className="mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                              10
                            </span>
                            <span className="text-sm text-blueGray-400">Photos</span>
                          </div>
                          <div className="lg:mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                              89
                            </span>
                            <span className="text-sm text-blueGray-400">Comments</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-12">
                      <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        {d.name}
                      </h3>
                      <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                        Los Angeles, California
                      </div>
                      <div className="mb-2 text-blueGray-600 mt-10">
                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                        Solution Manager - Creative Tim Officer
                      </div>
                      <div className="mb-2 text-blueGray-600">
                        <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                        University of Computer Science
                      </div>
                    </div>
                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-9/12 px-4">
                          <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                            An artist of considerable range, {`${d.name.split(" ")[0]}`} the name taken
                            by Melbourne-raised, Brooklyn-based Nick Murphy
                            writes, performs and records all of his own music,
                            giving it a warm, intimate feel with a solid groove
                            structure. An artist of considerable range.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          } />
        })}
      </Routes>
    </>
  );
}

export default App;
