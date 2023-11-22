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
import { TriaWalletButton } from "./Components/TriaWalletButton";
import WalletCloseButton from "./Components/WalletCloseButton";
import { useAccount } from "@tria-sdk/connect";
// import { useAccount } from '@tria-sdk/connect'
// import {useSignMessage} from "./hooks/useSignMessage";
// import {useSendTransaction} from "./hooks/useSendTransaction";
// import {useContractWrite} from "./hooks/useContractWrite";

export {useSignMessage,useSendTransaction,useContractWrite} from "./hooks"

// export {useSignMessage,useSendTransaction,useContractWrite};

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
const authUrl="https://auth.tria.so";

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

export const useTriaTransaction = () => {
  const createIframe = (iframeUrl) => {
    const iframeContainer = document.createElement("div");
    iframeContainer.id = "triaWallet";
    iframeContainer.className = "bg flex justify-between bg-transparent absolute bottom-4 right-2";
    iframeContainer.style.position = "absolute";
    iframeContainer.style.bottom = "4px";
    iframeContainer.style.right = "2px";

    const innerContainer = document.createElement("div");
    innerContainer.className = "mb-4 mr-2 relative rounded-[20px]";

    const iframeWrapper = document.createElement("div");
    iframeWrapper.className = "h-[586px] w-[312px] rounded-[20px] overflow-hidden";

    const iframe = document.createElement("iframe");
    iframe.width = "312";
    iframe.height = "586";
    iframe.src = iframeUrl;
    iframe.allow = "publickey-credentials-get";
    iframe.style.border = "none";

    // Append elements to construct the desired structure
    iframeWrapper.appendChild(iframe);
    innerContainer.appendChild(iframeWrapper);
    iframeContainer.appendChild(innerContainer);

    // Append iframeContainer to the document body or a specific container
    document.body.appendChild(iframeContainer);

    // Return any relevant data if needed
    
  };

  
  const sendTransaction = async (sendDataFromDapp) => {
    const iframeEncodedData = createEncodedData(sendDataFromDapp);
    const sendIframeUrl = `${authUrl}/send/${iframeEncodedData}`;
    const iframe = createIframe(sendIframeUrl);
    return sendIframeUrl;
  };

  const signMessage = async (message) => {
    const iframeEncodedData = createEncodedData(message);
    const signIframeUrl = `${authUrl}/signMessage/${iframeEncodedData}`;
    const iframe = createIframe(signIframeUrl);
    return signIframeUrl;
  };

  const callContract = async (data) => {
    const iframeEncodedData = createEncodedData(data);
    const signIframeUrl = `${authUrl}/mint/${iframeEncodedData}`;
    const iframe = createIframe(signIframeUrl);
    return signIframeUrl;
  };
  return {
    sendTransaction,
    signMessage,
    callContract
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

// const getAccessToken = () => {
//   const [accessToken, setAccessToken] = useState<string>("");
//   useEffect(() => {
//     const getAccessToken =
//   },[])
//   return
// }




const Application = ({ dappName, dappDomain, uiType, logo,  primaryColor }) => {

  const [view, setView] = useState("Home");
  const [triaName, setTriaName] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [email, setEmail] = useState("")
  const [showWallet, setShowWallet] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [appDomain, setAppDomain] = useState<string>()
  const [iframeURL, setIframeURL]=useState();
  const WALLET_BASE_URL = "https://wallet.tria.so/"
  const [accessToken, setAccessToken] = useState<string>()
  const darkMode = true;
  const [authIFrameUrl, setAuthIFrameUrl] = useState<string>("")
  const {account} = useAccount();
   useEffect(() => {
    if (!account && triaName) {
      console.log("Account is null, reloading the page");
      localStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    } 
  }, [account, triaName]);
  // useEffect(() => {
  //   if(!showOnboarding){
  //     console.log("store deleted!")
  //     console.log(account)
  //   }
  // },[])


  useEffect(() => {
    setInterval(() => {
      // console.log('account', account)
      if (localStorage.getItem('tria.wallet.store') !== null) {
        setShowOnboarding(false)
        setTriaName(JSON.parse(localStorage.getItem('tria.wallet.store'))?.triaName)
        setUserAddress(JSON.parse(localStorage.getItem('tria.wallet.store'))?.evm?.address)
      } else if(localStorage.getItem("wagmi.connected") ===true){
        setShowOnboarding(false);
        const wallet = localStorage.getItem("wagmi.connected")
        console.log(wallet)
      }else{
        setShowOnboarding(true);
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

  const fromDapp = true;

  useEffect(()=>{
    const encodedParams = btoa(JSON.stringify({triaName, userAddress, appDomain, darkMode, logo, accessToken, primaryColor, fromDapp}))
    console.log(encodedParams, triaName,accessToken,logo,appDomain,darkMode, primaryColor, fromDapp)
    setIframeURL(`https://wallet.tria.so/${encodedParams}`);

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

  useEffect(() => {
    console.log("log from sdk ----->",dappName, logo)
    if(dappName?.length > 0 && logo?.length > 0){
      setAuthIFrameUrl(`https://auth.tria.so/?dappName=${dappName}&dappLogo=${logo}&stackui=${uiType}&dappDomain=${dappDomain}`);
    }
  },[dappName, logo])

  // useEffect(() => {
  //   console.log("userAddress log from sdk ---->",userAddress)
  // },[userAddress])

  //   useEffect(() => {
  //       const handleStorageChange = (event) => {
  //           if (event.key === 'tria.wallet.store') {
  //               // Check if the specific localStorage item has been cleared or changed
  //               // Update the showWallet state based on your specific condition
  //               const data = event.newValue;
  //               if (!data) {
  //                   setShowWallet(false);
  //                   setTriaName(null);
  //                   setShowOnboarding(true);
  //                   alert("logged out")
  //               }
  //           }
  //       };

  //       // Add event listener for localStorage changes
  //       window.addEventListener('storage', handleStorageChange);

  //       // Cleanup the event listener
  //       return () => {
  //           window.removeEventListener('storage', handleStorageChange);
  //       };
  //   }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Select the iframe element
      const iframeElement = document.getElementById('triaWallet'); // Use the actual ID or selector of your iframe

      if (iframeElement && !iframeElement.contains(event.target)) {
        // The click is outside the iframe
        setShowWallet(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  return (
    <>
      {/* <WagmiConfig config={wagmiConfig}> */}
      <NavContext.Provider value={nav_context_object}>
        {/* <Router> */}
        {!triaName && showOnboarding &&<div className="rounded-[20px] overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <iframe width="314" height="586" src={authIFrameUrl} allow="publickey-credentials-get"/>
          </div>}
        {showWallet && (
          <div id="triaWallet" className="bg flex  justify-between bg-transparent absolute bottom-4 right-2  ">
            <div className="mb-4 mr-2 relative rounded-[20px]">
              <div className="absolute w-[312px] h-[40px] rounded-[20px] top-[-38px] flex items-end justify-center" >
                {/* <img src='./WalletCloseButton.svg' alt='' className="cursor-pointer"  onClick={() => {setShowWallet(false)}}/> */}
                <div className="cursor-pointer" onClick={()=>{setShowWallet(false)}}>
                  <WalletCloseButton/>

                </div>
              </div>
              <div className="h-[586px] w-[312px] rounded-[20px] overflow-hidden bg-[#101010]">
          <iframe
          width="312"
          height="586"
          src={iframeURL}
          allow="clipboard-read; clipboard-write; publickey-credentials-get"
          style={{ backgroundColor: '#101010' }}
          />
              </div>
            </div>
          </div>

        )}
       
        {triaName && !showWallet && (
          <div
            className="wallet_icon absolute w-[80px] bottom-4 right-8 cursor-pointer"
            onClick={() => {
              setShowWallet(!showWallet);
            }}
          >
            <TriaWalletButton bgColor={primaryColor} />

          </div>
        )}
      </NavContext.Provider>
      {/* </WagmiConfig> */}
    </>
  );
};


export default Application;
