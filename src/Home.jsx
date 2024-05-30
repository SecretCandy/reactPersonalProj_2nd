import styled from "styled-components"
import MonthNavigation from "./components/MonthNavigation"

const Container = styled.main`
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
`;

const Section = styled.section`
    background-color: #ffffff;
    border-radius: 16px;
    padding: 20px;
`;

export default function Home() {
    return (
        <Container>
            <MonthNavigation />
            <Section>캘린더 역할을 하는 섹션</Section>
            <Section>지출을 리스팅하는 섹션</Section>   
        </Container>
    );
}