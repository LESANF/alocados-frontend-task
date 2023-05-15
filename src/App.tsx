import React from "react";
import styled from "styled-components";

const TestComponent = styled.div`
  background-color: peru;
  width: 300px;
  height: 300px;
`;

const handleClick = (a: number) => {
  alert(a);
};

const App = () => {
  return <TestComponent onClick={() => handleClick(1)}>Hello World!</TestComponent>;
};

export default App;
