import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Image } from "./styles";

import Logo from "@assets/logo.png";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("groups");
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}

      <Image source={Logo} />
    </Container>
  );
}
