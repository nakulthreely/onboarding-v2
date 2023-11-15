import * as react_jsx_runtime from 'react/jsx-runtime';

declare const useTriaSendTransaction: () => {
    sendTransaction: (sendDataFromDapp: any) => Promise<string>;
    signMessage: (message: any) => Promise<string>;
};
declare const TriaConnectProvider: () => react_jsx_runtime.JSX.Element;
declare const Application: ({ dappName, logo, primaryColor }: {
    dappName: any;
    logo: any;
    primaryColor: any;
}) => react_jsx_runtime.JSX.Element;

export { TriaConnectProvider, Application as default, useTriaSendTransaction };
