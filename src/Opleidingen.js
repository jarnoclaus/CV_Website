
export default function Opleidingen() {
    const basisOpleidingen = [
        'HTML en CSS',
        'SQL',
        'Javascript',
        'OOP',
        'Gegevensanalyse',
        'Programmatielogica'
    ]
    const opleidingen = [
        'C# Programming Fundamentals',
        'Regex',
        'Test Driven Development',
        'ASP.NET MVC',
        'Entity Framework',
        'Web API',
        'Razor Pages',
        'Blazor',
        'Design Patterns',
        'React'
    ]
    return (
        <div className='opleidingen'>
            <h2>Opleidingen</h2>
            <h3>.NET Ontwikkelaar met C# 1/06/24 - Heden</h3>
            <ol>
                <li>Basisopleiding IT</li>
                <ul>
                    {basisOpleidingen.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <li>.NET C#</li>
                <ul>
                    {opleidingen.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </ol>
            <h3>Fitness instructeur<br />
                & Personal coach (Diploma)</h3>
            <h3>IT en netwerken (middelbaar)</h3>
        </div>
    )
}