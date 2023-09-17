import { Text, View } from "react-native";
import { ContainerLogin } from "../styles/login.styles";
import { Input } from "../../shared/components/input/input";

const Login = () => {
    return (
        <View>
            <ContainerLogin>
                <Text>
                    Olá
                </Text>
                <Input />
            </ContainerLogin>
        </View>
    )
}

export default Login;