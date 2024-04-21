import { Container, Message } from "./styles";

type ListEmptyProps = {
    message: string;
}

export function ListEmpty({ message }: ListEmptyProps) {
    return (
        <Container>
            <Message>Nenhum item encontrado</Message>
        </Container>
    )
}