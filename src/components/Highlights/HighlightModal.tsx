import styled from "styled-components";
import { COLORS } from "@/styles/constants/colors";
import Image, { StaticImageData } from "next/image";

interface ModalProps {
  coverImg: StaticImageData;
  data: {
    name: string;
    date: string;
    description: string;
  };
}
export const HighlightModal = ({ coverImg, data }: ModalProps) => {
  return (
    <ModalContainer>
      <ImgContainer>
        <Image src={coverImg} width={250} alt="이미지" />
      </ImgContainer>
      <Information>
        <Header>
          {data.name}
          <span>{data.date}</span>
        </Header>
        <Description>{data.description}</Description>
      </Information>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 640px;
  height: 380px;
  background-color: ${COLORS.gray_950};
  border-radius: 20px;
  padding: 0 52px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImgContainer = styled.div`
  width: 250px;
  height: 250px;
  overflow: hidden;
`;

const Information = styled.div`
  width: 264px;
  height: 250px;
`;

const Header = styled.div`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 16px;
  color: ${COLORS.gray_200};

  span {
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 13px;
    color: #c3b9ff;
    margin-left: 8px;
  }

  margin-bottom: 15px;
`;

const Description = styled.div`
  font-family: "Pretendard";
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${COLORS.gray_300};
  white-space: pre-line;
`;
