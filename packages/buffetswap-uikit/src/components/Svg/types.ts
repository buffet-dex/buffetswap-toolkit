import { SVGAttributes } from "react";
import { DefaultTheme } from "styled-components";
import { SpaceProps } from "styled-system";
import { Colors } from "../../theme";

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
  theme?: DefaultTheme;
  spin?: boolean;
}
export interface ILogoImg {
  src?: string;
  scale?: "sm" | "md" | "lg";
  size?: number;
  height?: string;
  fill?: string;
  className?: string;
  isResponsive?: boolean;
}

export type IconComponentType = {
  iconName: string;
  isActive?: boolean;
  height?: string;
  width?: string;
  activeColor?: string;
  activeBackgroundColor?: keyof Colors;
} & SvgProps;
