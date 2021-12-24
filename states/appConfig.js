import { useState, useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const isDarkModeState = atom({
  key: "isDarkModeState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

// https://stackoverflow.com/a/68112852
export const useDarkMode = () => {
  const [isInitial, setIsInitial] = useState(true);
  const [darkModeStored, setDarkModeStored] = useRecoilState(isDarkModeState);

  useEffect(() => {
    setIsInitial(false);
  });

  useEffect(() => {
    if (darkModeStored) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkModeStored]);

  return [
    isInitial ? false : darkModeStored,
    setDarkModeStored
  ];
}