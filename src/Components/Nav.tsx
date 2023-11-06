//@ts-nocheck
import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavContext from '../NavContext';

export default function Nav() {
  // const [showWallet, setShowWallet] = useState(false);
  const { dappName, logo } = useContext(NavContext)

  return (
    // <div style={{ fontFamily: 'Montserrat' }}>
    //   <div className="w-[416px] justify-between items-start inline-flex">
    //     <div className="p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex">
    //       <div className=" relative" >
    //         <button onClick={() => { navigate("/") }}>
    //           <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <g>
    //               <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5296 14.4697C17.8225 14.7626 17.8225 15.2374 17.5296 15.5303L13.8099 19.25L27.9993 19.25C28.4135 19.25 28.7493 19.5858 28.7493 20C28.7493 20.4142 28.4135 20.75 27.9993 20.75L13.8099 20.75L17.5296 24.4697C17.8225 24.7626 17.8225 25.2374 17.5296 25.5303C17.2367 25.8232 16.7618 25.8232 16.4689 25.5303L11.4689 20.5303C11.3283 20.3897 11.2493 20.1989 11.2493 20C11.2493 19.8011 11.3283 19.6103 11.4689 19.4697L16.4689 14.4697C16.7618 14.1768 17.2367 14.1768 17.5296 14.4697Z" fill="white" fill-opacity="0.8" />
    //             </g>
    //           </svg> </button>
    //       </div>
    //     </div>
    //     <div className="p-3  rounded-[39px] flex-col justify-center items-center gap-2 inline-flex" >
    //       <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path fill-rule="evenodd" clip-rule="evenodd" d="M0.719671 0.21967C1.01256 -0.0732233 1.48744 -0.0732233 1.78033 0.21967L15.7803 14.2197C16.0732 14.5126 16.0732 14.9874 15.7803 15.2803C15.4874 15.5732 15.0126 15.5732 14.7197 15.2803L0.719671 1.28033C0.426777 0.987437 0.426777 0.512563 0.719671 0.21967Z" fill="#101010" fill-opacity="0.8" />
    //         <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7803 0.21967C15.4874 -0.0732233 15.0126 -0.0732233 14.7197 0.21967L0.71967 14.2197C0.426777 14.5126 0.426777 14.9874 0.71967 15.2803C1.01256 15.5732 1.48744 15.5732 1.78033 15.2803L15.7803 1.28033C16.0732 0.987437 16.0732 0.512563 15.7803 0.21967Z" fill="#101010" fill-opacity="0.8" />
    //       </svg>
    //     </div>
    //   </div>
    //   <div className="h-[221px] px-5 py-6 flex-col justify-center  gap-4 flex">
    //     <div className="self-stretch py-2  justify-center  gap-2 inline-flex">
    //       <div className=" flex-col justify-center  gap-2 inline-flex">
    //         <img className="w-[95px] h-[95px]" src={logo} />
    //       </div>
    //     </div>
    //     <div className="self-stretch h-[46px] py-3 flex-col justify-center items-start gap-4 flex">
    //       <div className="self-stretch justify-center  gap-2 inline-flex">
    //         <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium leading-snug">Login to {dappName}</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='dark:bg-fontLightColor' >
      <div className="w-[416px] justify-between   items-start inline-flex">
        <div className="p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex">
          <div className=" relative" >
            <button>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5296 14.4697C17.8225 14.7626 17.8225 15.2374 17.5296 15.5303L13.8099 19.25L27.9993 19.25C28.4135 19.25 28.7493 19.5858 28.7493 20C28.7493 20.4142 28.4135 20.75 27.9993 20.75L13.8099 20.75L17.5296 24.4697C17.8225 24.7626 17.8225 25.2374 17.5296 25.5303C17.2367 25.8232 16.7618 25.8232 16.4689 25.5303L11.4689 20.5303C11.3283 20.3897 11.2493 20.1989 11.2493 20C11.2493 19.8011 11.3283 19.6103 11.4689 19.4697L16.4689 14.4697C16.7618 14.1768 17.2367 14.1768 17.5296 14.4697Z" fill="white" fill-opacity="0.8" />
                </g>
              </svg>
            </button>
          </div>

        </div>
        <div className="p-3  rounded-[39px] flex-col justify-center  items-center gap-2 inline-flex">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.719671 0.21967C1.01256 -0.0732233 1.48744 -0.0732233 1.78033 0.21967L15.7803 14.2197C16.0732 14.5126 16.0732 14.9874 15.7803 15.2803C15.4874 15.5732 15.0126 15.5732 14.7197 15.2803L0.719671 1.28033C0.426777 0.987437 0.426777 0.512563 0.719671 0.21967Z" fill="white" fill-opacity="0.8" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7803 0.21967C15.4874 -0.0732233 15.0126 -0.0732233 14.7197 0.21967L0.71967 14.2197C0.426777 14.5126 0.426777 14.9874 0.71967 15.2803C1.01256 15.5732 1.48744 15.5732 1.78033 15.2803L15.7803 1.28033C16.0732 0.987437 16.0732 0.512563 15.7803 0.21967Z" fill="white" fill-opacity="0.8" />
          </svg>
        </div>
      </div>
      <div className="h-[221px] px-5 py-6 flex-col justify-center  gap-4 flex">
        <div className="self-stretch py-2  justify-center  gap-2 inline-flex">
          <div className=" flex-col justify-center  gap-2 inline-flex">
            <img className="w-[95px] h-[95px]" src={logo} />
          </div>
        </div>
        <div className="self-stretch h-[46px] py-3 flex-col justify-center items-start gap-4 flex">
          <div className="self-stretch justify-center  gap-2 inline-flex">
            <div className="text-center text-stone-950 dark:text-white text-opacity-80 text-lg font-medium font-Montserrat leading-snug">Login to {dappName}</div>
          </div>
        </div>
      </div>
    </div>
  )
}


