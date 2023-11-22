import styled from "styled-components";
import { COLORS } from "@/styles/constants/colors";
import { MediumHeader } from "../common/MediumHeader";
import { Experience } from "./Experience";

export const Experiences = () => {
  return (
    <ExperiencesContainer>
      <Contents>
        <MediumHeader content="Experiences" />
        <Experience name="SKT 데보션 영 2기" date="2023.03 - 2023.11">
          <Description>
            <span>뫄뫄마모마</span> 진행하였습니다.
            <br />
            뭐무머를 배우고 이런저런 경험을 했습니다.
            <br />
            <span>이런거저런거</span> 헀습니다.
            <br />
            우수활동자로 수료했습니다.
          </Description>
        </Experience>
        <Experience name="SKT 데보션 영 2기" date="2023.03 - 2023.11">
          <Description>
            <span>뫄뫄마모마</span> 진행하였습니다.
            <br />
            뭐무머를 배우고 이런저런 경험을 했습니다.
            <br />
            <span>이런거저런거</span> 헀습니다.
            <br />
            우수활동자로 수료했습니다.
          </Description>
        </Experience>
        <Experience name="SKT 데보션 영 2기" date="2023.03 - 2023.11" last>
          <Description>
            <span>뫄뫄마모마</span> 진행하였습니다.
            <br />
            뭐무머를 배우고 이런저런 경험을 했습니다.
            <br />
            <span>이런거저런거</span> 헀습니다.
            <br />
            우수활동자로 수료했습니다.
          </Description>
        </Experience>
      </Contents>
    </ExperiencesContainer>
  );
};

const ExperiencesContainer = styled.div`
  background-color: #f4f3f1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  margin-top: 60px;
  width: 650px;
`;

const Description = styled.div`
  width: 500px;
  margin: 24px 0;
  white-space: pre-line;
  font-family: "Pretendard";
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  color: ${COLORS.gray_800};

  span {
    font-weight: 600;
  }
`;
