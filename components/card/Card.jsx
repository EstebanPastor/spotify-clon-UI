import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiPlayMiniFill } from "react-icons/ri";

export const Card = () => {
  return (
    <>
      <Link
        href="/"
        className="bg-spotify-lightgray p-4 rounded-lg hover:bg-spotify-lightgrayhover transition-all group"
      >
        <div className="mb-4 relative">
          <Image
            src="https://i.scdn.co/image/ab67616d0000b273175c577a61aa13d4fb4b6534"
            width={200}
            height={350}
            alt="Mac Miller"
            className="rounded-lg drop-shadow-2xl mx-auto"
          />
          <button className="p-1 text-2xl bg-spotify-green rounded-full text-spotify-gray absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-0 group-hover:translate-y-0 ease-in">
            <RiPlayMiniFill />
          </button>
        </div>
        <div>
          <h5 className="font-medium text-gray-100 mb-2">Today's Top Hits</h5>
          <p className="text-gray-400 text-sm w-[18ch]">
            Mac miller is the artist of the week
          </p>
        </div>
      </Link>
      <Link
        href="/"
        className="bg-spotify-lightgray p-4 rounded-lg hover:bg-spotify-lightgrayhover transition-all group"
      >
        <div className="mb-4 relative">
          <Image
            src="https://i1.sndcdn.com/artworks-q23HrYOXpzAiPR4Q-Fn2WcQ-t500x500.jpg"
            width={200}
            height={350}
            alt="Adam Beyer"
            className="rounded-lg drop-shadow-2xl mx-auto"
          />
          <button className="p-1 text-2xl bg-spotify-green rounded-full text-spotify-gray absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-0 group-hover:translate-y-0 ease-in">
            <RiPlayMiniFill />
          </button>
        </div>
        <div>
          <h5 className="font-medium text-gray-100 mb-2">Today's Albums Hits</h5>
          <p className="text-gray-400 text-sm w-[18ch]">
            ¡Listen Adam Beyer new album!
          </p>
        </div>
      </Link>
      <Link
        href="/"
        className="bg-spotify-lightgray p-4 rounded-lg hover:bg-spotify-lightgrayhover transition-all group"
      >
        <div className="mb-4 relative">
          <Image
            src="https://imagenes.elpais.com/resizer/6qenPBN88oyUrg7p1OMPxI0PoxE=/1200x0/filters:focal(191x98:201x108)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/J4MZMQKLQYOZ7RQXT3P5TPN7QM.jpg"
            width={200}
            height={350}
            alt="Mac Miller"
            className="rounded-lg drop-shadow-2xl mx-auto"
          />
          <button className="p-1 text-2xl bg-spotify-green rounded-full text-spotify-gray absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-0 group-hover:translate-y-0 ease-in">
            <RiPlayMiniFill />
          </button>
        </div>
        <div>
          <h5 className="font-medium text-gray-100 mb-2">Rock classics</h5>
          <p className="text-gray-400 text-sm w-[18ch]">
            Nirvana tribute
          </p>
        </div>
      </Link>
      <Link
        href="/"
        className="bg-spotify-lightgray p-4 rounded-lg hover:bg-spotify-lightgrayhover transition-all group"
      >
        <div className="mb-4 relative">
          <Image
            src="https://cnnespanol.cnn.com/wp-content/uploads/2019/02/cnn-savage.jpg?quality=100&strip=info"
            width={200}
            height={350}
            alt="Mac Miller"
            className="rounded-lg drop-shadow-2xl mx-auto"
          />
          <button className="p-1 text-2xl bg-spotify-green rounded-full text-spotify-gray absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-0 group-hover:translate-y-0 ease-in">
            <RiPlayMiniFill />
          </button>
        </div>
        <div>
          <h5 className="font-medium text-gray-100 mb-2">Trap music</h5>
          <p className="text-gray-400 text-sm w-[18ch]">
            21 Savage best songs
          </p>
        </div>
      </Link>
      <Link
        href="/"
        className="bg-spotify-lightgray p-4 rounded-lg hover:bg-spotify-lightgrayhover transition-all group"
      >
        <div className="mb-4 relative">
          <Image
            src="https://www.eltiempo.com/files/image_640_428/uploads/2022/09/16/63246f3d105a9.jpeg"
            width={200}
            height={350}
            alt="Mac Miller"
            className="rounded-lg drop-shadow-2xl mx-auto"
          />
          <button className="p-1 text-2xl bg-spotify-green rounded-full text-spotify-gray absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-0 group-hover:translate-y-0 ease-in">
            <RiPlayMiniFill />
          </button>
        </div>
        <div>
          <h5 className="font-medium text-gray-100 mb-2">Viva latino</h5>
          <p className="text-gray-400 text-sm w-[18ch]">
            Bad Bunny
          </p>
        </div>
      </Link>
      <Link
        href="/"
        className="bg-spotify-lightgray p-4 rounded-lg hover:bg-spotify-lightgrayhover transition-all group"
      >
        <div className="mb-4 relative">
          <Image
            src="https://indiehoy.com/wp-content/uploads/2022/01/lofi-girl.jpg"
            width={200}
            height={350}
            alt="Mac Miller"
            className="rounded-lg drop-shadow-2xl mx-auto"
          />
          <button className="p-1 text-2xl bg-spotify-green rounded-full text-spotify-gray absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-0 group-hover:translate-y-0 ease-in">
            <RiPlayMiniFill />
          </button>
        </div>
        <div>
          <h5 className="font-medium text-gray-100 mb-2">Lo-fi Radio</h5>
          <p className="text-gray-400 text-sm w-[18ch]">
            ¡Take a coffee and relax listening to lo-fi!
          </p>
        </div>
      </Link>
    </>
  );
};
