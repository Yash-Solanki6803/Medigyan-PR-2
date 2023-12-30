"use client";

import { Button, Navbar } from "flowbite-react";

export default function CustomNavbar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-slate-900">
          MegiGyan
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Search</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/faq">FAQs</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
