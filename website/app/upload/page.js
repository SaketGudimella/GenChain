"use client";

import Upload from "../../hardhat/artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Modal from "@/components/model/Model";
import FileUpload from "@/components/fileupload/FileUpload";
import Display from "@/components/display/display";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x610178dA211FEF7D417bC0e6FeD39F05609AD788";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-xl font-bold">Upload your Image</p>
          <p>{!account?"Connect your metamask account to upload your Image":"Upload Images to your metamask account"}</p>
        </div>
        <div className="items-center justify-center flex flex-col">
          <FileUpload
            account={account}
            provider={provider}
            contract={contract}
          ></FileUpload>
        </div>
        <div className="items-center justify-center flex flex-col">
          <Display contract={contract} account={account}></Display>
        </div>
      </div>
    </>
  );
}

export default App;
