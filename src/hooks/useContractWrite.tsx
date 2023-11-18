import { useEffect, useState } from 'react';
// import { eventTypes } from '../utils/constants';
const authUrl="https://auth-7rin.vercel.app";

const createEncodedData=(data:any)=>{
  const encodedParams = btoa(
    JSON.stringify(data));
  return encodedParams;
}


 const createIframe = (iframeUrl:string) => {
  const iframeContainer = document.createElement("div");
  iframeContainer.id = "sdkMint";
  iframeContainer.className = "bg flex justify-between bg-transparent absolute bottom-4 right-2";
  iframeContainer.style.position = "absolute";
  iframeContainer.style.bottom = "4px";
  iframeContainer.style.right = "2px";

  const innerContainer = document.createElement("div");
  innerContainer.className = "mb-4 mr-2 relative rounded-[20px]";

  const iframeWrapper = document.createElement("div");
  iframeWrapper.className = "h-[586px] w-[312px] rounded-[20px] overflow-hidden";

  const iframe = document.createElement("iframe");
  iframe.width = "312";
  iframe.height = "586";
  iframe.src = iframeUrl;
  iframe.allow = "publickey-credentials-get";
  iframe.style.border = "none";

  // Append elements to construct the desired structure
  iframeWrapper.appendChild(iframe);
  innerContainer.appendChild(iframeWrapper);
  iframeContainer.appendChild(innerContainer);

  // Append iframeContainer to the document body or a specific container
  document.body.appendChild(iframeContainer);

  const cleanup = () => {
    document.body.removeChild(iframeContainer);
  };

  return cleanup;

  // Return any relevant data if needed
  
};

export interface SignMessageState {
  account: string | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

export const useContractWrite = (calldata:any) => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [cleanUp, setCleanUp] = useState<() => void>(() => () => {}); 

  const write = () => {
    setIsLoading(true);
    

    const iframeEncodedData = createEncodedData(calldata);   
    const signIframeUrl =`${authUrl}/mint/${iframeEncodedData}`;
    const cleanUp = createIframe(signIframeUrl);
    setCleanUp(() => cleanUp);
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
        if (cleanUp) {
          cleanUp();
        }
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
