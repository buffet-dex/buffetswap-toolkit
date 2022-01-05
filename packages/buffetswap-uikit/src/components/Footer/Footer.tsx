import React from "react";
import { baseColors, darkColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import { LogoWithTextIcon } from "../Svg";
import { StyledFooter, StyledList, StyledListItem, StyledText, StyledSocialLinks } from "./styles";
import { FooterProps } from "./types";

const MenuItem: React.FC<FooterProps> = ({ items, ...props }) => {
  return (
    <StyledFooter p={["24px 16px", null, "32px 24px 24px 64px;"]} {...props} justifyContent="center">
      <Flex flexDirection={["column", null, "row"]} justifyContent="space-between" width={["100%", null, "1370px"]}>
        <Flex
          justifyContent={["space-around", null, "space-between"]}
          flexBasis={[null, null, "calc(100% - 200px)", "47%"]}
        >
          <Box pr="20px" display={["none", null, "block"]}>
            <LogoWithTextIcon fill="white" />
          </Box>
          {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label}>
                  {href ? (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      color={isHighlighted ? baseColors.warning : darkColors.text}
                      bold={false}
                    >
                      {label}
                    </Link>
                  ) : (
                    <StyledText>{label}</StyledText>
                  )}
                </StyledListItem>
              ))}
            </StyledList>
          ))}
        </Flex>

        <StyledSocialLinks order={[2]} />
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
