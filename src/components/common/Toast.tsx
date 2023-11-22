import styled from "styled-components";
import { useEffect } from "react";
import { COLORS } from "@/styles/constants/colors";

interface ToastProps {
  message: string;
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Toast = ({ message, setToast }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);
  return <ToastContainer>{message}</ToastContainer>;
};

const ToastContainer = styled.div`
  width: 240px;
  height: 36px;
  background-color: ${COLORS.gray_800};
  border-radius: 4px;
  padding-left: 12px;

  font-family: "Pretendard";
  font-weight: 600;
  font-size: 12px;
  line-height: 36px;
  color: white;

  position: absolute;
  left: 0;
  bottom: calc(-60vh);

  animation: fadeout 2s ease-in-out;
  opacity: 0;

  @keyframes fadeout {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
