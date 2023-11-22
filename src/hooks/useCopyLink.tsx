import { useState } from "react";

//문자열을 클립보드에 복사
export const useCopyLink = () => {
  const COPY = "jwo0o0358@gmail.com";

  const handleClickCopy = () => {
    navigator.clipboard.writeText(COPY);
  };

  return {
    handleClickCopy,
  };
};
