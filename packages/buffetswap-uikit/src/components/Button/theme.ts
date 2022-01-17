import { baseColors } from "../../theme/colors";
import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.LG]: {
    height: "71px",
  },
  [scales.MD]: {
    height: "55px",
    padding: "0 32px",
  },
  [scales.SM]: {
    height: "47px",
    padding: "0 24px",
  },
  [scales.XS]: {
    height: "26px",
    fontSize: "14px",
    padding: "6px 12px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    background: baseColors.secondary,
    color: "white",
  },
  [variants.SECONDARY]: {
    color: "primary",
    boxShadow: "none",
    position: "relative",
    ":disabled": {
      backgroundColor: "transparent",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "16px",
      padding: "3px",
      background: baseColors.secondary,
      "-webkit-mask": "linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)",
      "-webkit-mask-composite": "destination-out",
      "mask-composite": "exclude",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "backgroundAlt",
    borderRadius: "28px",
  },
  [variants.SUBTLE_PRIMARY]: {
    backgroundColor: "primary",
    color: "backgroundAlt",
    borderRadius: "28px",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
  [variants.LIGHT]: {
    backgroundColor: "input",
    color: "textSubtle",
    boxShadow: "none",
  },
  [variants.MAX]: {
    backgroundColor: "#1FAD7A",
    color: "white",
    borderRadius: "8px",
  },
  [variants.GREY]: {
    backgroundColor: "rgba(239, 88, 35, 0.1)",
    color: "primary",
    borderRadius: "12px",
    "&:disabled,&.pancake-button--disabled": {
      background: "rgba(239, 88, 35, 0.1)",
      opacity: "0.5",
      borderColor: "none",
      boxShadow: "none",
      color: "primary",
      cursor: "not-allowed",
    },
  },
  [variants.CALCULATOR]: {
    backgroundColor: "primary",
    color: "white",
    fontSize: "12px",
    borderRadius: "12px",
    height: "24px",
    padding: 0,
    ":disabled": {
      background: "transparent",
    },
  },
};
