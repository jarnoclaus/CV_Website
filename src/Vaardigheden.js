export default function Vaardigheden() {
    const vaardigheden = [
        'Zelfstandig',
        'Stipt',
        'Teamspeler',
        'Inzicht',
        'Probleemoplossend',
        'Analytisch'
    ]
    return (
        <div className='vaardigheden'>
            <h2>Persoonlijke Vaardigheden</h2>
            <ul>
                {vaardigheden.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
