import styled from "styled-components";
import Image from "next/image";
import { COLORS } from "@/styles/constants/colors";
import sample from "@images/sample_image.jpg";
import githubIcon from "@images/github_dark_icon.svg";
import linkIcon from "@images/link_icon.svg";

interface ProjectProps {
  name: string;
  stack: string;
  date: string;
  description: string[];
  linkinfo: string[];
  link: string[];
}
export const Project = ({ ...props }: ProjectProps) => {
  return (
    <ProjectContainer>
      <ProjectImage>
        <Image src={sample} width={280} alt="project" />
      </ProjectImage>
      <ProjectInfo>
        <InfoHeader>
          {props.name}
          <GithubBtn>
            <Image src={githubIcon} width={18} alt="github" />
          </GithubBtn>
          <Date>{props.date}</Date>
        </InfoHeader>
        <TechStack>{props.stack}</TechStack>
        <DetailBox>
          {props.description.map((el, idx) => {
            return <Detail key={idx}>- {el}</Detail>;
          })}
        </DetailBox>
        <LinkBox>
          {props.linkinfo.map((el, idx) => {
            return (
              <Link key={idx}>
                <Image src={linkIcon} alt="link" />
                <a href={props.link[idx]} target="_blank">
                  {el}
                </a>
              </Link>
            );
          })}
        </LinkBox>
      </ProjectInfo>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  width: 650px;
  display: flex;
  justify-content: space-between;
  margin: 36px 0;
`;

const ProjectImage = styled.div`
  width: 220px;
  height: 180px;
  border-radius: 8px;
  overflow: hidden;
`;

const ProjectInfo = styled.div`
  width: 384px;
  display: flex;
  flex-direction: column;
`;

const InfoHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 600;
  color: #6e74ff;

  position: relative;
`;

const GithubBtn = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 4px;

  &:hover {
    cursor: pointer;
  }
`;

const Date = styled.div`
  position: absolute;
  right: 0;
  bottom: 4px;

  font-family: "Pretendard";
  font-size: 12px;
  font-weight: 400;
  color: ${COLORS.gray_800};
`;

const TechStack = styled.div`
  font-family: "Pretendard";
  font-size: 13px;
  font-weight: 400;
  color: ${COLORS.main};

  margin: 8px 0;
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`;

const Detail = styled.div`
  font-family: "Pretendard";
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  color: ${COLORS.gray_800};
`;

const LinkBox = styled.div``;

const Link = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 4px;
  }
  a {
    font-family: "Pretendard";
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    color: ${COLORS.gray_600};
    text-decoration: underline;
  }
`;
