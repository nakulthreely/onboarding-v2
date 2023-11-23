// useSignMessage.ts

import { useEffect, useState } from 'react';
// import { eventTypes } from '../utils/constants';
const authUrl="https://auth-tria.vercel.app";
import {createEncodedData,createIframe} from "../utils"



export const useSendNft = (calldata:any) => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendNft  = () => {
    setIsLoading(true);
    const iframeEncodedData = createEncodedData(calldata);
    const signIframeUrl =  `${authUrl}/sendNft/${iframeEncodedData}`;
    const iframe = createIframe(signIframeUrl,"sdkSendNft");
    setIsLoading(false);
    return signIframeUrl;

  };

  useEffect(() => {
    const detect = (event: MessageEvent) => {
      if (event.origin !== authUrl) return;

      let eventData;
      try {
        eventData = JSON.parse(event.data);
      } catch (err) {
        eventData = event.data;
      }

      if (eventData?.type ==='closeIframe' && eventData?.callFrom=="sendNft") {
        setData(eventData?.data);
        setIsLoading(false);
        document.getElementById("sdkSendNft")?.remove();
      }
    };

    window.addEventListener('message', detect);

    return () => {
      window.removeEventListener('message', detect);
    };
  }, []);

  return { data, isLoading, isError, isSuccess: !!data, sendNft };
};
