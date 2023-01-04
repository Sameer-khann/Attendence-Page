import React from "react";
import { VictoryPie } from "victory";

export default function pichart() {
  const myData = [
    { x: "PHP", y: 900 },
    { x: "Python", y: 400 },
    { x: "Javascript", y: 300 },
  ];
  return (
    <div style={{ height: 620 }}>
      <VictoryPie
        data={myData}
        colorScale={["blue", "yellow", "red"]}
        radius={100}
      />
    </div>
  );
}
