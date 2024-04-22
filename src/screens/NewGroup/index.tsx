import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subTitle="Crie uma nova turma para adicionar as pessoas"
        />

        <Button title="Criar turma" onPress={() => {}} />
      </Content>
    </Container>
  );
}
