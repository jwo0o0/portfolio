import styled from "styled-components";

interface HeaderProps {
  content: string;
}
export const MediumHeader = ({ content }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderText>{content}</HeaderText>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 650px;
  border-bottom: 2px solid #6e74ff;
`;

const HeaderText = styled.div`
  font-family: "Happiness-Title";
  font-size: 24px;
  line-height: 56px;
  letter-spacing: -0.4px;
  color: #6e74ff;
`;
