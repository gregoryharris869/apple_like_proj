import IconItem from "../IconItem";
import { Tv, Smartphone, Tablet, Laptop, Glasses, Cast } from "lucide-react";

const TVpromo = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center bg-white">
      <div className="pt-20 mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="100px"
          viewBox="0 0 24 24"
          width="100px"
          fill="#111"
        >
          <g>
            <rect fill="none" height="24" width="24" y="0" />
          </g>
          <g>
            <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M9.5,16.5v-9l7,4.5L9.5,16.5z" />
          </g>
        </svg>
      </div>
      <h1 className="max-w-5xl mb-6 text-4xl font-bold sm:text-4xl md:text-5xl">
        Watch Apple TV+ anywhere on the Apple TV app.
      </h1>
      <p className="mb-2 text-lg sm:text-xl">
        Find the Apple TV app on your favorite Apple devices.
      </p>
      <p className="text-lg sm:text-xl">
        Or watch Apple TV+ online at{" "}
        <a href="/" className="text-linkColor hover:underline">
          tv.apple.com
        </a>
        .
      </p>
      <div className="grid grid-cols-3 gap-8 p-8">
        <IconItem Icon={Tv} label="Apple TV" />
        <IconItem Icon={Smartphone} label="iPhone" />
        <IconItem Icon={Tablet} label="iPad" />
        <IconItem Icon={Laptop} label="Mac" />
        <IconItem Icon={Glasses} label="Apple Vision Pro" />
        <IconItem Icon={Cast} label="AirPlay" />
      </div>
      <div className="flex flex-col items-center justify-center px-4 py-12 text-center bg-white">
        <h2 className="max-w-4xl mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
          See it on your smart TV or streaming device.
        </h2>
        <a
          href="#"
          className="text-lg font-medium text-blue-600 hover:text-blue-800 md:text-xl"
        >
          Set up your device &gt;
        </a>
      </div>
    </div>
  );
};

export default TVpromo;
