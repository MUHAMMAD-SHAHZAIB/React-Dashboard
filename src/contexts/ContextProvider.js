import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const ContextProvider = ({ children }) => {
  //!-----------active and not active state--------------
  const [activeMenu, setActiveMenu] = useState(true);

  //!------------it iclicked state to apply in navbar icons-----------
  const [isClicked, setIsClicked] = useState(initialState);

  const [screenSize, setScreenSize] = useState(undefined);

  //!------------theme color function--------

  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  //!------------it handleClick function it is call in navbar components---------
  const handleClick = clicked => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  //!------------theme color function--------

  const setMode = e => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = color => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  //------------------cart toggle--------------
  // const [CartBtn, setCartBtn] = useState(false);

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        // CartBtn,
        // setCartBtn,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

//! custome hook create for data share with other components
export const useStateContext = () => {
  return useContext(StateContext);
};

export default ContextProvider;
