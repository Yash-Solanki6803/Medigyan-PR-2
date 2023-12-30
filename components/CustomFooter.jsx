"use client";

import { Footer } from "flowbite-react";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

export default function CustomFooter() {
  return (
    <Footer className="bg-transparent border border-t-brand-300" container>
      <div className="w-full text-center ">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <a href="#" className="text-lg lg:text-2xl font-bold mr-5">
            MediGyan
          </a>
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="/" by="MediGyan" year={2023} />
            <div className="w-full mt-4 flex space-x-6 sm:mt-0 justify-center lg:justify-end ">
              <Footer.Icon href="#" icon={CiFacebook} />
              <Footer.Icon href="#" icon={CiInstagram} />
              <Footer.Icon href="#" icon={CiTwitter} />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
