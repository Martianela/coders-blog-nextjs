import { SiCodersrank } from "react-icons/si";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
const Navbar = () => {
  const [state, setState] = useState(false);
  const handlClick = () => {
    setState(!state);
  };
  return (
    <>
      <nav className=" flex justify-between my-[10px]">
        <Link href="/">
          <div className="flex gap-1 text-primary items-center">
            <span>
              <SiCodersrank size={25} />
            </span>

            <span className="text-primary font-bold text-xl">Coder's blog</span>
          </div>
        </Link>

        <ul className="text-sm text-gray-500 sm:flex items-center collapse sm:visible  ">
          <a className="mr-3 hover:text-gray-800 " href="#">
            Product
          </a>
          <a className="mr-3 hover:text-gray-800 " href="#">
            Pricing
          </a>
          <a className="mr-3 hover:text-gray-800 " href="#">
            Docs
          </a>
          <a className="mr-3 hover:text-gray-800 " href="#">
            Company
          </a>
        </ul>
        <div className="flex item-cente collapse sm:visible">
          <a className=" p-1 text-black hover:text-black/25 " href="#">
            LogIn
          </a>{" "}
          <a
            className="p-1 px-2 bg-primary text-white rounded-sm hover:text-black/25 "
            href="#"
          >
            sign up
          </a>
        </div>
      </nav>
      <div className="sm:collapse  text-center absolute top-3 right-5 text-gray-700">
        {!state ? (
          <div onClick={handlClick}>
            <AiOutlineMenu size={23} />
          </div>
        ) : (
          <div onClick={handlClick}>
            <RxCrossCircled size={23} />
          </div>
        )}
      </div>
      {state ? (
        <div className={`text-center leading-12 sm:absolute  `}>
          <ul className="text-sm text-gray-500 flex gap-4 flex-col items-cente sm:invisible  ">
            <a className="mr-3 hover:text-gray-800  " href="#">
              Product
            </a>
            <a className="mr-3 hover:text-gray-800 " href="#">
              Pricing
            </a>
            <a className="mr-3 hover:text-gray-800 " href="#">
              Docs
            </a>
            <a className="mr-3 hover:text-gray-800 " href="#">
              Company
            </a>
          </ul>
          <div className="flex flex-col item-cente mt-4   mx-auto sm:invisible">
            <a className=" p-1 text-black hover:text-black/25 " href="#">
              LogIn
            </a>{" "}
            <a
              className="p-1 px-2 bg-primary text-white rounded-sm hover:text-black/25 "
              href="#"
            >
              sign up
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
