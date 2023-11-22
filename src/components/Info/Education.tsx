import styled from "styled-components";
import { Header } from "../common/Header";

export const Education = () => {
  return (
    <EducationContainer>
      <Header content="Education" />
      <EducationBox>
        <SchoolInfo>
          <School>숭실대학교</School>
          <SchoolDetail>
            <Department>글로벌미디어학부</Department>
            <Detail>서비스 기획, UI/UX, 멀티미디어 관련 과목 수강</Detail>
          </SchoolDetail>
        </SchoolInfo>
        <Date>2019.03 ~ 2024.02</Date>
      </EducationBox>
      <EducationBox>
        <SchoolInfo>
          <School>숭실대학교</School>
          <SchoolDetail>
            <Department>컴퓨터학부</Department>
            <Detail>
              컴퓨터구조, 네트워크, 운영체제 등 컴퓨터 공학 관련 과목 수강
            </Detail>
          </SchoolDetail>
        </SchoolInfo>
        <Date>2019.03 ~ 2024.02</Date>
      </EducationBox>
    </EducationContainer>
  );
};

const EducationContainer = styled.div`
  margin-top: 24px;
`;

const EducationBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin: 16px 0;
`;

const SchoolInfo = styled.div``;

const School = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

const SchoolDetail = styled.div`
  display: flex;
  align-items: center;
`;

const Department = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 14px;
  width: 128px;
`;

const Detail = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 12px;
`;

const Date = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 13px;
`;
