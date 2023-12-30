"use client";

import { Avatar, Blockquote } from "flowbite-react";

export default function UserQuote({ name, title, quote, imgsrc }) {
  return (
    <div className=" h-full flex w-full bg-brand-900 rounded-lg relative">
      <figure className="mx-auto text-center flex flex-col justify-around  lg:p-5 p-2 pt-10">
        <svg
          className=" mb-3 lg:h-14 lg:w-14 h-8 w-8 text-yellow-200  absolute -top-5 -left-1 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <Blockquote>
          <p className="lg:text-2xl md:text-lg text-base font-medium italic text-white">
            {quote ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."}
          </p>
        </Blockquote>
        <figcaption className="mt-6 flex  items-center justify-center space-x-3">
          <Avatar
            rounded
            size="xs"
            img={imgsrc || "img/avatar.jpg"}
            alt="profile picture"
          />
          <div className="flex items-center justify-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-xs text-white">
              {name || "John Doe"}
            </cite>
            <cite className="pl-3 text-xs text-gray-400">
              {title || "CEO at Company"}
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
