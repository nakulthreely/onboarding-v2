// @ts-ignore
import { useState, useEffect } from 'react';
import { TRIA_WALLET_SELECTED_CHAIN, TRIA_WALLET_STORE, eventTypes } from '../utils/constants';

export function useTriaConnector({ walletUrl }: any) {
  const iglobalData = new Map();
  const [globalData, setGlobalData] = useState(iglobalData);

  const setTriaStore = (eventData: any) => {
    console.log(`Save ${eventData} to local storage`);
    if (eventData?.success) {
      window.localStorage.setItem(TRIA_WALLET_STORE, JSON.stringify(eventData?.data));
    }
  };

  const disconnect = () => {
    window.localStorage.removeItem(TRIA_WALLET_STORE);
  };

  const setSelectedChain = (data: any) => {
    window.localStorage.setItem(TRIA_WALLET_SELECTED_CHAIN, data?.data?.chainName);
  };

  /**
   *
   * @param event event
   * @param type event type waiting for - like "Login, Signup, Sign"
   * @returns Json parsed data - message from the event
   */
  const handleMessageFromIframe = (event: any /*type: string*/) => {
    let data;
    try {
      data = JSON.parse(event.data);
    } catch (err) {
      data = event.data;
    }
    return data;
  };

  const isSignUpEvent = (eventType: string) => {
    return eventType.includes('Sign up') || eventType == 'Log in';
  };

  // For react
  useEffect(() => {
    const authResponse = (event: any) => {
      if (event.origin !== walletUrl) return;

      const eventData = handleMessageFromIframe(event /*eventType*/);
      const eventType = eventData?.type;
      if (isSignUpEvent(eventType)) {
        setTriaStore(eventData);
      } else if (eventType == eventTypes.switchChain) {
        setSelectedChain(eventData);
      } else if (eventType == eventTypes.disconnect) {
        disconnect();
      }

      const tempMap = new Map();
      tempMap.set(`${eventType}`, eventData);
      console.log({ tempMap });
      const newMap = new Map([...globalData, ...tempMap]);
      setGlobalData(newMap);
    };
    window.addEventListener('message', authResponse);
    return () => window.removeEventListener('message', authResponse);
  }, []);

  return {
    globalData,
  };
}
