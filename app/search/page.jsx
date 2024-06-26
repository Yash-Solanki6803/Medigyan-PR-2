"use client";

import { Button, FileInput, FloatingLabel, Label } from "flowbite-react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const getData = async (name) => {
  const res = await fetch(`http://localhost:3000/api/medicines?name=${name}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

export default function Search() {
  const [name, setName] = useState("");
  const [medicine, setMedicine] = useState({});

  const handleClick = async () => {
    const data = await getData(name);
    setMedicine(data);
    console.log("medicine", medicine);
  };
  return (
    <main className="flex flex-col justify-around h-full bg-brand-100 lg:px-36 lg:py-20 p-10 bg-gradient-linear">
      {/* Search bar */}
      <div className="flex w-full items-center justify-center">
        <div className="w-full  [&_div]:flex  [&_div]:w-full">
          <FloatingLabel
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            label="Label"
          />
        </div>
        <Button onClick={handleClick} className="h-full">
          <CiSearch />
        </Button>
      </div>
      {/* file drop zone */}
      {/* <div className="flex h-full w-full items-center justify-center my-14">
        <Label
          htmlFor="dropzone-file"
          className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 "
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLineJoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <FileInput id="dropzone-file" className="hidden" />
        </Label>
      </div> */}
      <div className="w-full h-full  mt-14">
        {medicine && (
          <div className="py-10 flex flex-col items-start justify-center">
            <h1 className="text-4xl font-semibold mb-10">Medicine Details</h1>
            <div className="border-t py-6 border-black flex flex-col items-start justify-center gap-6">
              <p className="text-lg ">Name: {medicine.medicine_name}</p>
              <p className="text-lg ">Price: {medicine.average_price}</p>
              <p className="text-lg ">Country: {medicine.country}</p>
              <p className="text-lg ">Min - Age : {medicine.min_age} years</p>
              <p className="text-lg ">
                Medicine Type : {medicine.medicine_type}
              </p>
              <p className="text-lg ">
                Medicine Description : {medicine.medicine_desc}
              </p>
              <p className="text-lg ">
                Medicine Advantages : {medicine.medicine_adv}
              </p>
              <p className="text-lg ">
                Medicine Disadvantages : {medicine.medicine_disadv}
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
