import styled from "styled-components";

interface SkillTagProps {
  skill: string;
  type?: string;
}
export const SkillTag = ({ skill, type }: SkillTagProps) => {
  return <SkillTagContainer className={type}>{skill}</SkillTagContainer>;
};

const SkillTagContainer = styled.div`
  border-radius: 50px;
  padding: 6px 10px;
  margin-right: 4px;
  margin-bottom: 6px;
  background: #cfffb9;

  font-family: "Pretendard";
  font-weight: 500;
  font-size: 11px;
  color: #6e74ff;

  &.second {
    border: 1px solid #f7f7fa;
    color: #f7f7fa;
    background-color: #6e74ff;
  }
`;
