import styled from "styled-components";

interface HeaderProps {
  content: string;
}
export const Header = ({ content }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderText>{content}</HeaderText>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 860px;
  border-bottom: 2px solid white;
`;

const HeaderText = styled.div`
  font-family: "Happiness-Title";
  font-size: 24px;
  line-height: 56px;
  letter-spacing: -0.4px;
  color: white;
`;
