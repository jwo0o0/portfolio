import styled from "styled-components";
import Image from "next/image";
import sparkeImg from "@images/sparkle_1.svg";

export const Name = () => {
  return (
    <StyledName>
      김정우
      <Image src={sparkeImg} width={52} alt="sparkle" />
    </StyledName>
  );
};

const StyledName = styled.div`
  font-family: "Happiness-Bold";
  display: flex;
  align-items: center;
  img {
    margin-left: 4px;
  }
  margin-bottom: 12px;
`;
