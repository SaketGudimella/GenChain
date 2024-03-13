"use client"
import { useRef, useState } from "react";
import axios from "axios";

const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `421eb5270acb98154d61`,
            pinata_secret_api_key: `f4679f5b9b90dde2890a58e35808b04ccc8a0676fba71b7ee668551a3b2b7faa`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;  
        console.log(ImgHash);
        contract.add(account, ImgHash);
        alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(null);
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    } else {
      alert("No image selected");
    }
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    console.log("data");
    const reader = new FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
  };

  return (
    <div className="top">
      <div className="flex flex-col p-3 bg-gradient-to-br from-white to-blue-200 bg-gradient-45 rounded-md gap-3">
        <button className="choose" onClick={() => inputRef.current.click()}> 
          Choose Image
        </button>
        <input
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={retrieveFile}
            id="fileInput"
            ref={inputRef}
          />
        <span className="textArea">Image: {fileName}</span>
        <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 p-3 rounded-md text-white font-medium"
          disabled={!file}
          onClick={handleSubmit}
        >
          Upload Image
        </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
