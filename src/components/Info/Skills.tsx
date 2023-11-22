import styled from "styled-components";
import { Header } from "../common/Header";
import { SkillTag } from "../common/SkillTag";

export const Skills = () => {
  return (
    <SkillsContainer>
      <Header content="Skills" />
      <SkillBoxContainer>
        <SkillBox style={{ width: "530px" }}>
          <SmallHeader>
            <span>Confident</span> with
          </SmallHeader>
          <SkillList>
            <div style={{ display: "flex" }}>
              <SkillTag skill="HTML" />
              <SkillTag skill="CSS" />
              <SkillTag skill="JavaScript" />
              <SkillTag skill="TypeScript" />
            </div>
            <div style={{ display: "flex" }}>
              <SkillTag skill="React" />
              <SkillTag skill="Recoil" />
              <SkillTag skill="Styled-components" />
            </div>
          </SkillList>
        </SkillBox>
        <SkillBox>
          <SmallHeader>
            Have <span>used</span>
          </SmallHeader>
          <SkillList>
            <div style={{ display: "flex" }}>
              <SkillTag skill="Next.js" type="second" />
              <SkillTag skill="Redux" type="second" />
              <SkillTag skill="AWS" type="second" />
              <SkillTag skill="Java" type="second" />
            </div>
            <div style={{ display: "flex" }}>
              <SkillTag skill="C" type="second" />
              <SkillTag skill="Java" type="second" />
              <SkillTag skill="SpringBoot" type="second" />
              <SkillTag skill="MySQL" type="second" />
            </div>
          </SkillList>
        </SkillBox>
      </SkillBoxContainer>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div`
  margin-top: 24px;
`;

const SkillBoxContainer = styled.div`
  display: flex;
`;

const SkillBox = styled.div`
  width: 430px;
`;

const SmallHeader = styled.div`
  height: 48px;
  font-family: "Happiness-Bold";
  font-size: 18px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: -0.3px;
  span {
    color: #cfffb9;
  }
`;

const SkillList = styled.div``;
