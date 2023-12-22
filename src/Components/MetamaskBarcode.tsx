import React, { useState } from "react";
import { QrGenerator } from "./Popup/QrGenerator";

export default function MetamaskBarcode() {

    const handleDownloadClick = () => {
        // Open the link in a new tab
        window.open('https://metamask.io/download/', '_blank');
      };

  return (
  <>
    <div className="self-stretch py-3 mix-blend-difference flex-col justify-center items-center gap-4 flex">
      <div className="self-stretch h-[22px] flex-col justify-center items-start gap-2 flex">
        <div className="text-center text-white text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug">
          Connect a Wallet
        </div>
      </div>
    </div>
    <div className="w-[200px] h-[200px] relative">
    <QrGenerator content={"https://metamask.io/download/"}/>
    </div>
    <div className="self-stretch  mt-3 flex-col justify-center items-center gap-4 flex">
      <div className=" px-5 py-2 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-[20px] justify-center items-center inline-flex cursor-pointer" onClick={handleDownloadClick}>
        <div className="justify-center items-center flex">
          <div className="text-center text-white text-base font-semibold font-['Montserrat'] leading-tight">
            Open app
          </div>
        </div>
      </div>
      <div className="px-2 justify-start items-center inline-flex">
        <div className="text-center">
          <span className="text-zinc-500 text-opacity-70 text-sm font-normal font-['Montserrat'] leading-[16.80px]">
            Don’t have a wallet?{" "}
          </span>
          <span
            className="text-zinc-500 text-opacity-80 text-sm font-medium font-['Montserrat'] underline leading-[16.80px] cursor-pointer"
            onClick={handleDownloadClick}
          >
            Download Metamask
          </span>
        </div>
      </div>
    </div>
  </>
  );
}
