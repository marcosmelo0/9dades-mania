import { View } from "react-native";
import { ContainerLogin } from "../styles/login.styles";
import Input  from "../../shared/components/input/Input";
import Button from "../../shared/components/button/Button";
import Text from "../../shared/components/text/Text";

const Login = () => {
    const handleButton = () => {
        console.log("clicou")
    }

    return (
        <View>
            <ContainerLogin>
                
                <Input />
                <Button margin="16px 0" title="ENTRAR" onPress={handleButton}/>
            </ContainerLogin>
        </View>
    )
}

export default Login;