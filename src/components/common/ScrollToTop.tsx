import styled from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";
import { COLORS } from "@/styles/constants/colors";
import arrowIcon from "@images/arrow_icon.svg";

export const ScrollToTop = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [btnStatus, setBtnStatus] = useState<boolean>(false);

  const handleFollow = () => {
    setScrollY(window.scrollY);
    if (scrollY > 300) setBtnStatus(true);
    else setBtnStatus(false);
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0);
    setBtnStatus(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  return (
    <ScrollToTopBtn onClick={handleTop} className={btnStatus ? "show" : "hide"}>
      <Image src={arrowIcon} width={16} alt="scrollToTop" />
    </ScrollToTopBtn>
  );
};

const ScrollToTopBtn = styled.button`
  position: fixed;
  right: 36px;
  bottom: 36px;

  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background-color: ${COLORS.main};

  &:hover {
    cursor: pointer;
  }
  &.hide {
    display: none;
  }
`;
