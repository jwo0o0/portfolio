import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import useModal from "@/hooks/useModal";
import { Modal } from "../common/Modal";
import { HighlightModal } from "./HighlightModal";

interface CoverProps {
  coverImg: StaticImageData;
  data: {
    name: string;
    date: string;
    description: string;
  };
}

export const Cover = ({ ...props }: CoverProps) => {
  const { open, PopUp, close } = useModal();

  return (
    <>
      <CoverContainer onClick={open}>
        <Image src={props.coverImg} width={212} alt="photo" />
      </CoverContainer>
      <PopUp>
        <Modal onClose={close}>
          <HighlightModal
            coverImg={props.coverImg}
            data={props.data}
          ></HighlightModal>
        </Modal>
      </PopUp>
    </>
  );
};

const CoverContainer = styled.div`
  width: 212px;
  height: 212px;
  overflow: hidden;
  margin-bottom: 7px;
  border-radius: 6px;

  img {
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transition: all 0.5s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transition: all 0.5s ease-in-out;

    cursor: pointer;
  }
`;
