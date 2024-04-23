import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
    flex: 1;

    max-height: 56px;
    min-height: 56px;

    background-color: ${({theme}) => theme.COLORS.GRAY_700};

    border-radius: 6px;

    padding: 0 16px;

    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    color: ${({theme}) => theme.COLORS.WHITE};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`