"use client"

import { useState } from "react";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".tmb")?.value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank" className="flex-shrink-0">
            <img
              key={i}
              src={`https:${item.substring(6)}`}
              alt="new"
              className="h-48 object-contain"
            />
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };
  
  return (
    <div className="flex flex-col gap-3 mb-10">
      <div className="flex flex-wrap gap-2 mx-10">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="hidden tmb"
        hidden
      />
      <div className="flex justify-center">
      <button className="bg-blue-500 p-3 rounded-md text-white font-medium" onClick={getdata}>
        Get Data
      </button>

      </div>
    </div>
  );
};

export default Display;
