import React from "react";
import styled from "styled-components";
import { Flex } from "../../Box";
import { ILogoImg } from "../types";

const buffetLogoSrc = "/images/buffet-logo.png";
const getScaleSize = ({ scale, size }: ILogoImg) => {
  if (scale && size) {
    if (scale === "sm") {
      return `${size}px`;
    }
    if (scale === "md") {
      return `${size * 2}px`;
    }
    if (scale === "lg") {
      return `${size * 3}px`;
    }
  }
  return `${size}px`;
};

const LogoImg = styled.img<ILogoImg>`
  width: ${getScaleSize};
  height: ${(props) => props.height};
  margin-right: 8px;
`;

const Logo: React.FC<ILogoImg> = ({ src, fill, size, height, scale }) => {
  return (
    <Flex height="auto" alignItems="center" flexDirection="row">
      {src && <LogoImg height={height} size={size} scale={scale} src={src} alt="" />}
      <svg width="59" height="17" viewBox="0 0 59 17" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.264205 16H6.47869C9.74574 16 11.4858 14.2955 11.4858 11.9801C11.4858 9.82812 9.9446 8.52841 8.28977 8.45028V8.30824C9.80256 7.96733 10.9176 6.89489 10.9176 5.18324C10.9176 3.00284 9.2983 1.45455 6.08807 1.45455H0.264205V16ZM3.33949 13.4858V9.62216H5.91761C7.39489 9.62216 8.31108 10.4744 8.31108 11.6747C8.31108 12.7685 7.56534 13.4858 5.84659 13.4858H3.33949ZM3.33949 7.54119V3.94034H5.67614C7.03977 3.94034 7.81392 4.64347 7.81392 5.6946C7.81392 6.84517 6.87642 7.54119 5.61932 7.54119H3.33949ZM20.4258 11.3551C20.4329 12.8182 19.4315 13.5852 18.3448 13.5852C17.2013 13.5852 16.4627 12.7827 16.4556 11.4972V5.09091H13.43V12.0369C13.4371 14.5866 14.9286 16.142 17.1232 16.142C18.7638 16.142 19.9428 15.2969 20.4329 14.0185H20.5465V16H23.4513V5.09091H20.4258V11.3551ZM31.7379 5.09091H29.5717V4.35938C29.5717 3.62074 29.87 3.1875 30.7578 3.1875C31.12 3.1875 31.4893 3.26562 31.7308 3.34375L32.2635 1.07102C31.8871 0.957386 31.0561 0.772726 30.1257 0.772726C28.0732 0.772726 26.5462 1.9304 26.5462 4.30256V5.09091H25.005V7.36364H26.5462V16H29.5717V7.36364H31.7379V5.09091ZM39.4528 5.09091H37.2866V4.35938C37.2866 3.62074 37.5849 3.1875 38.4727 3.1875C38.8349 3.1875 39.2042 3.26562 39.4457 3.34375L39.9783 1.07102C39.6019 0.957386 38.771 0.772726 37.8406 0.772726C35.788 0.772726 34.261 1.9304 34.261 4.30256V5.09091H32.7198V7.36364H34.261V16H37.2866V7.36364H39.4528V5.09091ZM45.8821 16.2131C48.581 16.2131 50.3991 14.8991 50.8253 12.875L48.027 12.6903C47.7216 13.5213 46.9403 13.9545 45.9318 13.9545C44.419 13.9545 43.4602 12.9531 43.4602 11.3267V11.3196H50.8892V10.4886C50.8892 6.78125 48.6449 4.94886 45.7614 4.94886C42.5511 4.94886 40.4702 7.22869 40.4702 10.5952C40.4702 14.054 42.5227 16.2131 45.8821 16.2131ZM43.4602 9.4446C43.5241 8.2017 44.4688 7.20739 45.8111 7.20739C47.125 7.20739 48.0341 8.14489 48.0412 9.4446H43.4602ZM58.6662 5.09091H56.6136V2.47727H53.5881V5.09091H52.0966V7.36364H53.5881V13.0455C53.5739 15.1832 55.0298 16.2415 57.2244 16.1491C58.0057 16.1207 58.5597 15.9645 58.8651 15.8651L58.3892 13.6136C58.2401 13.642 57.9205 13.7131 57.6364 13.7131C57.0327 13.7131 56.6136 13.4858 56.6136 12.6477V7.36364H58.6662V5.09091Z"
          fill={fill}
        />
      </svg>
    </Flex>
  );
};

Logo.defaultProps = {
  src: buffetLogoSrc,
  size: 20,
  scale: "sm",
  fill: "#FFFFFF",
};

export default Logo;
