import { atom } from "jotai";
import type { Axes, DefaultDateRange } from "./type";

export const dateRangeAtom = atom<[Date | null, Date | null]>([
  new Date(new Date().setFullYear(new Date().getFullYear() - 2)),
  new Date(),
]);

export const defaultDateRangeAtom = atom<DefaultDateRange | null>(
  "Past 2 Years",
);

export const axesAtom = atom<Axes[]>(["score"]);

export const defaultLegendAtom = atom<string[]>(["General"]);
