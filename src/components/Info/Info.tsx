import styled from "styled-components";
import { COLORS } from "@styles/constants/colors";

import { Name } from "./Name";
import { Contact } from "./Contact";
import { Description } from "./Description";
import { Skills } from "./Skills";
import { Education } from "./Education";

export const Info = () => {
  return (
    <InfoContainer>
      <Contents>
        <Name />
        <Box>
          <Contact />
          <Description />
        </Box>
        <Skills />
        <Education />
      </Contents>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 640px;

  background-color: ${COLORS.main};
  font-size: 48px;
  font-style: normal;
  line-height: normal;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  width: 860px;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;
