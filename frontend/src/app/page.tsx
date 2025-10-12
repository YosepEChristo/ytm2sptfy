"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isSpotifyConnected, setSpotifyConnected] = useState(false);

  const handleSpotifyLogin = () => {
    setSpotifyConnected(true);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-gray-100 flex flex-col items-center justify-center p-4">
      {/* Description Card */}
      <div className="bg-slate-800/70 rounded-2xl p-8 shadow-xl text-center max-w-md mb-8 border border-slate-700">
        <Image
          src="/favicon.ico"
          alt="Y2S Logo"
          width={120}
          height={120}
          className="mx-auto mb-4 drop-shadow-[0_0_10px_#22d3ee]"
        />
        <h1 className="text-3xl font-bold mb-2">
          <span className="text-cyan-400">YT Music</span>
          <span className="text-fuchsia-500"> → Spotify</span>
        </h1>
        <p className="text-gray-400 leading-relaxed text-sm">
          Seamlessly convert your YouTube Music playlists into Spotify
          playlists. Simply paste your YouTube link, and we’ll handle the rest —
          no manual searching, no hassle, just your music in one place.
        </p>
      </div>

      {/* Spotify Connect Section */}
      <div className="bg-slate-800 rounded-xl p-6 shadow-lg w-full max-w-md text-center border border-slate-700">
        <p className="text-gray-400 mb-4">
          {!isSpotifyConnected
            ? "Log in with your Spotify account to converting YouTube Music playlists automatically into Spotify playlists."
            : "Spotify connected ✓"}
        </p>
        {!isSpotifyConnected ? (
          <button
            onClick={handleSpotifyLogin}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 rounded-lg hover:brightness-110 transition"
          >
            Connect toSpotify
          </button>
        ) : (
          <>
            <input
              className="w-full px-4 py-2 rounded-lg bg-slate-900 text-gray-100 border border-slate-700 focus:border-cyan-400 focus:outline-none mt-4"
              placeholder="https://music.youtube.com/playlist..."
            />
            <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white py-2 rounded-lg hover:brightness-110 transition">
              Convert
            </button>
          </>
        )}
      </div>
    </main>
  );
}
