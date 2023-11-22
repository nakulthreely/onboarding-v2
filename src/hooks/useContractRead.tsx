import { useState } from 'react';
// import { eventTypes } from '../utils/constants';
import { ethers } from 'ethers';
import {
    WalletController,
  } from "@tria-sdk/web";


  interface params {
    contractDetails: any;
    baseUrl?: string;
}


export const useContractRead = (params: params) => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const read =async () => {
    try{
    setIsLoading(true);
    const { contractDetails, baseUrl = 'https://prod.tria.so' } = params;
    const walletType = { embedded: true };

    const wallet = new WalletController({
        baseUrl,
        walletType,
      });
    


    const res = await wallet.readContract(contractDetails);
    const value = ethers.utils.formatEther(res.data);
    console.log('getItemsNativePrice', res.data.toString(), '->', value);
    setData(value);
    setIsLoading(false);
  }
  catch(err){
    setIsError(true);
  }
}


  return { data, isLoading, isError, isSuccess: !!data, read };
};
