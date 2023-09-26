import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const Page1 = () => {

  return (
    <>
    <div className="bg-[#ffffff] h-[90vh] flex justify-between mt-10">
        <div className="ml-4 py-4 space-y-4">
            <h1 className="page1-heading text-[#FCE44D] font-extrabold text-2xl">"Main Heading"</h1>
            {/* <a className="ml-4 bg-[#FCE44D] text-white font-extrabold text-lg border-0 rounded-xl top-10w w-28 text-center">Download</a> */}
        </div>
        <div className="w-[40%]"><img src="4269949.jpg" /></div>
    </div>
    </>
  );
};
