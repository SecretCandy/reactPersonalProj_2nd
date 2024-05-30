export default function ExpenseList({expenses}) {

    return <div>
        {expenses.map((element) => {
            return (<div>element.title</div>)
        })}
    </div>
}