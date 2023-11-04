//@ts-nocheck
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import { useState } from "react";
import ConfirmEmail from './Pages/ConfirmEmail';
import SignUp from './Pages/SignUp/EmailPage';
import PasswordPage from './Pages/SignUp/SignUpPassword';
import SignInPassword from './Pages/SignIn/SignInPassword';
import SignUpPassword from './Pages/SignUp/SignUpPassword';
import Welcome from './Pages/WelcomePage/Welcome';
import Onboarding from './Pages/Onboarding';
import ConnectWallet from './Pages/ConnectWallet';
import ConnectingAnimation from './Pages/ConnectWallet/ConnectingAnimation';
import CreateWallet from './Pages/CreateWallet';
import SignUpPasswordConfirm from './Pages/SignUp/SignUpPasswordConfirm';
import LoaderPage from './Pages/Loader';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, zora, goerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import "./index.css"
import NavContext from './NavContext';

window.Buffer = window.Buffer || require("buffer").Buffer;


const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
        mainnet,
        polygon,
        optimism,
        arbitrum,
        base,
        zora,
        ...(process.env.REACT_APP_ENABLE_TESTNETS === 'true' ? [goerli] : []),
    ],
    [publicProvider()]
);

export const getDefaultWallets = ({ appName, projectId, chains }) => {
    // Set up connectors
    const connectors = [
        new CoinbaseWalletConnector({
            chains,
            options: {
                appName,
                shimDisconnect: true,
            },
        }),
        new WalletConnectConnector({
            chains,
            options: {
                projectId,
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
    appName: 'Customer App powered by Tria',
    projectId: 'bd38d3892c8fd8bc9dabf6fced0bd3c6',
    chains,
});

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
});

const Application = ({ dappName, logo }) => {

    const [showWallet, setShowWallet] = useState(true);
    const [view, setView] = useState("Home")
    const [triaName, setTriaName] = useState("")

    const nav_context_object = {
        view,
        setView,
        triaName,
        setTriaName,
        dappName,
        logo
    }

    return (
        <>
            <WagmiConfig config={wagmiConfig}>
                <NavContext.Provider value={nav_context_object}>
                    <Router>
                        <div className="absolute border shadow-md rounded-lg">
                            <div className="">
                                {view === "Home" ? <Home /> : null}
                                {view === "Sign Up" ? <SignUp /> : null}
                                {view === "Confirm Email" ? <ConfirmEmail /> : null}
                                {view === "Sign In Password" ? <SignInPassword /> : null}
                                {view === "Welcome" ? <Welcome /> : null}
                                {view === "Onboarding" ? <Onboarding /> : null}
                                {view === "Create A Wallet" ? <CreateWallet /> : null}
                                {/* {showWallet && (
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/confirmEmail" element={<ConfirmEmail />} />
                                        <Route path="/signUp" element={<SignUp />} />
                                        <Route path="/signUpPassword" element={<SignUpPassword />} />
                                        <Route path="/signUpPasswordConfirm" element={<SignUpPasswordConfirm />} />
                                        <Route path="/signInPassword/:param" element={<SignInPassword />} />
                                        <Route path="/welcome" element={<Welcome />} />
                                        <Route path="/onboarding" element={<Onboarding />} />
                                        <Route path="/connectWallet" element={<ConnectWallet />} />
                                        <Route path="/createWallet" element={<CreateWallet />} />
                                        <Route path="/connectingAnimation" element={<ConnectingAnimation />} />
                                        <Route path="/callback/google" element={<LoaderPage />} />
                                    </Routes>
                                )} */}
                            </div>
                        </div>
                    </Router>
                </NavContext.Provider>
            </WagmiConfig>
        </>
    );
};

export default Application;