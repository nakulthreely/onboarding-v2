//@ts-nocheck
import React, {useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ConfirmEmail from "./Pages/ConfirmEmail";
import SignUp from "./Pages/SignUp/EmailPage";
import PasswordPage from "./Pages/SignUp/SignUpPassword";
import SignInPassword from "./Pages/SignIn/SignInPassword";
import SignUpPassword from "./Pages/SignUp/SignUpPassword";
import Welcome from "./Pages/WelcomePage/Welcome";
import Onboarding from "./Pages/Onboarding";
import ConnectWallet from "./Pages/ConnectWallet";
import ConnectingAnimation from "./Pages/ConnectWallet/ConnectingAnimation";
import CreateWallet from "./Pages/CreateWallet";
import SignUpPasswordConfirm from "./Pages/SignUp/SignUpPasswordConfirm";
import LoaderPage from "./Pages/Loader";

// import { configureChains, createConfig, WagmiConfig } from "wagmi";
// import {
//   mainnet,
//   polygon,
//   optimism,
//   arbitrum,
//   base,
//   zora,
//   goerli,
// } from "wagmi/chains";
// import { publicProvider } from "wagmi/providers/public";
// import { MetaMaskConnector } from "wagmi/connectors/metaMask";
// import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
// import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import "./index.css";
import NavContext from "./NavContext";
import { IframeController } from "./connect/controllers/iframe.controller";
import { UserController, AuthController } from '@tria-sdk/core';
// import { useAccount } from '@tria-sdk/connect'


window.Buffer = window.Buffer || require("buffer").Buffer;

// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [
//     mainnet,
//     polygon,
//     optimism,
//     arbitrum,
//     base,
//     zora,
//     ...(process.env.REACT_APP_ENABLE_TESTNETS === "true" ? [goerli] : []),
//   ],
//   [publicProvider()]
// );

// export const getDefaultWallets = ({ appName, projectId, chains }) => {
//   // Set up connectors
//   const connectors = [
//     new CoinbaseWalletConnector({
//       chains,
//       options: {
//         appName,
//         shimDisconnect: true,
//       },
//     }),
//     new WalletConnectConnector({
//       chains,
//       options: {
//         projectId,
//         qrcode: true,
//         shimDisconnect: true,
//       },
//     }),
//     new MetaMaskConnector({
//       chains,
//       options: {
//         shimDisconnect: true,
//         UNSTABLE_shimOnConnectSelectAccount: true,
//       },
//     }),
//   ];
//   return { connectors };
// };

// const { connectors } = getDefaultWallets({
//   appName: "Customer App powered by Tria",
//   projectId: "bd38d3892c8fd8bc9dabf6fced0bd3c6",
//   chains,
// });

const iframe = new IframeController(
  "https://opensea.com",
  "https://wallet.tria.so"
);
console.log("iframe", iframe);

const authController = new AuthController('https://staging.tria.so');

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
//   webSocketPublicClient,
// });

const createEncodedData=(data)=>{
  const encodedParams = btoa(
    JSON.stringify(data));
    return encodedParams;
}

export const useTriaSendTransaction = () => {
  const[iframe,setIframe]=useState('');
  const sendTransaction = async (sendDataFromDapp) => {
    const iframeEncodedData=createEncodedData(sendDataFromDapp);
    const sendIframeUrl=`https://auth-7rin.vercel.app/send/${iframeEncodedData}`;
    // ifrm=sendIframeUrl;
    setIframe(sendIframeUrl);
     return iframe;
  };
  const signMessage = async (message) => {
      const iframeEncodedData=createEncodedData(message);
      const signIframeUrl=`https://auth-7rin.vercel.app/signMessage/${iframeEncodedData}`;
      setIframe(signIframeUrl);
      // ifrm=signIframeUrl;
      return iframe;
    };
  return {
    sendTransaction,
    signMessage
  }
}


// export const  triaSendTransaction = ({ appDomain, appLogo }) => {
//   const sendTransaction = async (sendDataFromDapp) => {
  
//   const loginData=  { loginType: 'native', triaName:triaName , socialName: localStorage?.getItem("socialNetwork"), userId: '', input: '' }

//     // const { from, to, chainName, tokenAddress, amount }=sendDataFromDapp;
//     const iframeEncodedData=createEncodedData({...sendDataFromDapp,...loginData,appDomain,appLogo});
//     const sendIframeUrl={authURL}/send/iframeEncodedData;
//     setIframeURL(sendIframeUrl);
//   };


//   const signMessage = async (message) => {
//     const loginData=  { loginType: 'native', triaName:triaName , socialName: localStorage?.getItem("socialNetwork"), userId: '', input: '' }

//       // const { message }=message;
//       const iframeEncodedData=createEncodedData({...message,...loginData,appDomain,appLogo});
//       const signIframeUrl={authURL}/signMessage/iframeEncodedData;
//       setIframeURL(signIframeUrl);
//     };

//   return {
//     sendTransaction,
//     signMessage
//   };
// };


  // function encodeParamas(params:typeof transactionPayload): string{
  // const {
  //   triaName,
  //   appDomain
  //   senderName,
  //   accessToken,
  //   darkMode,


  // } = params
  //   const encodedParams = btoa(
  //     JSON.stringify({

  //       qouteRate,
  //       senderBalance,
  //       senderName,
  //       recepientName,
  //       senderLogo,
  //       recepientLogo,
  //       chainLogo,
  //       chainName,
  //       appLogo,
  //       appDomain,
  //       accessToken,
  //       darkMode,
  //       tokenName,
  //       tokenLogo,
  //     })
  //   );
  //   // const iframeUrl = encodedParams;
  //   // return iframeUrl
   
  // }


  

 export const TriaConnectProvider = () => {
  const [renderAuthIframe, setRenderAuthIframe] = useState(false);
  useEffect(() => {
    // Function to get the value of a URL parameter
    const getQueryParam = (param: string) => {
      return new URLSearchParams(window.location.search).get(param);
    };

    // Check if the URL parameter is as expected
    const isVerified = getQueryParam('verified') === 'true';
    setRenderAuthIframe(isVerified);
  }, []);
  return (
    <>
      {renderAuthIframe && (
        <iframe
          src="https://auth.tria.so/verified"
          title="Auth Verification"
          style={{ display: 'none' }}
        />
      )}
    </>
  );
};





const Application = ({ dappName, logo }) => {

  const [view, setView] = useState("Home");
  const [triaName, setTriaName] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [email, setEmail] = useState("")
  const [showWallet, setShowWallet] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [appDomain, setAppDomain] = useState<string>()
  const [iframeURL, setIframeURL]=useState();
  const WALLET_BASE_URL = "https://reliable-semifreddo-e8e93e.netlify.app/"
  const [accessToken, setAccessToken] = useState<string>()
  const darkMode = true;



  // const { account } = useAccount();


  useEffect(() => {
    setInterval(() => {
      // console.log('account', account)
      if (localStorage.getItem('tria.wallet.store') !== null) {
        setShowOnboarding(false)
        setTriaName(JSON.parse(localStorage.getItem('tria.wallet.store'))?.triaName)
        setUserAddress(JSON.parse(localStorage.getItem('tria.wallet.store'))?.evm?.address)
      } else {
        setShowOnboarding(true)
      }
    }, 500)
  }, [])
  useEffect(()=>{
    setInterval(()=>{
      setShowOnboarding(true)
    },1000)
  },[])

  useEffect(()=>{
    const item = localStorage.getItem("access_token");
    setAccessToken(item);
    setAppDomain(window.parent.origin);
    
  },[triaName])

  useEffect(()=>{
    const encodedParams = btoa(JSON.stringify({triaName, userAddress, appDomain, darkMode, logo, accessToken}))
    console.log(encodedParams, triaName,accessToken,logo,appDomain,darkMode)
    setIframeURL(`https://reliable-semifreddo-e8e93e.netlify.app/${encodedParams}`);

  },[triaName])

  useEffect(() => {
  console.log("WALLET URL ---->", iframeURL);
}, [iframeURL]);

  const nav_context_object = {
    view,
    setView,
    triaName,
    setTriaName,
    dappName,
    logo,
    authController,
    setShowWallet,
    setShowOnboarding,
    showOnboarding,
    email,
    setEmail
  };

  return (
    <>
      {/* <WagmiConfig config={wagmiConfig}> */}
        <NavContext.Provider value={nav_context_object}>
          {/* <Router> */}
           {!triaName && showOnboarding &&<div className="rounded-[20px] overflow-hidden fixed top-[20%] left-[40%]">
                <div className="fixed rounded-[20px] overflow-hidden">
                  <iframe width="314" height="586" src="https://auth-7rin.vercel.app/" />
                </div>
              </div>}
            {showWallet && (
              <div className="bg flex  justify-between bg-black">
                <div className="mb-4 mr-2 fixed right-2 rounded-[20px] bottom-[130px] overflow-hidden">
                  <iframe width="312" height="586" src={iframeURL} />
                </div>
              </div>

              // <div className="bg flex  justify-between bg-black">
              //   <div className="mr-2 fixed right-2 bottom-16 rounded-[20px] overflow-hidden">
              //     <iframe width="314" height="588" className="" src="https://reliable-semifreddo-e8e93e.netlify.app/" />
              //   </div>
              // </div>
            )}
            {/* {showOnboarding && (<div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md border border-gray-800 rounded-xl ${isDarkMode ? "dark" : ""}`}>
              <div className="">
                {view === "Home" ? <Home /> : null}
                {view === "Sign Up" ? <SignUp /> : null}
                {view === "Confirm Email" ? <ConfirmEmail /> : null}
                {view === "Sign In Password" ? <SignInPassword /> : null}
                {view === "Welcome" ? <Welcome /> : null}
                {view === "Onboarding" ? <Onboarding /> : null}
                {view === "Create A Wallet" ? <CreateWallet /> : null}

              </div>
            </div>)} */}
          {/* </Router> */}
          {triaName && (
            <div
              className="wallet_icon fixed w-[80px] bottom-4 right-8 cursor-pointer"
              onClick={() => {
                setShowWallet(!showWallet);
              }}
            >
              <div className=" ">
                <div className="">
                  <svg width="134" height="134" viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1316_13027)">
                      <rect x="35" y="35" width="64" height="64" rx="32" fill="url(#paint0_linear_1316_13027)" />
                    </g>
                    <g filter="url(#filter1_d_1316_13027)">
                      <rect x="37.5098" y="37.5098" width="58.9804" height="58.9804" rx="29.4902" fill="url(#paint1_linear_1316_13027)" shape-rendering="crispEdges" />
                      <g clip-path="url(#clip0_1316_13027)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M81 53H53V81H81V53ZM67.8533 61.2654V64.9058L73.8652 62.5352V65.2285C73.8652 65.8062 73.5281 66.3228 73.0206 66.5229L67.8533 68.5606V65.8728C67.8498 65.2986 67.5136 64.7863 67.0087 64.5872L62.686 62.8826C62.1784 62.6824 61.8414 62.1658 61.8414 61.5881V58.8948L67.8533 61.2654ZM67.8533 68.5767V69.2782H67.8618V76.8857H65.3848V71.2581L62.686 70.1938C62.1784 69.9937 61.8414 69.4771 61.8414 68.8993V66.206L67.8533 68.5767Z" fill="white" />
                      </g>
                      <rect x="37.7598" y="37.7598" width="58.4804" height="58.4804" rx="29.2402" stroke="#9A87FF" stroke-width="0.5" shape-rendering="crispEdges" />
                    </g>
                    <defs>
                      <filter id="filter0_d_1316_13027" x="0" y="0" width="134" height="134" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="17.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.567674 0 0 0 0 0.48 0 0 0 0 1 0 0 0 0.35 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1316_13027" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1316_13027" result="shape" />
                      </filter>
                      <filter id="filter1_d_1316_13027" x="6.50977" y="6.50977" width="120.98" height="120.98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="15.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.567674 0 0 0 0 0.48 0 0 0 0 1 0 0 0 0.68 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1316_13027" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1316_13027" result="shape" />
                      </filter>
                      <linearGradient id="paint0_linear_1316_13027" x1="35" y1="35" x2="112.218" y2="65.1631" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#D2CAF8" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_1316_13027" x1="37.5098" y1="37.5098" x2="108.671" y2="65.3071" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#9F8BFF" />
                        <stop offset="1" stop-color="#7053FF" />
                      </linearGradient>
                      <clipPath id="clip0_1316_13027">
                        <rect x="53" y="53" width="28" height="28" rx="6" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>
              </div>
            </div>
          )}
        </NavContext.Provider>
      {/* </WagmiConfig> */}
    </>
  );
};

export default Application;