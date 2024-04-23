import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;

  max-height: 56px;
  min-height: 56px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  border-radius: 6px;

  padding: 0 16px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;
