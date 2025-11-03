import './Header.css'
import './Page.css'
import foto from './images/foto.png'
import phone from './images/phone.png'
import email from './images/gmail.png'
import address from './images/address.png'
import driving from './images/driving license.png'
import date from './images/date.png'

export default function Header() {
    return (
        <header className="header page">
            <div className='left-section'>
                <img src={foto} alt='Foto' />
                <div className='name'>
                    <h1>JARNO<br />CLAUS</h1>
                </div>
            </div>
            <div className='right-section'>
                <h2>Informatie</h2>
                <p><img src={date} alt='birthday' />10/02/2000</p>
                <p><img src={email} alt='gmail' />clausjarno@gmail.com</p>
                <p><img src={phone} alt='phone number' />0471/24.54.01</p>
                <p><img src={address} alt='address' />Zelebaan 17, bus 201
                    9160 Lokeren
                </p>
                <p><img src={driving} alt='driving license' />Rijbewijs B</p>
            </div>
        </header >
    )
}