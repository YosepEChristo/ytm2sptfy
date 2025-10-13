"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ConvertPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [playlistData, setPlaylistData] = useState<
    { title: string; artist: string; status: "Success" | "Fail" }[]
  >([]);

  useEffect(() => {
    // Simulate backend processing delay (5–10 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);

      // Dummy playlist data (2 success, 1 fail)
      setPlaylistData([
        { title: "Shape of You", artist: "Ed Sheeran", status: "Success" },
        { title: "Blinding Lights", artist: "The Weeknd", status: "Success" },
        {
          title: "Ksatria Batang Hitam",
          artist: "Agus Suroyo",
          status: "Fail",
        },
      ]);
    }, 7000); // 7 seconds simulation

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-slate-900 text-gray-100 flex flex-col items-center justify-center p-6">
      {isLoading ? (
        // 🎬 Section 2.1 — Spinner Loading Screen
        <div className="flex flex-col items-center text-center bg-slate-800/70 rounded-2xl p-8 shadow-xl border border-slate-700">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-fuchsia-500 rounded-full animate-spin mb-6"></div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-4">
            Converting your playlist...
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Please wait while we process your YouTube Music playlist.
          </p>
        </div>
      ) : (
        // 🎵 Section 2.2 — Table of Results
        <div className="bg-slate-800/70 rounded-2xl p-8 shadow-xl border border-slate-700 w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-6">
            Conversion Results
          </h2>

          <table className="w-full border-collapse border border-slate-700 text-left">
            <thead>
              <tr className="bg-slate-700/50 text-cyan-300">
                <th className="p-3 border border-slate-700">Title</th>
                <th className="p-3 border border-slate-700">Artist</th>
                <th className="p-3 border border-slate-700 text-center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {playlistData.map((song, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-700/30 transition duration-150"
                >
                  <td className="p-3 border border-slate-700">{song.title}</td>
                  <td className="p-3 border border-slate-700">{song.artist}</td>
                  <td
                    className={`p-3 border border-slate-700 text-center font-semibold ${
                      song.status === "Success"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {song.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 🎵 Action Buttons */}
          <div className="flex items-center sm:flex-col justify-center gap-3 mt-8">
            <button className="flex items-center justify-center gap-2 w-full sm:w-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 rounded-lg hover:brightness-110 transition">
              Add Playlist to Spotify
              <Image
                src="/sptfy.png"
                alt="Spotify Logo"
                width={22}
                height={22}
                className="drop-shadow-[0_0_4px_#000]"
              />
            </button>

            <button
              onClick={() => window.location.replace("/")}
              className="w-full sm:w-1/2 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white py-2 rounded-lg hover:brightness-110 transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
