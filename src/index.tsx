import React, { useState, useEffect } from 'react'
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import './index.css'
import NavContext from './NavContext'
import { AuthController } from '@tria-sdk/core'
import { TriaWalletButton } from './Components/TriaWalletButton'
import WalletCloseButton from './Components/WalletCloseButton'
import { useAccount, useListenerCO } from '@tria-sdk/connect'
import Draggable from 'react-draggable'
import Wallets from './Components/ExternalWallets'
export {
  useSignMessage,
  useSendTransaction,
  useContractWrite,
  useContractRead,
} from './hooks'

window.Buffer = window.Buffer || require('buffer').Buffer

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    ...(process.env.REACT_APP_ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [publicProvider()]
);

//@ts-ignore
export const getDefaultWallets = ({ appName, projectId, chains }) => {
  // Set up connectors
  const connectors = [
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName,
        //@ts-ignore
        shimDisconnect: true,
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId,
        //@ts-ignore
        qrcode: true,
        shimDisconnect: true,
      },
    }),
    new MetaMaskConnector({
      chains,
      options: {
        shimDisconnect: true,
        UNSTABLE_shimOnConnectSelectAccount: true,
      },
    }),
  ];
  return { connectors };
};

const { connectors } = getDefaultWallets({
  appName: "Customer App powered by Tria",
  projectId: "bd38d3892c8fd8bc9dabf6fced0bd3c6",
  chains,
});


const authUrl = 'https://auth.tria.so'

const authController = new AuthController('https://staging.tria.so')

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const createEncodedData = (data: any) => {
  const encodedParams = btoa(JSON.stringify(data))
  return encodedParams
}

export const useTriaTransaction = () => {
  const createIframe = (iframeUrl: string) => {
    const iframeContainer = document.createElement('div')
    iframeContainer.id = 'triaWallet'
    iframeContainer.className = 'bg flex justify-between bg-transparent absolute bottom-4 right-2'
    iframeContainer.style.position = 'absolute'
    iframeContainer.style.bottom = '4px'
    iframeContainer.style.right = '2px'

    const innerContainer = document.createElement('div')
    innerContainer.className = 'mb-4 mr-2 relative rounded-[20px]'

    const iframeWrapper = document.createElement('div')
    iframeWrapper.className = 'h-[586px] w-[312px] rounded-[20px] overflow-hidden'

    const iframe = document.createElement('iframe')
    iframe.width = '312'
    iframe.height = '586'
    iframe.src = iframeUrl
    iframe.allow = 'publickey-credentials-get'
    iframe.style.border = 'none'

    // Append elements to construct the desired structure
    iframeWrapper.appendChild(iframe)
    innerContainer.appendChild(iframeWrapper)
    iframeContainer.appendChild(innerContainer)

    // Append iframeContainer to the document body or a specific container
    document.body.appendChild(iframeContainer)

    // Return any relevant data if needed
  }

  const sendTransaction = async (sendDataFromDapp: any) => {
    const iframeEncodedData = createEncodedData(sendDataFromDapp)
    const sendIframeUrl = `${authUrl}/send/${iframeEncodedData}`
    const iframe = createIframe(sendIframeUrl)
    return sendIframeUrl
  }

  const signMessage = async (message: any) => {
    const iframeEncodedData = createEncodedData(message)
    const signIframeUrl = `${authUrl}/signMessage/${iframeEncodedData}`
    const iframe = createIframe(signIframeUrl)
    return signIframeUrl
  }

  const callContract = async (data: any) => {
    const iframeEncodedData = createEncodedData(data)
    const signIframeUrl = `${authUrl}/mint/${iframeEncodedData}`
    const iframe = createIframe(signIframeUrl)
    return signIframeUrl
  }
  return {
    sendTransaction,
    signMessage,
    callContract,
  }
}


