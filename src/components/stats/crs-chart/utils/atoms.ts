import { atom } from "jotai";
import { type Axes } from "./type";

export const dateRangeAtom = atom<[Date | null, Date | null]>([
  new Date(new Date().setFullYear(new Date().getFullYear() - 2)),
  new Date(),
]);

export const axesAtom = atom<Axes[]>(["score"]);
