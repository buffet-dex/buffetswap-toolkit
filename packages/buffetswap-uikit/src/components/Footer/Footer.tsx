import React from "react";
import styled from "styled-components";
import { baseColors, darkColors } from "../../theme/colors";
import { Button, Colors } from "../..";
import LangSelector from "../LangSelector/LangSelector";
import CakePrice from "../CakePrice/CakePrice";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import { BuffetLogoWithTextIcon } from "../Svg";
import {
  StyledFooter,
  StyledList,
  StyledListItem,
  StyledText,
  StyledSocialLinks,
  StyledToolsContainer,
  StyledIconMobileContainer,
} from "./styles";
import { FooterProps } from "./types";

const FooterButton = styled(Button)`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  height: 30px;

  a {
    color: ${({ theme }) => theme.colors.textSubtleOpacity};
    font-size: 12px;
  }
`;
const MenuItem: React.FC<FooterProps> = ({
  items,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  return (
    <StyledFooter p={["24px 16px", null, "32px 24px 24px 64px;"]} {...props} justifyContent="center">
      <Flex flexDirection={["column", null, "row"]} justifyContent="space-between" width={["100%", null, "1370px"]}>
        <StyledIconMobileContainer display={["block", null, "none"]}>
          <BuffetLogoWithTextIcon size={130} />
        </StyledIconMobileContainer>
        <Box display={["none", null, "block"]} mr={["10px"]}>
          <BuffetLogoWithTextIcon size={62} />
        </Box>
        <Flex
          justifyContent={["space-around", null, "space-between"]}
          flexBasis={[null, null, "calc(100% - 200px)", "47%"]}
        >
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
        <Flex flexDirection="column">
          <StyledToolsContainer
            alignItems="baseline"
            order={[1, null, 3]}
            flexDirection="row"
            justifyContent="space-between"
          >
            <Flex order={[2, null, 1]} alignItems="center">
              <LangSelector
                currentLang={currentLang}
                langs={langs}
                setLang={setLang}
                color={darkColors.backgroundAlt as keyof Colors}
                dropdownPosition="top-right"
              />
            </Flex>
            <Flex order={[1, null, 2]} mb={["24px", null, "0"]} justifyContent="space-between" alignItems="center">
              <Box mr="20px">
                <CakePrice cakePriceUsd={cakePriceUsd} color={darkColors.backgroundAlt as keyof Colors} />
              </Box>
              <FooterButton scale="xs">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
                >
                  {buyCakeLabel}
                </a>
              </FooterButton>
            </Flex>
          </StyledToolsContainer>
          <StyledSocialLinks order={[2]} />
        </Flex>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
