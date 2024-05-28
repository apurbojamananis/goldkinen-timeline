import { useMemo } from "react";

export const RandomNumber = (max: number): number => {
    return useMemo(() => Math.round(Math.random() * max), [max]);
  };