export default function Talenkennis() {
    return (
        <div className='talenkennis'>
            <h2>Talenkennis</h2>
            <div className='taal'>
                <span>Nederlands</span>
                <div className="bar">
                    <div className="bar-level" style={{ width: '100%' }}></div>
                </div>
                <span>Engels</span>
                <div className="bar">
                    <div className="bar-level" style={{ width: '80%' }}></div>
                </div>
                <span>Frans</span>
                <div className="bar">
                    <div className="bar-level" style={{ width: '20%' }}></div>
                </div>
            </div>
        </div>
    )
}