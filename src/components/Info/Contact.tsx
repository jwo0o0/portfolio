import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import WebImg from "@images/web.svg";
import email_icon from "@images/email_icon.svg";
import blog_icon from "@images/blog_icon.svg";
import github_icon from "@images/github_icon.svg";
import { useCopyLink } from "@/hooks/useCopyLink";
import { Toast } from "../common/Toast";

export const Contact = () => {
  const [toast, setToast] = useState<boolean>(false);
  const { handleClickCopy } = useCopyLink();

  const handleClickEmail = () => {
    setToast(true);
    handleClickCopy();
  };
  return (
    <ContactContainer>
      <Developer>
        <Image src={WebImg} width={28} alt="web" />
        Web&nbsp;<span>Frontend</span>&nbsp;Developer
      </Developer>
      <ContactList>
        <ContactLink>
          <Image src={email_icon} width={24} alt="email" />
          <div className="link" onClick={handleClickEmail}>
            <span>jwo0o0</span>358@gmail.com
          </div>
        </ContactLink>
        <ContactLink>
          <Image src={blog_icon} width={24} alt="email" />
          <a href="https://velog.io/@jwo0o0" target="_blank">
            https://velog.io/@<span>jwo0o0</span>
          </a>
        </ContactLink>
        <ContactLink>
          <Image src={github_icon} width={24} alt="email" />
          <a href="https://github.com/jwo0o0" target="_blank">
            https://github.com/<span>jwo0o0</span>
          </a>
        </ContactLink>
      </ContactList>
      {toast && (
        <Toast message="이메일이 복사되었습니다!" setToast={setToast} />
      )}
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Developer = styled.div`
  font-family: "Happiness-Bold";
  font-size: 28px;
  color: white;
  span {
    color: #cfffb9;
  }

  display: flex;
  align-items: center;

  img {
    margin-right: 8px;
  }
  margin-bottom: 12px;
`;

const ContactList = styled.div``;

const ContactLink = styled.div`
  font-family: "Pretendard";
  font-weight: 400;
  font-size: 13px;
  color: white;
  span {
    font-weight: 600;
  }

  display: flex;
  align-items: center;
  margin-left: 2px;
  margin-bottom: 6px;

  div.link {
    display: inline-block;
    &:hover {
      background-color: #8287ff;
      cursor: pointer;
    }
    padding: 4px 6px;
    border-radius: 6px;
  }
  img {
    margin-right: 4px;
  }
  a {
    color: white;
    transition: background-color 0.1s ease;
    &:hover {
      background-color: #8287ff;
    }
    padding: 4px 6px;
    border-radius: 6px;
  }
`;
