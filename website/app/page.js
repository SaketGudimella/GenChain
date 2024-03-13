"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  function a(d, t) {
    var v = d.createElement(t),
      s = d.getElementsByTagName(t)[0];
    v.onload = function () {
      window.voiceflow.chat.load({
        verify: { projectID: "65f079060bc14fa0a78c2c4f" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
      });
    };
    v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    v.type = "text/javascript";
    s.parentNode.insertBefore(v, s);
  }
  useEffect(() => {
    a(document, "script");
  }, []);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col pt-10 h-screen">
        <div className="flex">
          <div className="flex-1">
            <Image
              src="/hero.png"
              alt="Hero"
              width={500}
              height={500}
              className="[filter:drop-shadow(0px_4px_8px_rgba(0,_0,_0,_0.5))]"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold">Welcome to GenChain</h1>
            <p className="text-xl mt-4 font-medium">
              GenChain is an AI-powered NFT Generator and Secure Storage
              Platform.
            </p>
            <p className="text-xl mt-4">
              GenChain pioneers the fusion of artificial intelligence and secure
              storage in the NFT realm. As an AI-powered NFT Generator and
              Secure Storage Platform, it empowers creators to craft unique
              digital assets effortlessly. With advanced security measures,
              GenChain ensures the safe storage and protection of valuable NFTs,
              fostering trust among creators and collectors
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col  h-screen">
        <span id="services" className="translate-y-10"></span>
        <h1 className="text-5xl font-bold w-full text-center">Our services</h1>
        <div className="flex gap-3 items-center justify-center mx-40 mt-20">
          <div
            className="p-3 bg-gradient-to-br from-white to-blue-200 rounded-md max-w-md bg-gradient-45 cursor-pointer"
            onClick={() => {
              window.voiceflow.chat.open();
            }}
          >
            <h3 className="text-lg font-extrabold">
              AI-powered NFT Generation
            </h3>
            <p className="mt-1">
              Mint NFTs using our AI-powered platform and sell them on the
              blockchain.
            </p>
          </div>
          <Link href={"/upload"}>
            <div className="p-3 bg-gradient-to-br from-white to-blue-200 rounded-md max-w-md bg-gradient-45">
              <h3 className="text-lg font-extrabold">Secure Storage</h3>
              <p className="mt-2">
                Securely store your NFTs on the blockchain using our secure
                storage platform.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
