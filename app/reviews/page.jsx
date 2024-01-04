"use client";
import UserQuote from "@/components/UserQuote";
import { Carousel } from "flowbite-react";
export default function Faq() {
  const quotes = [
    {
      name: "Yash",
      title: "CEO at Company",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      imgsrc: "img/avatar.jpg",
    },
    {
      name: "John Doe1",
      title: "CEO at Company",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      imgsrc: "img/avatar.jpg",
    },
    {
      name: "John Doe2",
      title: "CEO at Company",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      imgsrc: "img/avatar.jpg",
    },
    {
      name: "John Doe3",
      title: "CEO at Company",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      imgsrc: "img/avatar.jpg",
    },
    {
      name: "John Doe4",
      title: "CEO at Company",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      imgsrc: "img/avatar.jpg",
    },
    {
      name: "John Doe5",
      title: "CEO at Company",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      imgsrc: "img/avatar.jpg",
    },
    {
      name: "John Doe6",
      title: "CEO at Company",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      imgsrc: "img/avatar.jpg",
    },
    {
      name: "John Doe7",
      title: "CEO at Company",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      imgsrc: "img/avatar.jpg",
    },
  ];
  return (
    <Carousel slide={false}>
      {quotes.map((quote, index) => {
        return (
          <div
            key={index}
            className="flex w-full h-full lg:p-36 md:p-16 p-10 justify-center"
          >
            <UserQuote {...quote} />
          </div>
        );
      })}
    </Carousel>
  );
}
