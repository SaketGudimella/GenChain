"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const { ethers } = require("ethers");
export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [ethereum, setEthereum] = useState(0);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    async function connect() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      if (provider) {
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          const balance = await provider.getBalance(accounts[0]);
          const balanceNumber = ethers.utils.formatEther(balance);
          setEthereum(Number(balanceNumber).toFixed(2));
          setIsConnected(true);
        }
        window.ethereum.on("accountsChanged",async function (accounts) {
          if (accounts.length > 0) {
            const balance = await provider.getBalance(accounts[0]);
            const balanceNumber = ethers.utils.formatEther(balance);
            setEthereum(Number(balanceNumber).toFixed(2));
            setIsConnected(true);
          } else {
            setIsConnected(false);
            alert("Metamask disconnected")
          }
        });
      }
    }
    connect();
  }, []);
  return (
    <div className="w-full px-10">
      <nav
        className={`rounded-full bg-white flex justify-between px-10 py-2 mx-3 my-3 fixed top-0 left-0 right-0 z-50 shadow-lg`}
      >
        <div className="flex gap-2">
          <Image src="/logo.png" alt="logo" width={30} height={5}/>
          <h1 className="text-[25px] font-bold">GenChain</h1>
        </div>
        <div>
          <ul className="flex items-center gap-x-[20px] [list-style:none]">
            <i className="uil uil-times navCloseBtn" onClick={toggleNav}></i>
            <li>
              <Link href="/" id="inside">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#services" id="inside">
                Services
              </Link>
            </li>
            {/* <li>
          <Link href="/" id="inside">
            Chat-bot
          </Link>
        </li> */}
            <li>
              <button
                className="px-[20px] py-[10px] bg-[#007bff] text-[white] border-[none] rounded-[25px] cursor-pointer [transition:background-color_0.3s_ease]"
                onClick={async () => {
                  const provider = new ethers.providers.Web3Provider(window.ethereum);
                  if (!provider) {
                    alert("Metamask is not installed");
                    return;
                  }
                  await provider.send("eth_requestAccounts", []);
                  const signer = provider.getSigner();
                  setIsConnected(true);
                }}
              >
                {isConnected ?"ETH: "+ ethereum : "Connect"}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
