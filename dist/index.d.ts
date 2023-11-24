import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

declare const useContractWrite: (calldata: any) => {
    data: string;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    write: () => string;
};

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

interface params {
    contractDetails: any;
    baseUrl?: string;
}
declare const useContractRead: (params: params) => {
    data: string;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    read: () => Promise<void>;
};

declare const useTriaTransaction: () => {
    sendTransaction: (sendDataFromDapp: any) => Promise<string>;
    signMessage: (message: any) => Promise<string>;
    callContract: (data: any) => Promise<string>;
};
declare const TriaConnectProvider: () => react_jsx_runtime.JSX.Element;
interface ApplicationProps {
    dappName?: string;
    dappDomain?: string;
    uiType?: string;
    logo?: string;
    primaryColor?: string;
}
declare const Application: React.FC<ApplicationProps>;

export { TriaConnectProvider, Application as default, useContractRead, useContractWrite, useSendTransaction, useSignMessage, useTriaTransaction };
