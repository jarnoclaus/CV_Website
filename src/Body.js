import './Body.css'
import './Page.css'
import Opleidingen from './Opleidingen.js'
import Vaardigheden from './Vaardigheden.js'
import Talenkennis from './Talenkennis.js'
import Werkervaring from './Werkervaring.js'
import Computerkennis from './Computerkennis.js'
import { useState } from 'react'
import Portfolio from './Portfolio.js'

export default function Body() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  function GoToPortfolio() {
    setShowPortfolio(!showPortfolio)
  }
  if (showPortfolio) {
    return (
      <div>
        <Portfolio button={<PortfolioButton handeClick={GoToPortfolio} text='Keer terug' />} />
      </div>
    )
  }
  else {
    return (
      <>
        <div className='page body'>
          <div className='left-section'>
            <Opleidingen />
            <Vaardigheden />
            <Talenkennis />
          </div>
          <div className='right-section'>
            <div className='profiel'>
              <h2>Profiel</h2>
              <p>
                Ik ben 25 jaar en volg momenteel een opleiding in .NET
                development. Ik heb een grote interesse in
                softwareontwikkeling en ben gemotiveerd om mijn kennis
                verder uit te breiden. Hoewel ik nog aan het begin van mijn
                carrière sta, kijk ik enorm uit naar een praktische uitdaging om
                mijn vaardigheden verder te ontwikkelen.
              </p>
            </div>
            <Werkervaring />
            <Computerkennis />
            <PortfolioButton handeClick={GoToPortfolio} text='Portfolio' />
          </div>
        </div>
      </>
    )
  }
}

function PortfolioButton({ handeClick, text }) {
  return (
    <button onClick={handeClick}>{text}</button>
  )
}