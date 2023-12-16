
import React, { useState, useEffect } from "react";
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
import Draggable from "react-draggable";
// import { useAccount } from '@tria-sdk/connect'
// import {useSignMessage} from "./hooks/useSignMessage";
// import {useSendTransaction} from "./hooks/useSendTransaction";
// import {useContractWrite} from "./hooks/useContractWrite";

export { useSignMessage, useSendTransaction, useContractWrite, useContractRead } from "./hooks"

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

// const iframe = new IframeController(
//   "https://opensea.com",
//   "https://wallet.tria.so"
// );
// console.log("iframe", iframe);
const authUrl = "https://auth.tria.so";

const authController = new AuthController('https://staging.tria.so');

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
//   webSocketPublicClient,
// });

const createEncodedData = (data: any) => {
  const encodedParams = btoa(
    JSON.stringify(data));
  return encodedParams;
}

export const useTriaTransaction = () => {
  const createIframe = (iframeUrl: string) => {
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


  const sendTransaction = async (sendDataFromDapp: any) => {
    const iframeEncodedData = createEncodedData(sendDataFromDapp);
    const sendIframeUrl = `${authUrl}/send/${iframeEncodedData}`;
    const iframe = createIframe(sendIframeUrl);
    return sendIframeUrl;
  };

  const signMessage = async (message: any) => {
    const iframeEncodedData = createEncodedData(message);
    const signIframeUrl = `${authUrl}/signMessage/${iframeEncodedData}`;
    const iframe = createIframe(signIframeUrl);
    return signIframeUrl;
  };

  const callContract = async (data: any) => {
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
const requestLoaderStyle = {
  display: 'flex',
  // cursor:'move',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60px',
  width: '60px',
  borderRadius: '100%',
  background: '#FFFFFF',
  //  boxShadow: isPressed ? '0 0 10px 0 rgba(0,0,0,0.2)' : '0 0 20px 0 rgba(0,0,0,0.25)',
  // transform: isPressed ? 'scale(0.80)' : 'scale(1)',
  transition: 'all 0.1s ease',
  cursor: 'pointer',
  zIndex: '9999'
};



export const TriaConnectProvider = ({triaStaging=false}) => {
  const [renderAuthIframe, setRenderAuthIframe] = useState(false);
  const [authIframeSrc, setAuthIframeSrc] = useState<string>("")
  useEffect(() => {
    // Function to get the value of a URL parameter
    const getQueryParam = (param: string) => {
      return new URLSearchParams(window.location.search).get(param);
    };

    // Check if the URL parameter is as expected
    const isVerified = getQueryParam('verified') === 'true';
    setRenderAuthIframe(isVerified);
    {triaStaging? setAuthIframeSrc("https://auth-tria.vercel.app/verified") : setAuthIframeSrc("https://auth.tria.so/verified") }
    
  }, []);
  return (
    <>
      {renderAuthIframe && (
        <iframe
          src={authIframeSrc}
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

interface ApplicationProps {
  dappName?: string;
  dappDomain?: string;
  uiType?: string;
  logo?: string;
  primaryColor?: string;
  supportedChains?: [];
  defaultChain?: string;
  darkMode?: boolean;
  triaStaging?: boolean;
  buttonPosition?: {x?:number , y?: number}
}

const initialChains = ["POLYGON", "ARBITRUM", "FUSE", "AVALANCHE", "BINANCE", "ETH", "FANTOM", "OPTIMISM"]


const Application: React.FC<ApplicationProps> = ({ dappName, dappDomain, uiType, logo, primaryColor = '#A855F7', supportedChains = initialChains, defaultChain = "POLYGON", darkMode=true, triaStaging= false, buttonPosition = {x:100, y:100}  }) => {

  const [view, setView] = useState("Home");
  const [triaName, setTriaName] = useState<string>();
  const [userAddress, setUserAddress] = useState(null);
  const [email, setEmail] = useState("")
  const [showWallet, setShowWallet] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [appDomain, setAppDomain] = useState<string>()
  const [iframeURL, setIframeURL] = useState<string>();
  const [accessToken, setAccessToken] = useState<string>()
  const [authIFrameUrl, setAuthIFrameUrl] = useState<string>("")
  const { account } = useAccount();
  const [stackui, setStackUi] = useState<boolean>(false);
  const [wasOpen, setWasOpen] = useState<boolean>(false)
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [walletVisible, setWalletVisible] = useState<boolean>(false);
  const [posX, setPosX] = useState<number>();
  const [posY, setPosY] = useState<number>()
  const [buttonPosX, setButtonPosX] = useState(window.innerWidth - (buttonPosition?.x || 100));
  const [buttonPosY, setButtonPosY] = useState(window.innerHeight - (buttonPosition?.y || 100))
  const [currentTime, setCurrentTime] = useState<number>()
  const buttonBoundRight = window.innerWidth - 134;
  const buttonBoundBottom = window.innerHeight - 134;
  useEffect(() => {
    const handleWindowMouseMove = (e:MouseEvent) => {
      setCoords({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleWindowMouseMove,
      );
    };
   
  }, []);

  useEffect(() => {
     console.log(buttonPosX, buttonPosY)
  }, [buttonPosX,buttonPosY])

    const handleStartDragging = () => {
    var now = new Date();
    setCurrentTime(now.getTime());
    // alert(now.getTime())
  };

  const handleStopDragging = () => {
    var now = new Date();
    console.log(coords)
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    setButtonPosX(coords.x)
      setButtonPosY(coords.y)
      if(window.innerWidth - coords.x < 312 && window.innerHeight - coords.y  < 586){
        setPosX(window.innerWidth - 312)
        setPosY(window.innerHeight - 586)
      }else if(window.innerWidth - coords.x < 312){
         setPosX(window.innerWidth - 312)
         setPosY(coords.y)
      }else if(window.innerHeight - coords.y <  586){
        setPosX(coords.x)
        setPosY(window.innerHeight - 586)
      }else{
        setPosX(coords.x)
      setPosY(coords.y)
      }
    if(currentTime && now.getTime() - currentTime< 200){
      handleWalletButtonClick()
    } 
  };
 
  useEffect(() => {
    if (!account && triaName) {
      console.log("Account is null, reloading the page");
      localStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    }
  }, [account, triaName]);



  useEffect(() => {
    setInterval(() => {
      // console.log('account', account)
      if (localStorage.getItem('tria.wallet.store') !== null) {
        setShowOnboarding(false)
        setTriaName(JSON.parse(localStorage.getItem('tria.wallet.store') || "")?.triaName)
        setUserAddress(JSON.parse(localStorage.getItem('tria.wallet.store') || "")?.evm?.address)

      } else if (localStorage.getItem("wagmi.connected") === 'true') {
        setShowOnboarding(false);
        const wallet = localStorage.getItem("wagmi.connected")
        console.log(wallet)
      } else {
        setShowOnboarding(true);
      }
    }, 500)
  }, [])
  useEffect(() => {
    setInterval(() => {
      setShowOnboarding(true)
    }, 1000)
  }, [])

  useEffect(() => {
    const item = localStorage.getItem("access_token");
    setAccessToken(item || "");
    setAppDomain(window.parent.origin);

  }, [triaName])

  const fromDapp = true;

  useEffect(() => {
    const encodedParams = btoa(JSON.stringify({ triaName, userAddress, appDomain, darkMode, logo, accessToken, primaryColor, fromDapp, dappName, defaultChain, supportedChains }))
    console.log(encodedParams, userAddress, triaName, accessToken, logo, appDomain, darkMode, primaryColor, fromDapp, dappName, defaultChain, supportedChains)
    {triaStaging? setIframeURL(`https://staging-tria-wallet.vercel.app/${encodedParams}`)  :setIframeURL(`https://wallet.tria.so/${encodedParams}`)};

  }, [triaName, userAddress])

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
    console.log("log from sdk ----->", dappName, logo)
    if (dappName && dappName?.length > 0 && logo && logo?.length > 0) {
      {triaStaging? setAuthIFrameUrl(`https://auth-tria.vercel.app/?dappName=${dappName}&dappLogo=${logo}&stackui=${uiType}&dappDomain=${dappDomain}`)
      : setAuthIFrameUrl(`https://auth.tria.so/?dappName=${dappName}&dappLogo=${logo}&stackui=${uiType}&dappDomain=${dappDomain}`)};
    }
  }, [dappName, logo])

  useEffect(() => {
    if (uiType === "yes") {
      setStackUi(true);
    }
  }, [uiType])

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
    const handleClickOutside = (event: any) => {
      // Select the iframe element
      const iframeElement = document.getElementById('triaWallet'); // Use the actual ID or selector of your iframe

      if (iframeElement && !iframeElement.contains(event.target)) {
        // The click is outside the iframe
        setWalletVisible(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (primaryColor) {
      document.documentElement.style.setProperty('--primary-color', primaryColor);
    }
  }, [primaryColor]);

  const handleWalletButtonClick = () => {
    if (showWallet) {
      setWalletVisible(true);
    }
    else {
      setShowWallet(true);
      setWalletVisible(true);
    }
  }



  return (
    <>
    {/* //  */}
    
      {/* <WagmiConfig config={wagmiConfig}> */}
      <NavContext.Provider value={nav_context_object}>
        {/* <Router> */}
        {!triaName && showOnboarding &&
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
            <iframe width="314" height="586" src={authIFrameUrl} allow="publickey-credentials-get" />
          </div>}
        {showWallet && triaName && userAddress && (
          <div id="triaWallet"
            style={{ 
              display: walletVisible ? 'block' : 'none', 
              justifyItems: 'space-between', 
              backgroundColor: 'transparent', 
              position: 'fixed',
              top:  posY, 
              left:  posX, 
              zIndex: 9999, }}
          >
            {/* <div className="mb-4 mr-2 relative rounded-[20px]">
              <div className="absolute w-[312px] h-[40px] rounded-[20px] top-[-38px] flex items-end justify-center" >
                <div className="cursor-pointer" onClick={() => { setWalletVisible(false) }}>
                  <WalletCloseButton />

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
            </div> */}
            <div
              style={{
                marginBottom: '4px',
                marginRight: '2px',
                position: 'relative',
                borderRadius: '20px',

              }}
            >
              <div
                style={{
                  position: 'absolute',
                  width: '312px',
                  height: '40px',
                  borderRadius: '20px',
                  top: '-38px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',

                }}
              >
                {/* Content for WalletCloseButton */}
                <div onClick={() => { setWalletVisible(false) }} style={{ cursor: 'pointer' }}>
                  <WalletCloseButton />
                </div>
              </div>
              <div
                style={{
                  height: '586px',
                  width: '312px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  backgroundColor: '#101010',

                }}
              >
                <iframe
                  width="312"
                  height="586"
                  src={iframeURL}
                  allow="clipboard-read; clipboard-write; publickey-credentials-get"
                  style={{
                    backgroundColor: '#101010',

                  }}
                />
              </div>
            </div>
          </div>

        )}

        {triaName && !walletVisible && (
       
        <Draggable
          defaultPosition={{x: buttonPosX, y: buttonPosY}}
          onStart= {handleStartDragging}
          onStop={handleStopDragging}
          // onDrag={handleMouseMove}
          bounds={{top: 0, left:0, right:buttonBoundRight, bottom:buttonBoundBottom}}
          // style={{position:'fixed', left: x, top: y}} 
          >
          <div
            style={
              {
  // display: 'flex',
  // position: 'fixed',
  // cursor:'move',
  // flexDirection: 'row',
  // justifyContent: 'center',
  // alignItems: 'center',
  // height: '60px',
  // width: '60px',
  // borderRadius: '100%',
  // background: '#FFFFFF',
  //  boxShadow: isPressed ? '0 0 10px 0 rgba(0,0,0,0.2)' : '0 0 20px 0 rgba(0,0,0,0.25)',
  // transform: isPressed ? 'scale(0.80)' : 'scale(1)',
  // transition: 'all 0.1s ease',
  cursor: 'pointer',
  zIndex: 9999
}
            }
            // onClick={handleWalletButtonClick}
          >
            <TriaWalletButton bgColor={primaryColor || "#A855F7"} stackui={stackui} />

          </div>
          </Draggable>
        )}
      </NavContext.Provider>
      {/* </WagmiConfig> */}
      </>
  );
};


export default Application;
