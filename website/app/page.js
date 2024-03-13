import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col py-10 h-screen">
        <div className="flex">
          <div className="">
            <Image src="/hero.png" alt="Hero" width={500} height={500} className="[filter:drop-shadow(0px_4px_8px_rgba(0,_0,_0,_0.5))]" />
          </div>
          <div className="">
            <h1 className="text-5xl font-bold">Welcome to GenChain</h1>
            <p className="text-xl mt-4">
              GenChain is an AI-powered NFT Minting and Secure Storage Platform.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-10 h-screen">
        <h1 className="text-5xl font-bold" id="services">Our services</h1>
        <div className="flex gap-3 items-center justify-center mx-40 mt-20">
          <div>
            <Link href="/minting">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                AI-powered NFT Minting
              </button>
            </Link>
          </div>
          <div>
            <Link href="/upload">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Secure storage
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
