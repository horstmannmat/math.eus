import {
  PropsWithChildren, createContext, useMemo, useState,
} from 'react';
/**
 * This Context will be used to save all the state.
 * Like a redux, but without that shit of redux
 */

interface SiteContextInterface {
  isCookieAccepted: boolean,
  isRecursionOpened: boolean,
  isEasterEggEnabled: boolean,
  hasUserCheated: boolean,
  easterEggsFound: number;
  setCookieAccepted: (value: boolean) => void,
  setRecursionOpened: (value: boolean) => void,
  userDiscoveredEasterEgg: () => void,
  alertIntrusion: () => void,
}
export const SiteContext = createContext({} as SiteContextInterface);

export const SiteProvider = (props: PropsWithChildren) => {
  const [acceptedCookie, setAcceptedCookie] = useState<boolean>(false);
  const [recursionClicked, setRecursionClicked] = useState<boolean>(false);
  const [recursionClickedOnce, setRecursionClickedOnce] = useState<boolean>(false);
  const [easterEgg, setEasterEgg] = useState<boolean>(false);
  const [easterEggCounter, setEasterEggCounter] = useState<number>(0);
  const [cheater, setCheater] = useState<boolean>(false);

  const siteProvidervalue = useMemo(() => ({
    isCookieAccepted: acceptedCookie,
    isRecursionOpened: recursionClicked,
    isEasterEggEnabled: easterEgg,
    hasUserCheated: cheater,
    easterEggsFound: easterEggCounter,
    setCookieAccepted: (value:boolean) => {
      setAcceptedCookie(value);
    },
    setRecursionOpened: (value:boolean) => {
      setRecursionClicked(value);
      if (!recursionClickedOnce) {
        setEasterEggCounter(easterEggCounter + 1);
        setRecursionClickedOnce(true);
      } 
    },
    userDiscoveredEasterEgg: () => {
      setEasterEgg(true);
      setEasterEggCounter(easterEggCounter + 1);
    },
    alertIntrusion: () => setCheater(true),

  }), [acceptedCookie, recursionClicked, easterEgg, cheater, easterEggCounter, recursionClickedOnce]);

  return (
    <SiteContext.Provider value={siteProvidervalue}>
      {props.children}
    </SiteContext.Provider>

  );
};
