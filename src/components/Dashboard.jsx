import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const fetchData = () => {
  return axios.get("https://65e83bc64bb72f0a9c4eac3a.mockapi.io/fakeAPI");
};

export const Dashboard = () => {
  const { isLoading, data, isError, isFetching, refetch } = useQuery(
    "data",
    fetchData,
    { enabled: false }
  );
  const [activeItem, setActiveItem] = useState(0);
  const [activeId, setActiveId] = useState(0);
  const [isHidden, setHidden] = useState(true);
  const { register, handleSubmit } = useForm();
  const [addName, setAddName] = useState("");
  const [addImage, setAddImage] = useState("");
  const navigate = useNavigate();
  // const [inputImgValue, setInputImgValue] = useState(data.data[activeItem].img);
  // const [inputNameValue, setInputNameValue] = useState(
  //   data.data[activeItem].name
  // );
  const [values, setValues] = useState({ name: "", img: "" });

  useEffect(() => {
    if (data) {
      setValues({
        name: data.data[activeItem]?.name,
        img: data.data[activeItem]?.img,
      });
    }
  }, [data, activeItem]);

  const onSubmit = (data) => {
    axios
      .put(
        `https://65e83bc64bb72f0a9c4eac3a.mockapi.io/fakeAPI/${activeId}`,
        data
      )
      .catch((err) => console.log(err));
    refetch();
  };

  // Update input value handler
  // const handleImgInputChange = (e) => {
  //   setInputImgValue(e.target.value);
  // };

  // const handleNameInputChange = (e) => {
  //   setInputNameValue(e.target.value);
  // };

  const handleImgInputChange = (e) => {
    setValues({ ...values, img: e.target.value });
  };

  const handleNameInputChange = (e) => {
    setValues({ ...values, name: e.target.value });
  };

  const deleteItem = (i) => {
    axios.delete(`https://65e83bc64bb72f0a9c4eac3a.mockapi.io/fakeAPI/${i}`);

    refetch();
  };

  if (isLoading || isFetching) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center dark:bg-black">
        <div className="spinner"></div>
      </div>
    );
  }

  console.log(activeItem);
  console.log(activeId);

  return (
    <>
      <div className="flex w-screen text-gray-700 dark:bg-[#212121] dark:text-white">
        <div className="flex h-screen sticky top-0 flex-col items-center w-16 pb-4 overflow-auto border-r border-gray-300">
          <Link
            to={"/"}
            className="flex items-center justify-center flex-shrink-0 w-full h-16 dark:bg-[#404040] hover:bg-gray-300"
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300 hover:dark:bg-[#404040]"
            href="#"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
          <a
            className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300 hover:dark:bg-[#404040]"
            href="#"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>
          <a
            className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300 hover:dark:bg-[#404040]"
            href="#"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </a>
          <a
            className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300 hover:dark:bg-[#404040]"
            href="#"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </a>
          <a
            className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300 hover:dark:bg-[#404040]"
            href="#"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </a>
          <a
            className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-auto rounded hover:bg-gray-300 hover:dark:bg-[#404040]"
            href="#"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </div>

        <div className="flex flex-col w-full border-r border-gray-300 h-screen sticky top-0">
          <button className="relative text-sm focus:outline-none group flex justify-between text-center">
            <div className="flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 text-center">
              <span className="font-medium">Cards list</span>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center justify-end w-full h-16 px-4 border-b border-gray-300 text-center">
                <span
                  className="font-medium p-5 bg-slate-200 rounded-xl dark:bg-slate-500"
                  onClick={() => refetch()}
                >
                  Reload
                </span>
              </div>
              <div
                className="flex items-center justify-end w-full h-16 px-4 border-b border-gray-300 text-center"
                onClick={() => {
                  setHidden(false);
                }}
              >
                <span
                  className="font-medium pt-3 pb-3 pl-5 items-center pr-5 flex justify-between bg-slate-200 rounded-xl dark:bg-slate-500"
                  onClick={() => {
                    setHidden(false);
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <button className="ml-2 leading-none">New Item</button>
                </span>
              </div>
            </div>
          </button>
          {/* <div className="flex flex-col flex-grow p-4 overflow-auto"> */}
          {/* {data.data.map((d, i) => {
              return (
                <button
                  key={i}
                  onClick={() => {
                    setActiveItem(i);
                    setInputImgValue(data.data[i].img);
                    setInputNameValue(data.data[i].name);
                  }}
                  className="flex items-center border-b-2 flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
                >
                  <span className="leading-none">{`${i + 1}: ${d.name}`}</span>
                </button>
              );
            })} */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">№</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Address</TableHead>
                <TableHead className="text-right">Update & Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.data?.map((el, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell className="font-medium">
                      <img src={el.img} alt="img" className="w-14 h-14" />
                    </TableCell>
                    <TableCell>{el.name}</TableCell>
                    <TableCell>{el.address}</TableCell>
                    <TableCell className="text-right flex gap-4 justify-end">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="outline"
                            onClick={() => {
                              setActiveItem(i);
                              setActiveId(el.id);
                            }}
                            className="bg-slate-500 hover:bg-slate-400 text-white hover:white"
                          >
                            Update
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent
                          className={"bg-[#3f3f3f] text-white"}
                        >
                          <AlertDialogHeader>
                            <AlertDialogTitle
                              className={"flex justify-between items-center"}
                            >
                              <p>Update</p>{" "}
                              <AlertDialogCancel
                                className={"bg-transparent text-white"}
                              >
                                X
                              </AlertDialogCancel>
                            </AlertDialogTitle>
                            <AlertDialogDescription
                              className={
                                "flex flex-col justify-center items-center gap-4 "
                              }
                            >
                              <img
                                className="w-1/4"
                                src={data.data[activeItem].img}
                                alt=""
                              />
                              <h1 className="text-2xl mb-2 text-white">
                                {data.data[activeItem].name}
                              </h1>
                              <h1 className="text-2xl mb-2 text-slate-200">
                                {data.data[activeItem].address}
                              </h1>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="w-full px-10 flex items-center gap-5">
                                  <label htmlFor="img">Img:</label>
                                  <input
                                    id="img"
                                    className=" w-full border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#3f3f3f] text-white"
                                    //   value={data.data[activeItem].img}
                                    //   defaultValue={data.data[activeItem].img}
                                    {...register("img")}
                                    value={values.img}
                                    //   onChange={e => setUpValues({...upValues, img: e.target.value})}
                                    onChange={handleImgInputChange}
                                  />
                                </div>
                                <div className="w-full px-10 flex items-center gap-5">
                                  <label htmlFor="name">Name:</label>
                                  <input
                                    id="name"
                                    className=" w-full border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#3f3f3f] text-white"
                                    //   defaultValue={data.data[activeItem].name}
                                    {...register("name")}
                                    value={values.name}
                                    //   defaultValue={values.name}
                                    onChange={handleNameInputChange}
                                  />
                                </div>
                                <div className="w-full px-10 flex items-center gap-5">
                                  <AlertDialogAction
                                    type={"submit"}
                                    className="w-full mt-4 bg-slate-400 rounded-md h-10 from-neutral-700 hover:bg-white hover:text-slate-400"
                                  >
                                    Save Changes
                                  </AlertDialogAction>
                                </div>
                              </form>
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                            {/* <AlertDialogAction>Continue</AlertDialogAction> */}
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive">Delete</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently delete account and remove data from
                              our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => deleteItem(el.id)}
                            >
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          {/* </div> */}
        </div>

        {/* <div className="flex flex-col flex-grow">
          <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300 justify-between">
            <h1 className="text-lg font-medium">Card Info</h1>
            <button
              className="flex items-center flex-shrink-0 h-10 px-3 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
              href="#"
              onClick={() => {
                setHidden(false);
              }}
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <button className="ml-2 leading-none">New Item</button>
            </button>
          </div>
          <div className="p-5 flex flex-col items-center justify-center gap-3">
            <h1 className="text-2xl mb-2">{data.data[activeItem].name}</h1>
            <img className="w-1/4" src={data.data[activeItem].img} alt="" />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full px-10 flex items-center gap-5">
                <label htmlFor="img">Img:</label>
                <input
                  id="img"
                  className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  //   value={data.data[activeItem].img}
                  //   defaultValue={data.data[activeItem].img}
                  {...register("img")}
                  value={inputImgValue}
                  onChange={handleImgInputChange}
                  //   onChange={e => setUpValues({...upValues, img: e.target.value})}
                />
              </div>
              <div className="w-full px-10 flex items-center gap-5">
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  //   defaultValue={data.data[activeItem].name}
                  {...register("name")}
                  value={inputNameValue}
                  onChange={handleNameInputChange}
                  //   defaultValue={values.name}
                  //   onChange={handleChange}
                />
              </div>
              <div className="w-full px-10 flex items-center gap-5">
                <button className="w-full mt-4 bg-slate-400 rounded-md h-10 from-neutral-700">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div> */}
      </div>

      <div
        className={`modal absolute ${
          isHidden ? "hidden" : ""
        } left-0 right-0 bottom-0 top-0`}
      >
        <div className="container h-full flex flex-col items-center justify-center bg-white gap-4">
          <div className="flex gap-4 items-center justify-center">
            <label htmlFor="addName">Name:</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="addName"
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setAddName(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-4 items-center justify-center">
            <label htmlFor="addImg">Img:</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="addImg"
              type="text"
              placeholder="Url"
              onChange={(e) => {
                setAddImage(e.target.value);
              }}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              axios
                .post("https://65e83bc64bb72f0a9c4eac3a.mockapi.io/fakeAPI", {
                  address: "",
                  id: `${data.data.length + 1}`,
                  img: addImage,
                  name: addName,
                })
                .then((res) => {
                  console.log(res);
                })
                .then(setHidden(true));
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              setHidden(true);
            }}
            className=" underline text-2xl text-black"
          >
            Go back
          </button>
        </div>
      </div>

      <div
        className={`modal absolute ${
          isHidden ? "hidden" : ""
        } left-0 right-0 bottom-0 top-0`}
      >
        <div className="container h-full flex flex-col items-center justify-center bg-white dark:bg-[#212121] dark:text-white gap-4">
          <div className="flex gap-4 items-center justify-center">
            <label htmlFor="addName">Name:</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:bg-[#404040] dark:focus:border-blue-500"
              id="addName"
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setAddName(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-4 items-center justify-center">
            <label htmlFor="addImg">Img:</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:bg-[#404040] dark:focus:border-blue-500"
              id="addImg"
              type="text"
              placeholder="Url"
              onChange={(e) => {
                setAddImage(e.target.value);
              }}
            />
          </div>
          <button
            className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              axios
                .post("https://65e83bc64bb72f0a9c4eac3a.mockapi.io/fakeAPI", {
                  address: "",
                  id: `${data.data.length + 1}`,
                  img: addImage,
                  name: addName,
                })
                .then((res) => {
                  console.log(res);
                })
                .then(setHidden(true));
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              setHidden(true);
            }}
            className="underline dark:text-white text-2xl text-black"
          >
            Go back
          </button>
        </div>
      </div>

      {/* <div className="updateItemModal w-[90vw] h-[500px] fixed top-0 left-0 bg-slate-300 mt-20 mr-20 ml-20 mb-20">
        <h1 className="text-2xl mb-2">{data.data[activeItem].name}</h1>
        <img className="w-1/4" src={data.data[activeItem].img} alt="" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full px-10 flex items-center gap-5">
            <label htmlFor="img">Img:</label>
            <input
              id="img"
              className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              //   value={data.data[activeItem].img}
              //   defaultValue={data.data[activeItem].img}
              {...register("img")}
              value={inputImgValue}
              onChange={handleImgInputChange}
              //   onChange={e => setUpValues({...upValues, img: e.target.value})}
            />
          </div>
          <div className="w-full px-10 flex items-center gap-5">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              //   defaultValue={data.data[activeItem].name}
              {...register("name")}
              value={inputNameValue}
              onChange={handleNameInputChange}
              //   defaultValue={values.name}
              //   onChange={handleChange}
            />
          </div>
          <div className="w-full px-10 flex items-center gap-5">
            <button className="w-full mt-4 bg-slate-400 rounded-md h-10 from-neutral-700">
              Save Changes
            </button>
          </div>
        </form>
      </div> */}
    </>
  );
};
