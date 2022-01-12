import styled from "styled-components";
import Text from "../Text/Text";
import { tags, scales, HeadingProps } from "./types";

const style = {
  [scales.MD]: {
    fontSize: "20px",
    fontSizeLg: "20px",
  },
  [scales.LG]: {
    fontSize: "30px",
    fontSizeLg: "30px",
  },
  [scales.XL]: {
    fontSize: "38px",
    fontSizeLg: "46px",
  },
  [scales.XXL]: {
    fontSize: "46px",
    fontSizeLg: "46px",
  },
};

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  font-size: ${({ scale, fontSize }) => {
    if (fontSize) {
      return fontSize;
    }
    return style[scale || scales.MD].fontSize;
  }}
  line-height: 1.1;

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: ${({ scale, fontSize }) => {
      if (fontSize) {
        return fontSize;
      }
      return style[scale || scales.MD].fontSizeLg;
    }}
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
