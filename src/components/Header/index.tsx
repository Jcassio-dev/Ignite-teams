import { BackButton, BackIcon, Container, Image } from "./styles";

import Logo from "@assets/logo.png";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Image source={Logo} />
    </Container>
  );
}