export const TriaConnectProvider = ({ triaStaging = false }) => {
  const [renderAuthIframe, setRenderAuthIframe] = useState(false)
  const [authIframeSrc, setAuthIframeSrc] = useState<string>('')
  useEffect(() => {
    // Function to get the value of a URL parameter
    const getQueryParam = (param: string) => {
      return new URLSearchParams(window.location.search).get(param)
    }

    // Check if the URL parameter is as expected
    const isVerified = getQueryParam('verified') === 'true'
    setRenderAuthIframe(isVerified)
    {
      triaStaging
        ? setAuthIframeSrc('https://auth-tria.vercel.app/verified')
        : setAuthIframeSrc('https://auth.tria.so/verified')
    }
  }, [])
  return (
    <>
      {renderAuthIframe && (
        <iframe
          src={authIframeSrc}
          title='Auth Verification'
          style={{ display: 'none' }}
        />
      )}
    </>
  )
}


interface ApplicationProps {
  dappName?: string
  dappDomain?: string
  uiType?: string
  logo?: string
  primaryColor?: string
  supportedChains?: []
  defaultChain?: string
  darkMode?: boolean
  triaStaging?: boolean
  buttonPosition?: { x?: number; y?: number }
}

const initialChains = [
  'POLYGON',
  'ARBITRUM',
  'FUSE',
  'AVALANCHE',
  'BINANCE',
  'ETH',
  'FANTOM',
  'OPTIMISM',
]

