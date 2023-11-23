
import { useEffect, useState } from 'react';
// import { eventTypes } from '../utils/constants';
import {
    WalletController,
  } from "@tria-sdk/web";


  interface params {
    contractDetails: any;
    baseUrl?: string;
}


export const useContractRead = (params: params) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(()=>{
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
    setData(res);
    setIsLoading(false);
  }
  catch(err){
    setIsError(true);
  }
}
read();
},[params]);


  return { data, isLoading, isError, isSuccess: !!data };
};