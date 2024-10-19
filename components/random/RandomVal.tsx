"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function RandomVal() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [randomValue, setRandomValue] = useState<number | null>(null);

  useEffect(() => {
    setRandomValue(randomIntFromInterval(min, max));
  }, [min, max]);

  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleClick = () => {
    setRandomValue(randomIntFromInterval(min, max));
  };

  return (
    <>
      <h1>Random Value</h1>
      Random Value is: <h6 data-testid="random-value">{randomValue}</h6>
      <br />
      Between
      <Input
        value={min}
        id="min-input"
        data-testid="min-input"
        onChange={(e) => setMin(parseInt(e.target.value))}
        type="number"></Input>
      And
      <Input
        value={max}
        id="max-input"
        data-testid="max-input"
        onChange={(e) => setMax(parseInt(e.target.value))}
        type="number"></Input>
      <Button variant={"outline"} onClick={handleClick}>
        Get New
      </Button>
    </>
  );
}
