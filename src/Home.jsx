import styled from "styled-components"
import MonthNavigation from "./components/MonthNavigation"
import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

const Container = styled.main`
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
`;

export const Section = styled.section`
    background-color: #ffffff;
    border-radius: 16px;
    padding: 20px;
`;

export default function Home({expenses, setExpenses}) {
    const [month, setMonth] = useState(1);

    return (
        <Container>
            <MonthNavigation month={month} setMonth={setMonth} />
            <Section>지출 입력섹션</Section>
            <ExpenseList expenses={expenses} />
        </Container>
    );
}