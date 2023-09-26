import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {

  return (
    <>
    <footer className="dark bg-[#00695C] pt-6 text-gray-50 md:pt-20">
        <div className="container relative px-4 pb-4 m-auto">
            <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-between md:gap-4 lg:flex-nowrap">
                <div className="max-w-xs">
                    <p>"A paragraph is a brief piece of writing that consists of one or more sentences that relate to a single topic. Paragraphs are a conventional way to organize extended segments of prose."</p>
                </div>
                <div className="text-sm md:text-lg">
                    <h4 className="font-semibold">COMPANY</h4>
                    <ul className="mt-4 space-y-3">
                        <li className="cursor-pointer underline-offset-2 hover:underline"><a>About us</a></li>
                        <li className="cursor-pointer underline-offset-2 hover:underline"><a>Privacy policy</a></li>
                        <li className="cursor-pointer underline-offset-2 hover:underline"><a>Terms & conditions</a></li>
                        
                    </ul>
                </div>
                <div className="text-sm md:text-lg">
                    <h4 className="font-semibold">QUICK LINKS</h4>
                    <ul className="mt-4 space-y-3">
                        <li className="cursor-pointer underline-offset-2 hover:underline"><a>Contact us</a></li>
                        <li className="cursor-pointer underline-offset-2 hover:underline"><a>Why us?</a></li>
                        <li className="cursor-pointer underline-offset-2 hover:underline"><a>Blog</a></li>
                    </ul>
                </div>
                <div>
                    <a className="cursor-pointer flex shrink-0 justify-center items-center gap-2 font-semibold transition-all duration-300 rounded-full focus-visble:ring focus-visble:ring-red-800 focus-visble:ring-opacity-10 ring-red-800 focus:outline-none select-none disabled:cursor-not-allowed disabled:opacity-80 text-gray-50 dark:text-gray-900 bg-gray-900 dark:bg-gray-50 hover:bg-gray-800 dark:hover:bg-gray-100 lg:px-8 px-7 lg:py-4 py-3 lg:text-lg text-md w-full">Download our app</a>
                </div>
            </div>
            <div className=" pt-[10vmin] pb-1 md:-bottom-72">
                <img className="opacity-60 lg:opacity-100 lg:w-[30%] " src="logo.svg"></img>
            </div>
        </div>
    </footer>
    </>
  );
};