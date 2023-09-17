import { Text, View } from "react-native";
import { ContainerLogin } from "../styles/login.styles";
import Input  from "../../shared/components/input/Input";
import Button from "../../shared/components/button/Button";

const Login = () => {
    const handleButton = () => {
        console.log("clicou")
    }

    return (
        <View>
            <ContainerLogin>
                <Text>
                    Olá
                </Text>
                <Input />
                <Button margin="16px 0" title="ENTRAR" onPress={handleButton}/>
            </ContainerLogin>
        </View>
    )
}

export default Login;