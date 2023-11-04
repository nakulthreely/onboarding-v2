import React, { useState } from 'react';
import Nav from '../../Components/SignUp/Nav';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';

export default function SignUp() {

    // const [showPassword,setShowPassword]= useState(false);
    // const [showEmail,setShowEmail]=useState(false);
    // const toggleState=()=>{
    //     setShowPassword(!showPassword);
    //     setShowEmail(false);
    //   }
    const navigate= useNavigate();
  return (
    
    <div>
      <div className="w-[448px] h-[840px] p-4 bg-white rounded-2xl flex-col justify-between items-center inline-flex">
        <div className="flex-col justify-start items-center gap-2 flex">
          <Nav/>
          <div className="w-[376px] h-[46px] py-3 flex-col justify-center items-start gap-4 inline-flex">
  <div className="self-stretch justify-center items-center gap-2 inline-flex">
    <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug">Creating your Tria account</div>
  </div>
</div>
        </div>
        <div className="self-stretch h-[243px] flex-col justify-center items-center gap-2 flex">
          <div className="self-stretch h-48 flex-col justify-center items-center gap-3 flex">
                <div className="w-[416px] h-48 px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex">
  <div className="self-stretch h-[46px] py-3 flex-col justify-center items-start gap-4 flex">
    <div className="self-stretch justify-start items-center gap-2 inline-flex">
      <div className="mix-blend-difference text-center text-white text-opacity-80 text-lg font-medium font-Montserrat leading-snug">Create your tria name</div>
    </div>
  </div>
  <div className="w-[376px] px-2 justify-start items-center inline-flex">
    <div className="grow shrink basis-0 mix-blend-difference">
      <div>
        <span style={{ color: 'white', opacity: 0.5, fontSize: '0.875rem', fontWeight: 'normal' }}>Your </span>
        <span style={{ color: 'white', opacity: 0.9, fontSize: '0.875rem', fontWeight: 'bold' }}>@tria</span>
        <span style={{ color: 'white', opacity: 0.5, fontSize: '0.875rem', fontWeight: 'normal' }}> is like Gmail, for Web3. Pay, receive and log-in to apps on any device, and blockchain.</span>
      </div>
    </div>
  </div>
  <div className="self-stretch h-16 flex-col justify-center items-center flex">
    <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
      <div className="grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-start items-center flex">
        <div className="justify-start items-center flex">
          <div className="mix-blend-difference text-center inline-flex justify-between">
            <span className='justify-start' style={{ color: 'white', opacity: 0.8, fontSize: '1rem', fontWeight: 'bold' }}>kunaaal</span>
            <span className='justify-start' style={{ color: 'white', opacity: 0.4, fontSize: '1rem', fontWeight: 'normal' }}>@tria</span>
          </div>
        </div>
      </div>
      <div className="w-[99px] h-10 px-5 py-3 mix-blend-difference bg-white bg-opacity-90 rounded-[20px] justify-center items-center flex">
        <div className="justify-center items-center flex">
         <button onClick={()=>{navigate("/signUpPassword")}}> <div className="text-center text-stone-950 text-base font-semibold font-Montserrat leading-tight">Next</div></button>
        </div>
      </div>
    </div>
  </div>
</div>


              </div>
              <Footer/>
            </div>
          </div>
        </div>
  );
}
