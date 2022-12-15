import { useState } from "react";
import styled from "styled-components";

export default function Cat() {
  // レンダリングが最小限となるようにuseStateで定義している
  const [catImageUrl, setCatImageUrl] = useState("https://cataas.com/c");
  const [btnTxt, setBtnTxt] = useState("作業開始猫");

  // ボタンクリック時に呼び出される関数
  const handleClick = async () => {
    handleBtnTxt();
    handleCatImg();
  };

  // cataasAPIから非同期でURLを持ってきている
  const handleCatImg = async () => {
    if (catImageUrl == "https://cataas.com/c/gif") {
      setCatImageUrl("https://cataas.com/c");
    } else {
      setCatImageUrl("https://cataas.com/c/gif");
    }
  };

  // 静止画かgif画像かでボタンの表示を変えている
  const handleBtnTxt = () => {
    if (catImageUrl == "https://cataas.com/c") {
      console.log("start");
      setBtnTxt("作業中断猫");
    } else {
      console.log("stop");
      setBtnTxt("作業開始猫");
    }
  };

  // DOMを返す
  return (
    <Neko>
      <h1>ねこを見る</h1>
      <CatButton onClick={handleClick}>{btnTxt}</CatButton>

      {/* とりあえず放置　imgで代用　後でstyled-component入れて解決したい */}
      {/* <Image src={catImageUrl} alt="this is cat" layout="fill" /> */}
      <CatImg src={catImageUrl} alt="this is cat" />
    </Neko>
  );
}

// 以下styled-componentによるスタイルの指定
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
