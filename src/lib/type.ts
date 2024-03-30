export const axesOptions = ["score", "issued"] as const;
export type Axes = (typeof axesOptions)[number];
