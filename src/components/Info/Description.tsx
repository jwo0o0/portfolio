import styled from "styled-components";
import Image from "next/image";
import sparkleImg from "@images/sparkle_2.svg";

export const Description = () => {
  return (
    <DecriptionContainer>
      <Image src={sparkleImg} width={28} alt="sparkle" />
      <Words>
        소개소개 어쩌구저쩌구 저는 이러한 사람입니다 저러한 사람입니다 소개소개
        어쩌구저쩌구 저는 이러한 사람입니다 저러한 사람입니다 소개소개
        어쩌구저쩌구 저는 이러한 사람입니다 저러한 사람입니다 소개소개
        어쩌구저쩌구 저는 이러한 사람입니다 저러한 사람입니다 소개소개
        어쩌구저쩌구 저는 이러한 사람입니다 저러한 사람입니다
      </Words>
    </DecriptionContainer>
  );
};

const DecriptionContainer = styled.div``;

const Words = styled.div`
  font-family: "Pretendard";
  font-size: 13px;
  line-height: 16px;
  font-style: normal;
  font-weight: 400;
  color: white;

  width: 400px;
  padding-left: 24px;
  margin-bottom: 6px;
`;
