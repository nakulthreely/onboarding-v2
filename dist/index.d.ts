import * as react_jsx_runtime from 'react/jsx-runtime';

declare const useContractWrite: (calldata: any) => {
    data: string;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    write: () => string;
};
<<<<<<< HEAD

declare const useSendTransaction: (calldata: any) => {
    data: string;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    sendTransaction: () => string;
};

declare const useSignMessage: (calldata: any) => {
    data: string;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    signMessage: () => string;
};

declare const useTriaTransaction: () => {
    sendTransaction: (sendDataFromDapp: any) => Promise<string>;
    signMessage: (message: any) => Promise<string>;
    callContract: (data: any) => Promise<string>;
};
declare const TriaConnectProvider: () => react_jsx_runtime.JSX.Element;
declare const Application: ({ dappName, dappDomain, uiType, logo, primaryColor }: {
=======
declare const triaSendTransaction: ({ appDomain, appLogo }: {
    appDomain: any;
    appLogo: any;
}) => {
    sendTransaction: (sendDataFromDapp: any) => Promise<void>;
    signMessage: (message: any) => Promise<void>;
};
declare const Application: ({ dappName, logo }: {
>>>>>>> origin/main
    dappName: any;
    dappDomain: any;
    uiType: any;
    logo: any;
    primaryColor: any;
}) => react_jsx_runtime.JSX.Element;

<<<<<<< HEAD
export { TriaConnectProvider, Application as default, useContractWrite, useSendTransaction, useSignMessage, useTriaTransaction };
=======
export { Application as default, getDefaultWallets, triaSendTransaction };
>>>>>>> origin/main
