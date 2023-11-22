import styled from "styled-components";
import { COLORS } from "@/styles/constants/colors";

interface ExperienceProps {
  name: string;
  date: string;
  children?: React.ReactNode;
  last?: boolean;
}
export const Experience = ({ children, ...props }: ExperienceProps) => {
  return (
    <ExperienceContainer className={props.last ? "last" : ""}>
      <Header>
        <Name>{props.name}</Name>
        <Date>{props.date}</Date>
      </Header>
      {children}
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled.div`
  width: 650px;
  margin: 16px 0;
  border-bottom: 1px solid ${COLORS.main};
  &.last {
    border: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  height: 36px;
`;

const Name = styled.div`
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.3px;
  color: ${COLORS.main};
`;

const Date = styled.div`
  font-family: "Pretendard";
  font-size: 12px;
  font-weight: 500;
  color: ${COLORS.gray_800};
`;
