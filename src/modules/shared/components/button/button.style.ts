import styled from "styled-components/native";

interface ButtonContainerProps {
    margin?: string,
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
    width: 90%;
    height: 48px;
    border-radius: 5px;
    color: red;
    background-color: blue;
    justify-content: center;
    align-items: center;
    ${(props: { margin: string; }) => props.margin ? `margin: ${props.margin};` : '' }
`