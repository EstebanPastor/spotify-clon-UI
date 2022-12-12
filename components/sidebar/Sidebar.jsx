import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RiHome4Line,
  RiSearchLine,
  RiFolderLine,
  RiAddBoxFill,
  RiHeartAddLine,
  RiCloseFill,
} from "react-icons/ri";

export const Sidebar = (props) => {
  const { showSideBar, setShowSideBar } = props;

  return (
    <div
      className={` bg-black fixed top-0 w-64 h-full p-6 flex flex-col justify-between ${
        showSideBar ? "left-0" : "-left-full"
      } md:left-0 transition-all duration-300 z-50`}
    >
      <div className="md:hidden absolute right-4 top-4">
        <button
          className="text-2xl p-2 box-content"
          onClick={() => setShowSideBar(false)}
        >
          <RiCloseFill />
        </button>
      </div>

      <div>
        <div className="mt-4 mb-8">
          <Image
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            width={125}
            height={125}
            alt="Spotify_Logo_RGB_White"
          />
        </div>
        <nav>
          <ul className="flex flex-col gap-y-4">
            <li>
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-gray-100 transitions-colors"
              >
                <RiHome4Line className="text-2xl" />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-gray-100 transitions-colors"
              >
                <RiSearchLine className="text-2xl" />
                Search
              </Link>
            </li>
            <li className="mb-8">
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-gray-100 transitions-colors"
              >
                <RiFolderLine className="text-2xl" />
                Your library
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-gray-100 transitions-colors"
              >
                <RiAddBoxFill className="text-2xl" />
                Create playlist
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-gray-100 transitions-colors"
              >
                <RiHeartAddLine className="text-2xl" />
                Your favorite songs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul className="flex flex-col gap-y-2">
            <li>
              <Link href="#" className="text-sm hover:underline">
                Cookies
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline">
                Privacy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
