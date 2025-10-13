"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isSpotifyConnected, setSpotifyConnected] = useState(false);
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSpotifyLogin = () => {
    setSpotifyConnected(true);
  };

  const handleConvert = () => {
    // Reset error message before checking
    setErrorMessage("");

    // Simple validation: only "test" is valid for now
    if (playlistUrl.trim().toLowerCase() !== "test") {
      setErrorMessage("YouTube Music playlist not found");
      return;
    }

    // If valid, redirect to next page
    router.push("/convertPage");
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 font-semibold">
            {" "}
            →{" "}
          </span>
          <span className="text-fuchsia-500">Spotify</span>
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
          {!isSpotifyConnected ? (
            "Log in with your Spotify account to convert YouTube Music playlists automatically into Spotify playlists."
          ) : (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 font-semibold">
              Spotify connected ✓
            </span>
          )}
        </p>

        {!isSpotifyConnected ? (
          <button
            onClick={handleSpotifyLogin}
            className="w-full flex items-center justify-center gap-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 rounded-lg hover:brightness-110 transition"
          >
            Connect to Spotify
            <Image
              src="/sptfy.png"
              alt="Spotify Logo"
              width={24}
              height={24}
              className="drop-shadow-[0_0_2px_#000]"
            />
          </button>
        ) : (
          <>
            <input
              value={playlistUrl}
              onChange={(e) => setPlaylistUrl(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-slate-900 text-gray-100 border border-slate-700 focus:border-cyan-400 focus:outline-none mt-4"
              placeholder="https://music.youtube.com/playlist..."
            />

            {/* Error message */}
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}

            <button
              onClick={handleConvert}
              className="mt-4 w-full bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white py-2 rounded-lg hover:brightness-110 transition"
            >
              Convert
            </button>
          </>
        )}
      </div>
    </main>
  );
}
