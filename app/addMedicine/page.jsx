"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";

function page() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");
  const router = useRouter();

  const handleClick = async () => {
    console.log("clicked", name, price, age, country, type);
    const res = await fetch("/api/medicines", {
      method: "POST",
      body: JSON.stringify({
        medicine_name: name,
        average_price: price,
        min_age: age,
        country,
        medicine_type: type,
      }),
    });
    const data = await res.json();
    console.log(data);
    router.push("/search");
  };

  return (
    <div className="h-screen border px-10 border-black flex flex-col items-start gap-4">
      <h1 className="text-7xl font-bold mt-10 text-brand-500 font-serif">
        Add Medicine
      </h1>
      <input
        className="py-4 border-none rounded-lg text-lg"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Medicine Name"
        id="name"
      />
      <input
        className="py-4 border-none rounded-lg text-lg"
        value={price}
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <input
        className="py-4 border-none rounded-lg text-lg"
        value={age}
        type="number"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        className="py-4 border-none rounded-lg text-lg"
        value={country}
        type="text"
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Country"
      />
      <input
        className="py-4 border-none rounded-lg text-lg"
        value={type}
        type="text"
        onChange={(e) => setType(e.target.value)}
        placeholder="Type"
      />
      <button
        className="bg-brand-600 text-white px-6 py-4 rounded-lg border border-transparent hover:border-brand-600 hover:bg-transparent hover:text-brand-600 transition-all duration-300 ease-in-out"
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default page;
