import { Container, Image } from "./styles";

import Logo from "@assets/logo.png";

export function Header(){
    return (
        <Container>
            <Image source={Logo} />
        </Container>
    );
}