const Application: React.FC<ApplicationProps> = ({
  dappName,
  dappDomain,
  uiType,
  logo,
  primaryColor = '#A855F7',
  supportedChains = initialChains,
  defaultChain = 'POLYGON',
  darkMode = true,
  triaStaging = false,
  buttonPosition = { x: 100, y: 100 },
}) => {

  const [view, setView] = useState('Home')
  const [triaName, setTriaName] = useState<string>()
  const [userAddress, setUserAddress] = useState(null)
  const [email, setEmail] = useState('')
  const [showWallet, setShowWallet] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [appDomain, setAppDomain] = useState<string>()
  const [iframeURL, setIframeURL] = useState<string>()
  const [accessToken, setAccessToken] = useState<string>()
  const [authIFrameUrl, setAuthIFrameUrl] = useState<string>('')
  const { account } = useAccount()
  const [stackui, setStackUi] = useState<boolean>(false)
  const [wasOpen, setWasOpen] = useState<boolean>(false)
  const [externalWallet, setExternalWallet] = useState<boolean>(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [walletVisible, setWalletVisible] = useState<boolean>(false)
  const [posX, setPosX] = useState<number>()
  const [posY, setPosY] = useState<number>()
  const [buttonPosX, setButtonPosX] = useState(
    window.innerWidth - (buttonPosition?.x || 100)
  )
  const [buttonPosY, setButtonPosY] = useState(
    window.innerHeight - (buttonPosition?.y || 100)
  )
  const [currentTime, setCurrentTime] = useState<number>()
  const buttonBoundRight = window.innerWidth - 134
  const buttonBoundBottom = window.innerHeight - 134
  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      setCoords({
        x: e.clientX,
        y: e.clientY,
      })
    }
    window.addEventListener('mousemove', handleWindowMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove)
    }
  }, [])

  useEffect(() => {
    console.log(buttonPosX, buttonPosY)
  }, [buttonPosX, buttonPosY])

  const handleStartDragging = () => {
    var now = new Date()
    setCurrentTime(now.getTime())
    // alert(now.getTime())
  }

  const handleStopDragging = () => {
    var now = new Date()
    console.log(coords)
    console.log(window.innerWidth)
    console.log(window.innerHeight)

    // console.log(first)
    if (
      window.innerWidth - coords.x < 312 &&
      window.innerHeight - coords.y < 586
    ) {
      setPosX(window.innerWidth - 312)
      setPosY(window.innerHeight - 586)
    } else if (window.innerWidth - coords.x < 312) {
      setPosX(window.innerWidth - 312)
      setPosY(coords.y)
    } else if (window.innerHeight - coords.y < 586) {
      setPosX(coords.x)
      setPosY(window.innerHeight - 586)
    } else {
      setPosX(coords.x)
      setPosY(coords.y)
    }
    if (now.getTime() - (currentTime || 0) < 200) {
      handleWalletButtonClick()
      setButtonPosX(coords.x - (coords.x - buttonPosX))
      setButtonPosY(coords.y - (coords.y - buttonPosY))
    } else {
      if (
        window.innerWidth - coords.x < 100 &&
        window.innerHeight - coords.y < 100
      ) {
        setButtonPosX(coords.x - 100)
        setButtonPosY(coords.y - 100)
      } else if (window.innerWidth - coords.x < 100) {
        setButtonPosX(coords.x - 100)
        setButtonPosY(coords.y)
      } else if (window.innerHeight - coords.y < 100) {
        setButtonPosY(coords.y - 100)
        setButtonPosX(coords.x)
      } else if (coords.x < 100) {
        setButtonPosY(coords.y)
        setButtonPosX(coords.x + 100)
      } else if (coords.y < 100) {
        setButtonPosY(coords.y + 100)
        setButtonPosX(coords.x)
      } else if (coords.x < 100 && coords.y < 100) {
        setButtonPosX(coords.x + 100)
        setButtonPosY(coords.y + 100)
      } else {
        setButtonPosX(coords.x)
        setButtonPosY(coords.y)
      }
    }
  }

  useEffect(() => {
    if (!account && triaName) {
      console.log('Account is null, reloading the page')
      localStorage.setItem('hasReloaded', 'true')
      window.location.reload()
    }
  }, [account, triaName])

  useEffect(() => {
    setInterval(() => {
      // console.log('account', account)
      if (localStorage.getItem('tria.wallet.store') !== null) {
        setShowOnboarding(false)
        setTriaName(
          JSON.parse(localStorage.getItem('tria.wallet.store') || '')?.triaName
        )
        setUserAddress(
          JSON.parse(localStorage.getItem('tria.wallet.store') || '')?.evm
            ?.address
        )
      } else if (localStorage.getItem('wagmi.connected') === 'true') {
        setShowOnboarding(false)
        setExternalWallet(true)
      } else {
        setShowOnboarding(true)
      }
    }, 500)
  }, [])
  useEffect(() => {
    setInterval(() => {
      setShowOnboarding(true)
    }, 1000)
  }, [])

  useEffect(() => {
    const item = localStorage.getItem('access_token')
    setAccessToken(item || '')
    setAppDomain(window.parent.origin)
  }, [triaName])

  const fromDapp = true

  useEffect(() => {
    const encodedParams = btoa(
      JSON.stringify({
        triaName,
        userAddress,
        appDomain,
        darkMode,
        logo,
        accessToken,
        primaryColor,
        fromDapp,
        dappName,
        defaultChain,
        supportedChains,
      })
    )
    console.log(
      encodedParams,
      userAddress,
      triaName,
      accessToken,
      logo,
      appDomain,
      darkMode,
      primaryColor,
      fromDapp,
      dappName,
      defaultChain,
      supportedChains
    )
    {
      triaStaging
        ? setIframeURL(
          `https://staging-tria-wallet.vercel.app/${encodedParams}`
        )
        : setIframeURL(`https://wallet.tria.so/${encodedParams}`)
    }
  }, [triaName, userAddress])

  useEffect(() => {
    console.log('WALLET URL ---->', iframeURL)
  }, [iframeURL])

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
    setEmail,
  }

  useEffect(() => {
    console.log('log from sdk ----->', dappName, logo)
    if (dappName && dappName?.length > 0 && logo && logo?.length > 0) {
      {
        triaStaging
          ? setAuthIFrameUrl(
            `https://auth-tria.vercel.app/?dappName=${dappName}&dappLogo=${logo}&stackui=${uiType}&dappDomain=${dappDomain}`
          )
          : setAuthIFrameUrl(
            `https://auth.tria.so/?dappName=${dappName}&dappLogo=${logo}&stackui=${uiType}&dappDomain=${dappDomain}`
          )
      }
    }
  }, [dappName, logo])

  useEffect(() => {
    if (uiType === 'yes') {
      setStackUi(true)
    }
  }, [uiType])

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // Select the iframe element
      const iframeElement = document.getElementById('triaWallet') // Use the actual ID or selector of your iframe

      if (iframeElement && !iframeElement.contains(event.target)) {
        // The click is outside the iframe
        setWalletVisible(false)
      }
    }

    // Attach the event listener to the document
    document.addEventListener('mousedown', handleClickOutside)

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  //Useeffect for wallet position

  useEffect(() => {
    const walletPosition = { posX, posY }
    localStorage.setItem('wallet.position', JSON.stringify(walletPosition))
  }, [posX, posY])

  useEffect(() => {
    if (primaryColor) {
      document.documentElement.style.setProperty(
        '--primary-color',
        primaryColor
      )
    }
  }, [primaryColor])

  //Event Data States

  const { eventData } = useListenerCO(triaStaging ? "https://auth-tria.vercel.app" : "https://auth.tria.so")
  const [openNewFrame, setOpenNewFrame] = useState(false)
  const [frameUrl, setFrameUrl] = useState("")

  useEffect(() => {
    console.log("sdk event data --> ", eventData)
    var url = ''
    //@ts-ignore
    if (eventData?.message?.accountExists === false) {
      //@ts-ignore
      if (!triaStaging) {
        //@ts-ignore
        url = `https://auth.tria.so/signUpUserNameIframe/${eventData?.message?.social}/${eventData?.message?.userId}/${eventData?.message?.username}/${eventData?.message?.token}`
      } else {
        //@ts-ignore
        url = `https://auth-tria.vercel.app/signUpUserNameIframe/${eventData?.message?.social}/${eventData?.message?.userId}/${eventData?.message?.username}/${eventData?.message?.token}`
      }
      setOpenNewFrame(true)
      setFrameUrl(url)
    }
  }, [eventData])

  useEffect(() => {
    console.log("sdk otp event data --> ", eventData, logo, dappName);
    let url = ''
    //@ts-ignore
    if (eventData?.message?.type == 'otpLogin') {
      const encodedParams = btoa(JSON.stringify({ logo, dappName }));
      //@ts-ignore
      if (!triaStaging) {
        //@ts-ignore
        url = `https://auth.tria.so/phoneEmailOtp/?dappName=${dappName}&dappLogo=${logo}`
      } else {
        //@ts-ignore
        url = `https://auth-tria.vercel.app/phoneEmailOtp/?dappName=${dappName}&dappLogo=${logo}`
      }
      console.log("url---------->", url);
      setOpenNewFrame(true)
      setFrameUrl(url)
    }
  }, [eventData])

  const handleWalletButtonClick = () => {
    if (showWallet) {
      setWalletVisible(true)
    } else {
      setShowWallet(true)
      setWalletVisible(true)
    }
  }

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <NavContext.Provider value={nav_context_object}>
          {!triaName && showOnboarding && !externalWallet && (
            <>
              {uiType !== "yes" ?
                <div
                  style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <iframe
                    width='314'
                    height='586'
                    src={authIFrameUrl}
                    allow='publickey-credentials-get'
                  />
                </div>
                :
                <div className="rounded-[20px] overflow-hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {openNewFrame === false ? <div className="w-[448px] rounded-2xl drop bg-[#101010] h-[840px] p-4 flex-col justify-between inline-flex scale-[0.7]">
                    <div style={{ marginLeft: '-150px' }} className="absolute top-0 ">
                      {' '}
                    </div>
                    <div className="flex-col justify-start gap-2 flex">
                      <div>
                        <div className="w-[416px] h-[39.50px] justify-end items-start inline-flex">
                        </div>
                        <div className="w-[416px]  px-5 py-6 flex-col justify-center items-center gap-4 inline-flex">
                          <div className="w-[95px]  relative bg-stone-950 rounded-[67.31px] shadow">
                            <img src={logo}></img>
                            <div className="w-[14.66px]  left-[40.17px] top-[40.17px] absolute bg-lime-400 rounded-full blur-[40.71px]" />
                          </div>
                          <div className="self-stretch  py-3 flex-col justify-center items-start gap-4 flex">
                            <div className="self-stretch justify-center items-center gap-2 inline-flex">
                              <div className="text-center text-white text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug">Log in with {dappName}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mt-auto'>
                      {/* <Logins /> */}
                      <div className="w-[416px] h-[375px] px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex">

                        <div className="">
                          <div className=''>
                            <div>
                              <iframe src={!triaStaging ? `https://auth.tria.so/SocialLoginIframe/?dappName=${dappName}&dappLogo=${logo}` : `https://auth-tria.vercel.app/SocialLoginIframe/?dappName=${dappName}&dappLogo=${logo}`} height={"205px"} width="100%" />
                            </div>
                            <div className="w-[376px]  py-3 justify-center items-center gap-2 inline-flex">
                              <div className="grow shrink basis-0 border-2 border-white border-opacity-10"></div>
                              <div className="px-2 justify-center items-center flex">
                                <div className="text-center text-white text-opacity-40 text-xs font-semibold font-['Montserrat'] uppercase leading-[14.40px]">or</div>
                              </div>
                              <div className="grow shrink basis-0  border-2 border-white border-opacity-10"></div>
                            </div>
                            <Wallets />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="w-[416px] h-[43px] py-3 rounded-[44px] justify-start items-start inline-flex">
                        <div className="grow shrink basis-0 h-[19px] justify-center items-center gap-2 flex">
                          <div className="w-[19px] h-[19px] relative rounded-[5px]" />
                          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_240_3997)">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M19 0H0V19H19V0ZM10.079 5.60869V8.07896L14.1585 6.47031V8.29788C14.1585 8.68991 13.9298 9.04048 13.5854 9.17628L10.079 10.559V8.73509C10.0767 8.34551 9.84853 7.99783 9.5059 7.86274L6.57263 6.70603C6.22823 6.57021 5.99951 6.21964 5.99951 5.82761V4.00003L10.079 5.60869ZM10.079 10.5699V11.0459H10.0848V16.2081H8.404V12.3894L6.57263 11.6672C6.22823 11.5314 5.99951 11.1809 5.99951 10.7888V8.96124L10.079 10.5699Z" fill="#808080" fill-opacity="0.4" />
                            </g>
                            <defs>
                              <clipPath id="clip0_240_3997">
                                <rect width="19" height="19" rx="5" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <div className="text-center text-zinc-500 text-opacity-40 text-sm font-semibold font-['Montserrat'] leading-[16.80px]">Powered by Tria</div>
                        </div>
                      </div>
                    </div>
                  </div> :
                    <iframe width="314" height="586" src={frameUrl} allow="publickey-credentials-get" />
                  }
                </div>
              }
            </>
          )}
          {showWallet && triaName && userAddress && (
            <div
              id='triaWallet'
              style={{
                display: walletVisible ? 'block' : 'none',
                justifyItems: 'space-between',
                backgroundColor: 'transparent',
                position: 'fixed',
                top: posY,
                left: posX,
                zIndex: 9999,
              }}
            >
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
                  <div
                    onClick={() => {
                      setWalletVisible(false)
                    }}
                    style={{ cursor: 'pointer' }}
                  >
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
                    width='312'
                    height='586'
                    src={iframeURL}
                    allow='clipboard-read; clipboard-write; publickey-credentials-get'
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
              defaultPosition={{ x: buttonPosX, y: buttonPosY }}
              onStart={handleStartDragging}
              onStop={handleStopDragging}
              // onDrag={handleMouseMove}
              bounds={{
                top: 0,
                left: 0,
                right: buttonBoundRight,
                bottom: buttonBoundBottom,
              }}
            // style={{position:'fixed', left: x, top: y}}
            >
              <div
                style={{
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
                  zIndex: 9999,
                }}
              // onClick={handleWalletButtonClick}
              >
                <TriaWalletButton
                  bgColor={primaryColor || '#A855F7'}
                  stackui={stackui}
                />
              </div>
            </Draggable>
          )}
        </NavContext.Provider>
      </WagmiConfig>
    </>
  )
}

export default Application
