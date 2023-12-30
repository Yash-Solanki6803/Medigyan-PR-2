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
    <Carousel>
      {quotes.map((quote, index) => {
        return (
          <div className="flex w-full h-full p-36 justify-center">
            <UserQuote {...quote} key={index} />;
          </div>
        );
      })}
    </Carousel>
  );
}
