import { List } from "flowbite-react";

export default function About() {
  return (
    <main className="flex flex-col justify-between h-full bg-brand-100 p-36 overflow-y-scroll no-scrollbar">
      <div className="flex h-full py-36">
        <div className="flex flex-col w-1/2 pr-28">
          <h1 className="text-7xl font-bold text-left text-blue-900">
            About US!
          </h1>
        </div>
        <div className="flex flex-col items-center justify-start w-1/2 px-12">
          <p className="text-brand-900 text-3xl flex flex-col gap-5">
            What's special aboutthe product you're offering?What sets you apart
            from the competition? Convince your potential users by providing
            engaging points that showhowthey can lose out by not signing up. Be
            sure to include keywords that highlight your productto make your
            sign-up page more discoverable online,too!
          </p>
        </div>
      </div>
      <div className="flex h-full py-36">
        <div className="flex flex-col w-1/2 pr-28 h-full">
          <h1 className="text-7xl font-bold text-left text-blue-900">
            Want to know more about your medicine?
          </h1>
          <div className="text-3xl mt-10 text-brand-900 flex flex-col gap-2">
            <p>Search the ingredient.</p>
            <p>Not sure about the ingredient?</p>

            <p>Scan the prescription!</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 h-fit bg-blue-900 p-12">
          <List className="text-white text-3xl flex flex-col gap-5">
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
