import { useEffect, useState } from "react";
import styled from "styled-components";

import { Button } from "./utils";

const ProgressRoot = styled.div`
  background-color: #f0f0f0;
  overflow: hidden;
  height: 4px;
  width: 100%;
  position: relative;
`;

const ProgressBar = styled.span`
  background-color: #00f;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: block;
  transition: all 400ms;
  width: ${(props) => props.progress + "%"};
`;
const ProgressBarOpt = styled.span`
  background-color: #00f;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: block;
  transition: transform 400ms;
  width: 100%;
  transform: translateX(-${(props) => 100 - props.progress + "%"});
`;

const Progress = ({ progress }) => (
  <ProgressRoot>
    <ProgressBarOpt progress={progress} />
  </ProgressRoot>
);

const ProgressLabelRoot = styled.div`
  display: flex;
  align-items: center;
`;
const ProgressLabel = styled.span`
  font-family: sans-serif;
  padding: 4px;
`;

const ProgressWithLabel = ({ progress }) => (
  <ProgressLabelRoot>
    <Progress progress={progress} />
    <ProgressLabel children={progress + `%`} />
  </ProgressLabelRoot>
);
const clamp = (x, min, max) => {
  return Math.min(Math.max(x, min), max);
};

export default function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <ProgressWithLabel progress={clamp(value, 0, 100)} />

      <Button
        onClick={() => {
          setValue((x) => x + 10);
        }}
      >
        +10
      </Button>

      <Button
        onClick={() => {
          setValue((x) => x - 10);
        }}
      >
        -10
      </Button>
    </div>
  );
}
