import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import shahzaib from "../data/shahzaib1.jfif";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >  
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2 "
      />

      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  //! ---This useEffect use for to find the size of screen---
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // !----this useEffect used for to condition apply for diffrent screen size---
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      {/* //!----Menu-icon-button */}
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu(prevActiveMenu => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        {/* //!----Cart-icon-button */}
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        {/* //!----Chat-icon-button */}
        <NavButton
          title="Chart"
          dotColor="#03c9d7"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        {/* //!----Notification-icon-button */}
        <NavButton
          title="Notifications"
          dotColor="#03c9d7"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          {/* //!----Profile-pic-icon */}
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={shahzaib} className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 text-14">Hi,</span> {""}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Shahzaib
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {/* //!if clicked cart-icon then show Cart components*/}
        {isClicked.cart && <Cart />}{" "}
        {/* //!if clicked chat-icon then show Chat components*/}
        {isClicked.chat && <Chat />}{" "}
        {/* //!if clicked notification-icon then show Notification components*/}
        {isClicked.notification && <Notification />}{" "}
        {/* //!if clicked userProfile-pic then show UserProfile components*/}
        {isClicked.userProfile && <UserProfile />}{" "}
      </div>
    </div>
  );
};

export default Navbar;
