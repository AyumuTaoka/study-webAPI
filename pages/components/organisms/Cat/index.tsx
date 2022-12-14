import { useState } from "react";
import styled from "styled-components";

export default function Cat() {
  const [catImageUrl, setCatImageUrl] = useState("https://cataas.com/c");
  const [btnTxt, setBtnTxt] = useState("作業開始猫");

  const handleClick = async () => {
    handleBtnTxt();
    handleCatImg();
  };

  const handleCatImg = async () => {
    if (catImageUrl == "https://cataas.com/c/gif") {
      setCatImageUrl("https://cataas.com/c");
    } else {
      setCatImageUrl("https://cataas.com/c/gif");
    }
  };

  const handleBtnTxt = () => {
    if (catImageUrl == "https://cataas.com/c") {
      console.log("start");
      setBtnTxt("作業中断猫");
    } else {
      console.log("stop");
      setBtnTxt("作業開始猫");
    }
  };

  return (
    <Neko>
      <h1>ねこねこねこねこ</h1>
      <CatButton onClick={handleClick}>{btnTxt}</CatButton>

      {/* とりあえず放置　imgで代用　後でstyled-component入れて解決したい */}
      {/* <Image src={catImageUrl} alt="this is cat" layout="fill" /> */}
      <CatImg src={catImageUrl} alt="this is cat" />
    </Neko>
  );
}

const Neko = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const CatButton = styled.button`
  width: 20%;
  height: 3em;
`;

const CatImg = styled.img`
  width: 80%;
  height: auto;
`;
