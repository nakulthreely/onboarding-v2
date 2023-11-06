import * as react_jsx_runtime from 'react/jsx-runtime';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';

declare const getDefaultWallets: ({ appName, projectId, chains }: {
    appName: any;
    projectId: any;
    chains: any;
}) => {
    connectors: (CoinbaseWalletConnector | WalletConnectConnector | MetaMaskConnector)[];
};
declare const Application: ({ dappName, logo }: {
    dappName: any;
    logo: any;
}) => react_jsx_runtime.JSX.Element;

export { Application as default, getDefaultWallets };
