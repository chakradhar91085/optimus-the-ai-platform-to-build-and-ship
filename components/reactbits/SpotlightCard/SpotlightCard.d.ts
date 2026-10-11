import type { CSSProperties, FC, HTMLAttributes, ReactNode } from "react";

declare const SpotlightCard: FC<
  {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    spotlightColor?: string;
    intensity?: number;
    spotlightSize?: number;
    softness?: number;
    shape?: "circle" | "beam";
    borderGlow?: number;
    proximity?: number;
    smoothing?: number;
    ambient?: boolean;
    flare?: boolean;
    grain?: number;
    theme?: "dark" | "light";
  } & Omit<HTMLAttributes<HTMLDivElement>, "style" | "className" | "children">
>;
export default SpotlightCard;
