import React, { useState } from "react";
import { QrGenerator } from "./Popup/QrGenerator";

export default function MetamaskBarcode() {

    const handleDownloadClick = () => {
        // Open the link in a new tab
        window.open('https://metamask.io/download/', '_blank');
      };

  return (
    <>
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
      flex: 1,
      padding: '3',
      mixBlendMode: 'difference',
      paddingLeft:"16px",
    }}
  >
    <div
      style={{
        flex: 1,
        height: '22px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        gap: '2',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          color: 'white',
          opacity: 0.8,
          fontSize: 'large',
          fontWeight: 'medium',
          fontFamily: 'Montserrat',
          lineHeight: '1.6',
        }}
      >
        Connect a Wallet
      </div>
    </div>
  </div>

  <div style={{ width: '200px', height: '200px', position: 'relative' }}>
    <QrGenerator content={'https://metamask.io/download/'} />
  </div>

  <div
    style={{
      flex: 1,
      marginTop: '3',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '4',
    }}
  >
    <div
      style={{
        padding: '2 5',
        backgroundImage: 'linear-gradient(to right, #8B5CF6, #6366F1)',
        borderRadius: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'inline-flex',
        cursor: 'pointer',
      }}
      onClick={handleDownloadClick}
    >
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 'medium',
            fontWeight: 'semibold',
            fontFamily: 'Montserrat',
            lineHeight: 'tight',
            padding:"4px 10px"
          }}
        >
          Open app
        </div>
      </div>
    </div>

    <div
      style={{
        padding: '0 2',
        justifyContent: 'start',
        alignItems: 'center',
        display: 'inline-flex',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <span
          style={{
            opacity: 0.7,
            fontSize: 'small',
            fontWeight: 'normal',
            fontFamily: 'Montserrat',
            lineHeight: '16.8px',
          }}
        >
          Don’t have a wallet?{' '}
        </span>
        <span
          style={{
            opacity: 0.8,
            fontSize: 'small',
            fontWeight: 'medium',
            fontFamily: 'Montserrat',
            textDecoration: 'underline',
            lineHeight: '16.8px',
            cursor: 'pointer',
          }}
          onClick={handleDownloadClick}
        >
          Download Metamask
        </span>
      </div>
    </div>
  </div>
</>

  // <>
  //   <div className="self-stretch py-3 mix-blend-difference flex-col justify-center items-center gap-4 flex">
  //     <div className="self-stretch h-[22px] flex-col justify-center items-start gap-2 flex">
  //       <div className="text-center text-white text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug">
  //         Connect a Wallet
  //       </div>
  //     </div>
  //   </div>
  //   <div className="w-[200px] h-[200px] relative">
  //   <QrGenerator content={"https://metamask.io/download/"}/>
  //   </div>
  //   <div className="self-stretch  mt-3 flex-col justify-center items-center gap-4 flex">
  //     <div className=" px-5 py-2 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-[20px] justify-center items-center inline-flex cursor-pointer" onClick={handleDownloadClick}>
  //       <div className="justify-center items-center flex">
  //         <div className="text-center text-white text-base font-semibold font-['Montserrat'] leading-tight">
  //           Open app
  //         </div>
  //       </div>
  //     </div>
  //     <div className="px-2 justify-start items-center inline-flex">
  //       <div className="text-center">
  //         <span className="text-zinc-500 text-opacity-70 text-sm font-normal font-['Montserrat'] leading-[16.80px]">
  //           Don’t have a wallet?{" "}
  //         </span>
  //         <span
  //           className="text-zinc-500 text-opacity-80 text-sm font-medium font-['Montserrat'] underline leading-[16.80px] cursor-pointer"
  //           onClick={handleDownloadClick}
  //         >
  //           Download Metamask
  //         </span>
  //       </div>
  //     </div>
  //   </div>
  // </>
  );
}
