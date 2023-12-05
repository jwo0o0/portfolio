import styled from "styled-components";
import Image from "next/image";
import sparkleImg from "@images/sparkle_2.svg";

export const Description = () => {
  return (
    <DecriptionContainer>
      <Image src={sparkleImg} width={28} alt="sparkle" />
      <Words>
        React를 중심으로 개발하는 Web 프론트엔드 개발자입니다. 효율적인 컴포넌트
        구성과 컴포넌트 재활용에 관심을 기울입니다. <br />
        문서화를 통해 지속적이고 체계적으로 소통합니다. <br />
        커뮤니티 활동와 지식 공유를 통해 성장합니다.
      </Words>
    </DecriptionContainer>
  );
};

const DecriptionContainer = styled.div``;

const Words = styled.div`
  font-family: "Pretendard";
  font-size: 13px;
  line-height: 18px;
  font-style: normal;
  font-weight: 400;
  color: white;

  width: 400px;
  padding-left: 24px;
  margin-bottom: 6px;
`;
