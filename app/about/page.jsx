import { List } from "flowbite-react";

export default function About() {
  return (
    <main className="flex flex-col gap-16 justify-between bg-brand-100 lg:p-36 md:p-16 p-14 overflow-y-scroll no-scrollbar">
      <div className="flex h-fit md:flex-row flex-col items-center my-16 ">
        <div className="lg:w-1/2 md:w-1/3 md:pr-28 mb-10">
          <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold text-blue-900">
            About US!
          </h1>
        </div>
        <div className="flex flex-col items-center justify-start lg:w-1/2 md:w-2/3 w-full md:px-12 px-0">
          <p className="text-brand-900 lg:text-3xl md:text-xl text-lg flex flex-col gap-5">
            What's special about the product you're offering?What sets you apart
            from the competition? Convince your potential users by providing
            engaging points that show how they can lose out by not signing up.
            Be sure to include keywords that highlight your product to make your
            sign-up page more discoverable online,too!
          </p>
        </div>
      </div>
      <div className="flex h-fit lg:flex-row flex-col">
        <div className="flex flex-col lg:w-1/2 md:pr-28 h-full mb-10">
          <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold text-left text-blue-900">
            Want to know more about your medicine?
          </h1>
          <div className="lg:text-3xl md:text-xl text-lg mt-10 text-brand-900 flex flex-col gap-2">
            <p>Search the ingredient.</p>
            <p>Not sure about the ingredient?</p>

            <p>Scan the prescription!</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:w-1/2 h-full bg-blue-900 px-12 py-20">
          <List className="text-white lg:text-3xl text-xl flex flex-col gap-5">
            <List.Item>Get informed about what you are consuming</List.Item>
            <List.Item>Scan or search your medicine</List.Item>
            <List.Item>Know the side effects</List.Item>
            <List.Item>Take much out of your medicine</List.Item>
          </List>
        </div>
      </div>
    </main>
  );
}
