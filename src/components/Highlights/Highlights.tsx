import styled from "styled-components";
import { MediumHeader } from "../common/MediumHeader";
import { Cover } from "./Cover";

import sampleImg from "@images/sample_image.jpg";

const images = [sampleImg, sampleImg, sampleImg, sampleImg];
const data = [
  {
    name: "데보션 영 최종발표",
    date: "2023.11.22",
    description:
      "뫄뫄뫄뫔 했습니다.\n뭐뭐뭐뭐를 느꼈고 이러저러허ㅏㄴ걸 했습니다.\n라라라라라",
  },
  {
    name: "데보션 영 최종발표",
    date: "2023.11.22",
    description:
      "뫄뫄뫄뫔 했습니다.\n뭐뭐뭐뭐를 느꼈고 이러저러허ㅏㄴ걸 했습니다.\n라라라라라",
  },
  {
    name: "데보션 영 최종발표",
    date: "2023.11.22",
    description:
      "뫄뫄뫄뫔 했습니다.\n뭐뭐뭐뭐를 느꼈고 이러저러허ㅏㄴ걸 했습니다.\n라라라라라",
  },
  {
    name: "데보션 영 최종발표",
    date: "2023.11.22",
    description:
      "뫄뫄뫄뫔 했습니다.\n뭐뭐뭐뭐를 느꼈고 이러저러허ㅏㄴ걸 했습니다.\n라라라라라",
  },
];
export const Highlights = () => {
  return (
    <HighlightsContainer>
      <Contents>
        <MediumHeader content="Highlight Moments" />
        <HighlightImages>
          {data.map((el, idx) => {
            return <Cover key={idx} coverImg={images[idx]} data={el} />;
          })}
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
