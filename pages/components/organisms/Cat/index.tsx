import { useState } from "react";
import styled from "styled-components";

interface CatCategory {
  id: number;
  name: string;
}

interface SearchCatImage {
  breeds: string[];
  categories: CatCategory[];
  id: string;
  url: string;
  width: number;
  height: number;
}

type SearchCatImageResponse = SearchCatImage[];

const fetchCatImage = async () => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const result = (await res.json()) as SearchCatImageResponse;
  console.log(result[0]);
  return result[0];
};

export default function Cat() {
  const [catImageUrl, setCatImageUrl] = useState(
    "https://cdn2.thecatapi.com/images/MTgzNjYwMQ.jpg"
  );

  const handleClick = async () => {
    const image = await fetchCatImage();
    setCatImageUrl(image.url);
  };

  return (
    <Neko>
      <h1>ねこねこねこねこ</h1>
      <button onClick={handleClick}>ねこ〜〜〜〜〜〜〜〜</button>

      {/* とりあえず放置　後でstyled-component入れて解決したい */}
      <CatImg src={catImageUrl} alt="this is cat" />
      {/* <Image src={catImageUrl} alt="this is cat" layout="fill" /> */}
    </Neko>
  );
}

const Neko = styled.div`
  width: 200px;
  height: auto;
`;

const CatImg = styled.img`
  width: 200px;
  height: auto;
`;
