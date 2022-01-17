import React from "react";
import { Flex, Box } from "../Box";
import { SwapVertIcon } from "../Svg";
import Text from "../Text/Text";
import { StyledBalanceInput, StyledInput, UnitContainer, SwitchUnitsButton } from "./styles";
import { BalanceInputProps } from "./types";

const BalanceInput: React.FC<BalanceInputProps> = ({
  value,
  placeholder = "0.0",
  onUserInput,
  currencyValue,
  inputProps,
  innerRef,
  isWarning = false,
  decimals = 18,
  unit,
  switchEditingUnits,
  ...props
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.validity.valid) {
      onUserInput(e.currentTarget.value.replace(/,/g, "."));
    }
  };

  return (
    <StyledBalanceInput isWarning={isWarning} {...props}>
      <Flex justifyContent="flex-end">
        <Box>
          <Flex alignItems="center">
            <StyledInput
              pattern={`^[0-9]*[.,]?[0-9]{0,${decimals}}$`}
              inputMode="decimal"
              min="0"
              value={value}
              onChange={handleOnChange}
              placeholder={placeholder}
              ref={innerRef}
              {...inputProps}
            />
            {unit && <UnitContainer>{unit}</UnitContainer>}
            {switchEditingUnits && (
              <Flex alignItems="center" pl="12px">
                <SwitchUnitsButton scale="sm" variant="text" onClick={switchEditingUnits}>
                  <SwapVertIcon color="textSubtle" />
                </SwitchUnitsButton>
              </Flex>
            )}
          </Flex>
          {currencyValue && (
            <Text fontSize="12px" bold textAlign="right" color="textSubtleOpacity" pr="48px">
              {currencyValue}
            </Text>
          )}
        </Box>
      </Flex>
    </StyledBalanceInput>
  );
};

export default BalanceInput;
