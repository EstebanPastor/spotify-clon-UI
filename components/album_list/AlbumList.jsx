import React from "react";
import Link from "next/link";
import { Card } from "../card/Card";

export const AlbumList = (props) => {
  const { title, album } = props;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-8">
        <Link
          href="#"
          className="text-2xl font-bold text-gray-100 hover:underline"
        >
          {title}
        </Link>
        <Link
          href="#"
          className="uppercase text-sm font-bold tracking-[2px] hover:underline"
        >
          See all
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        <Card />
       
      </div>
    </div>
  );
};
