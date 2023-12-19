import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

declare const useTriaTransaction: () => {
    sendTransaction: (sendDataFromDapp: any) => Promise<string>;
    signMessage: (message: any) => Promise<string>;
    callContract: (data: any) => Promise<string>;
};
declare const TriaConnectProvider: ({ triaStaging }: {
    triaStaging?: boolean | undefined;
}) => react_jsx_runtime.JSX.Element;
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
    buttonPosition?: {
        x?: number;
        y?: number;
    };
}
declare const Application: React.FC<ApplicationProps>;

export { TriaConnectProvider, Application as default, useTriaTransaction };
