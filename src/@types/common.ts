import {FC} from "react";

export type View = {
  name: string;
  path: string;
  component?: FC;
};

export type Variant = "primary" | "secondary";

export type Camera = {
  url: string;
  name: string;
  calibration: number[][]
}