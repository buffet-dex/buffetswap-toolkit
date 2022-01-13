import React from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import MenuButton from "./MenuButton";
import { Colors } from "../../theme";
import { Network } from "./types";
import { Position } from "../Dropdown/types";
import { Scale } from "../Button/types";
import { EthereumIcon, NetworkArrowDownIcon } from "../Svg";

interface Props {
  currentNetwork: string;
  networks?: Network[];
  setNetwork?: (network: Network) => void;
  color: keyof Colors;
  dropdownTextColor: keyof Colors;
  dropdownPosition?: Position;
  buttonScale?: Scale;
  hideNetwork?: boolean;
}

const NetworkButton = styled(Button)`
  height: 48px;
  padding: 8px 12px;
  background: linear-gradient(104.3deg, rgba(255, 187, 56, 0.15) -0.54%, rgba(255, 47, 159, 0.15) 135.91%);
`;
const NetworkSelector: React.FC<Props> = ({
  currentNetwork,
  networks,
  color,
  dropdownTextColor = "text",
  setNetwork,
  dropdownPosition = "bottom",
  buttonScale = "md",
  hideNetwork = false,
}) => (
  <Dropdown
    position={dropdownPosition}
    target={
      <NetworkButton scale={buttonScale} variant="text" startIcon={<EthereumIcon />} endIcon={<NetworkArrowDownIcon />}>
        {!hideNetwork && (
          <Text color={color} margin="0 10px 0 4px" fontSize="16px" bold>
            {currentNetwork}
          </Text>
        )}
      </NetworkButton>
    }
  >
    {networks &&
      networks.map((network) => (
        <MenuButton
          key={network.id}
          fullWidth
          onClick={() => setNetwork && network.isSupported && setNetwork(network)}
          style={{ minHeight: "32px", height: "auto" }}
        >
          <Text color={network.isSupported ? dropdownTextColor : "textDisabled"} fontSize="16px">
            {network.network} {!network.isSupported ? "(soon)" : ""}
          </Text>
        </MenuButton>
      ))}
  </Dropdown>
);

export default React.memo(NetworkSelector, (prev, next) => prev.currentNetwork === next.currentNetwork);
