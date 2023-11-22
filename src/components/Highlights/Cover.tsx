import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

interface CoverProps {
  coverImg: StaticImageData;
}

export const Cover = ({ ...props }: CoverProps) => {
  return (
    <CoverContainer>
      <Image src={props.coverImg} width={212} alt="photo" />
    </CoverContainer>
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
