import Todo from "../../organisms/Todo";
import styled from "styled-components";
import Cat from "../../organisms/Cat";
export default function Body() {
  return (
    <BodyWrapper>
      <Cat />
      <Todo />
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  display: flex;
`;
