import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { SiCodersrank } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full pr-5 mx-auto py-5 mt-10 sm:w-[80%] bg-[white] ">
      <div className=" container flex justify-between">
        <div className="flex gap-1 text-primary items-center">
          {" "}
          <span>
            <SiCodersrank size={25} />
          </span>
          <span className="border-r-2 text-primary border-black/30 pr-[10px] mr-[10px]">
            Coder's blog
          </span>
          <span className="text-center text-gray-600 text-[13px]">
            © 2022 coders blog - @rishabhSoni
          </span>
        </div>
        <div>
          <ul className="flex gap-2 text-[23px] text-black/80">
            <li>
              <a href="https://instagram.com">
                <AiOutlineInstagram />
              </a>
            </li>
            <li>
              <a href="https://facebook.com">
                <AiOutlineFacebook />
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com">
                <AiOutlineLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
