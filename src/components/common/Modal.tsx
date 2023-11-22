import React, { MouseEvent, ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import closeIcon from "@images/close_icon.svg";

interface ModalProps {
  onClose: () => void;
  children?: ReactNode;
}
export const Modal = ({ onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleClickModal = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  return (
    <ModalBackdrop ref={modalRef} onClick={handleClickModal}>
      <ModalContent>
        <CloseBtn onClick={onClose}>
          <Image src={closeIcon} alt="닫기" />
        </CloseBtn>
        {children}
      </ModalContent>
    </ModalBackdrop>
  );
};

const ModalBackdrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: -${typeof window !== "undefined" ? window.scrollY : 0}px;
  overflow-y: scroll;
  width: 100%;
  right: 0;
  bottom: 0;
  z-index: 998;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;

  background: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
