import './Body.css'
import './Page.css'
import { useState } from 'react'
import Lijstje from './images/Lijstje.jpg'
import Afgestreept from './images/Afgestreept.jpg'
import Popup from './images/popup.jpg'
import Producten from './images/Producten.jpg'
import ScrumProject from './images/Bestellingen.png'

export default function Portfolio({ button }) {
    const [showProject1, setShowProject1] = useState(true)
    const [showProject2, setShowProject2] = useState(false)
    const [showProject3, setShowProject3] = useState(false)

    return (
        <div className='body page portfolio'>
            <div className='portfolio-header'>
                <h1>Portfolio - Projects</h1>
                {button}
            </div>
            <h2 onClick={() => setShowProject1(!showProject1)}>.NET MAUI - Shoppinglist  {showProject1 ? "▲" : "▼"} <span>(Eigen project, In development)</span></h2>
            {showProject1 && (
                <>
                    <div className='portfolio-images'>
                        <img src={Lijstje} alt='Lijstje' />
                        <img src={Afgestreept} alt='Afgestreept' />
                        <img src={Popup} alt='Popup' />
                        <img src={Producten} alt='Producten' />
                    </div>
                    <h3>Doel <span></span></h3>
                    <p>Eerste kennismaking met .NET MAUI.<br />
                        Het doel van dit project is het ontwikkelen van een interactieve boodschappenlijst-applicatie met .NET MAUI.
                        De app stelt gebruikers in staat om een lijst met producten (inclusief prijzen) te bekijken en items aan hun actieve boodschappenlijst toe te voegen door erop te klikken.
                        De boodschappenlijst wordt automatisch gesorteerd volgens de indeling van de winkel voor een efficiënte winkelervaring.
                        Een belangrijke uitdaging van dit project is het implementeren van realtime cloud-synchronisatie, waardoor samenwerking tussen gebruikers,
                        zoals het delen van de boodschappenlijst met een partner, mogelijk wordt.</p>
                </>
            )}
            <h2 onClick={() => setShowProject2(!showProject2)}>Javascript React {showProject2 ? "▲" : "▼"}<span>(Opleiding, In development)</span></h2>
            {showProject2 && (
                <>
                    <div className='portfolio-javascript-project'>
                        <p>Live demo: <i><a href='https://jarnoclaus.github.io/psychology_office_Frontend/'>Live website</a></i></p>
                        <p>Frontend code: <i><a href='https://github.com/jarnoclaus/psychology_office_Frontend'>Github repository</a></i></p>
                        <p>Backend code: <i><a href='https://github.com/jarnoclaus/PsychologyOffice'>Github repository</a></i></p>
                    </div>
                    <h3>Doel</h3>
                    <p>Eerste kennismaking met React. <br />
                        Het doel van dit project is het ontwikkelen van een eenvoudige webapplicatie met React als front-end.
                        Voor de back-end wordt gebruikgemaakt van .NET Web API in combinatie met Entity Framework Core.</p>
                </>
            )}
            <h2 onClick={() => setShowProject3(!showProject3)}>Scrum Project {showProject3 ? "▲" : "▼"}<span>(Opleiding, project afgerond 8/12/2025)</span></h2>
            {showProject3 && (
                <>
                    <div className='portfolio-images bestellingen'>
                        <img src={ScrumProject} alt='Bestellingen overzicht' />
                    </div>
                    <h3>Doel</h3>
                    <p>
                        Eerste kennismaking met de SCRUM-methode.<br />
                        Dit Scrumproject bestond uit vier teams: verkoop, aankoop, magazijn en webshop. Ik maakte deel uit van het team verkoop.
                        Hieronder schets ik kort onze opdracht aan de hand van een user story.
                        <div className='cursive'>
                            <i>
                                "Als medewerker van de klantendienst wil ik bij het inloggen een overzicht krijgen van alle bestellingen, met de mogelijkheid tot filtering, sortering en paginering,
                                evenals een overzicht van alle klanten. Zo kan ik klanten snel en efficiënt helpen wanneer zij telefonisch contact opnemen."
                            </i>
                        </div>
                        Dit project omvatte uiteraard veel meer dan enkel de ontwikkeling zelf, zoals het opstellen van user stories, sprinttaken, sprintplanningen en sprintretrospectives.
                        Binnen het team verkoop was ik, als onderdeel van pair programming, verantwoordelijk voor het implementeren van de filtering, sortering en paginering van beide overzichten.
                        <p>
                            De gebruiker kan meerdere filters tegelijk combineren en daarnaast sorteren op elke kolomheader, zowel oplopend als aflopend. Bovendien kan het gewenste aantal bestellingen per pagina worden ingesteld.
                            Het paginanummer kan worden gewijzigd via de navigatieknoppen of door rechtstreeks op het huidige paginanummer te klikken en handmatig een nieuw nummer in te voeren.
                            Wanneer een gebruiker een bestelling opent en vervolgens terugkeert naar het overzicht, blijven alle toegepaste filters, de sorteervolgorde en de huidige pagina behouden.
                        </p>
                    </p>
                </>
            )}
        </div>
    );
}


