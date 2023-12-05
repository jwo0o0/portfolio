import styled from "styled-components";
import { MediumHeader } from "../common/MediumHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <ProjectsContainer>
      <Contents>
        <MediumHeader content="Projects" />
        <Project
          name="꿈틀"
          stack="React, TypeScript, Recoil"
          date="2023.07 - 2023.11"
          description={["뫄뫄뫄마 했음", "상을 타였음"]}
          linkinfo={["배포 링크", "발표 자료"]}
          link={["link", "link"]}
        />
        <Project
          name="프로젝트 이름"
          stack="JavaScript, React"
          date="2023.01 - 2023.08"
          description={["뫄뫄뫄마 했음", "상을 타였음"]}
          linkinfo={["배포 링크", "발표 자료"]}
          link={["link", "link"]}
        />
        <Project
          name="프로젝트 이름"
          stack="JavaScript, React"
          date="2023.01 - 2023.08"
          description={["뫄뫄뫄마 했음", "상을 타였음"]}
          linkinfo={["배포 링크", "발표 자료"]}
          link={["link", "link"]}
        />
      </Contents>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
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
