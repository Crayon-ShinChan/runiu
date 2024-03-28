"use client";

import { VChart } from "@visactor/react-vchart";

export default function TestChart() {
  const spec = {
    data: [
      {
        id: "barData",
        values: [
          { month: "Monday", sales: 22 },
          { month: "Tuesday", sales: 13 },
          { month: "Wednesday", sales: 25 },
          { month: "Thursday", sales: 29 },
          { month: "Friday", sales: 38 },
        ],
      },
    ],
    type: "bar",
    xField: "month",
    yField: "sales",
  };

  return <VChart spec={spec} />;
}