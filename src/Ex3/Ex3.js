import { useState } from "react";
import styled from "styled-components";
import { Button } from "./utils";

const Progress = ({ progress }) => <div />;

export default function App() {
  const [value, setValue] = useState(0);

  /*
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
  */
  return (
    <div>
      <Progress progress={value} />

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
