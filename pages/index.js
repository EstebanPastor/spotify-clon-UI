import Head from "next/head";
import { AlbumList } from "../components/album_list/AlbumList";

export default function Home() {
  return (
    <div className="pt-28 md:pl-72 p-8">
      <AlbumList title="Spotify Playlists" />
      <AlbumList title="New artists" />
      <AlbumList title="Focus" />
      <AlbumList title="Mood" />
    </div>
  );
}
