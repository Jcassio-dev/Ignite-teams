import { Container, SubTitle, Title } from "./style";

type HighlightProps = {
    title: string;
    subTitle: string;
};

export function Highlight({ title, subTitle }: HighlightProps) {
    return (
        <Container>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
        </Container>
    );
}