import { useEffect, useState } from 'react';
// import { eventTypes } from '../utils/constants';
const authUrl="https://auth-7rin.vercel.app";
import {createEncodedData,createIframe} from "../utils"



export const useContractWrite = (calldata:any) => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const write = () => {
    setIsLoading(true);
    const prepare_data={ContractDetails:calldata}
    const iframeEncodedData = createEncodedData(prepare_data);   
    const signIframeUrl =`${authUrl}/mint/${iframeEncodedData}`;
    createIframe(signIframeUrl,"sdkMint");
    setIsLoading(false);
    return signIframeUrl;

  };

  useEffect(() => {
    const detect = (event: MessageEvent) => {
     console.log("event---------------->",event);
      if (event.origin !== authUrl) return;

      let eventData;
      try {
        eventData = JSON.parse(event.data);
      } catch (err) {
        eventData = event.data;
      }

      if (eventData?.type ==='closeIframe' && eventData?.callFrom=="mint") {
        setData(eventData?.data);
        setIsLoading(false);
        document.getElementById("sdkMint")?.remove();
      }
    };

    window.addEventListener('message', detect);

    return () => {
      window.removeEventListener('message', detect);
    };
  }, []);

  return { data, isLoading, isError, isSuccess: !!data, write };
};
