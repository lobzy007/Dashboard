import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchData = () => {
  return axios.get("https://65e83bc64bb72f0a9c4eac3a.mockapi.io/fakeAPI");
};

const Home = () => {
  const { isLoading, data, isError, isFetching } = useQuery("data", fetchData);

  if (isLoading || isFetching) {
    return <h1>Loading...</h1>;
  }

  console.log(data.data[1].name);

  return (
    <div className="flex flex-wrap justify-center gap-5 items-center">
      {data.data.map((d) => (
        <div className="card">
          <img src={d.img} alt="image" />
          <h1>{d.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Home;
