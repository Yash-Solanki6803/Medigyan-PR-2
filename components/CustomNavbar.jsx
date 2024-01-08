"use client";

import { Button, Navbar } from "flowbite-react";
import Link from "next/link";

export default function CustomNavbar() {
  return (
    <Navbar
      fluid
      rounded
      className="bg-transparent rounded-none py-5 border-b border-brand-400"
    >
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-slate-900 ">
          MediGyaan
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button as={Link} href="/search">
          Search
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="hover:bg-none">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/reviews">Reviews</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
