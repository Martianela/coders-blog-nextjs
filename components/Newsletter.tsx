import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const Newsletter = () => {
  return (
    <div className=" pb-4 w-full ">
      <form method="post">
        <h2 className="my-2">Sign up to our Newsletter</h2>
        <h6 className="my-2">
          Get the letest article on all directly on your eamil
        </h6>
        <input
          type="text"
          className="sm:w-full w-2/3 my-3 outline-1 outline-green-300 rounded-sm p-2  border-2 text-normal "
          placeholder="write your email address"
        />
        <button className="border-2 border-primary p-2 px-6 text-primary rounded-md cursor-pointer block my-3">
          Subscribe
        </button>
        <ul className="flex gap-2 text-center items-center py-4 text-gray-700 ">
          <li className="text-md mr-3 ">Share</li>
          <li>
            <a href="https://facebook.com">
              <FaFacebookF size={20} />
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <BsInstagram size={20} />
            </a>
          </li>{" "}
          <li>
            <a href="https://twitter.com">
              {" "}
              <AiOutlineTwitter size={23} />
            </a>
          </li>{" "}
          <li>
            <a href="https://linkedin.com">
              {" "}
              <FaLinkedinIn size={23} />
            </a>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Newsletter;
