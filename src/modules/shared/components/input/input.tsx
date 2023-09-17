import { TextInput } from "react-native"
import { TextInputProps } from "react-native/types"
import { ContainerInput } from "./input.style"

type InputProps = TextInputProps;

export const Input = ({...props}: InputProps) => {
    return (
        <ContainerInput {...props}/>
    )
}