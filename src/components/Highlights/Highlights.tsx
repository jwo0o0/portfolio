import styled from "styled-components";
import { MediumHeader } from "../common/MediumHeader";
import { Cover } from "./Cover";
import sampleImg from "@images/sample_image.jpg";

export const Highlights = () => {
  return (
    <HighlightsContainer>
      <Contents>
        <MediumHeader content="Highlight Moments" />
        <HighlightImages>
          <Cover coverImg={sampleImg} />
          <Cover coverImg={sampleImg} />
          <Cover coverImg={sampleImg} />
          <Cover coverImg={sampleImg} />
        </HighlightImages>
      </Contents>
    </HighlightsContainer>
  );
};

const HighlightsContainer = styled.div`
  background-color: #f4f3f1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  margin-top: 60px;
  width: 650px;
  height: 600px;
`;

const HighlightImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-top: 20px;
`;
