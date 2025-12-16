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

    const handleclick = (buttonName) => {
        switch (buttonName) {
            case '1': {
                setShowProject1(!showProject1);
                setShowProject2(false);
                setShowProject3(false);
                break;
            }
            case '2': {
                setShowProject1(false);
                setShowProject2(!showProject2);
                setShowProject3(false);
                break;
            }
            case '3': {
                setShowProject1(false);
                setShowProject2(false);
                setShowProject3(!showProject3);
                break;
            }
            default: {
                break;
            }
        }
    }

    return (
        <div className='body page portfolio'>
            <div className='portfolio-header'>
                <h1>Portfolio - Projects</h1>
                {button}
            </div>
            <h2 onClick={() => handleclick('1')}>.NET MAUI - Shoppinglist  {showProject1 ? "▲" : "▼"} <span>(Eigen project, In development)</span></h2>
            {showProject1 && (
                <>
                    <div className='portfolio-images'>
                        <img src={Lijstje} alt='Lijstje' />
                        <img src={Afgestreept} alt='Afgestreept' />
                        <img src={Popup} alt='Popup' />
                        <img src={Producten} alt='Producten' />
                    </div>
                    <h3>Omschrijving <span></span></h3>
                    <p>Eerste kennismaking met .NET MAUI.<br />
                        Het doel van dit project is het ontwikkelen van een interactieve boodschappenlijst-applicatie met .NET MAUI.
                        De app stelt gebruikers in staat om een lijst met producten (inclusief prijzen) te bekijken en items aan hun actieve boodschappenlijst toe te voegen door erop te klikken.
                        De boodschappenlijst wordt automatisch gesorteerd volgens de indeling van de winkel voor een efficiënte winkelervaring.
                        Een belangrijke uitdaging van dit project is het implementeren van realtime cloud-synchronisatie, waardoor samenwerking tussen gebruikers,
                        zoals het delen van de boodschappenlijst met een partner, mogelijk wordt.</p>
                </>
            )}
            <h2 onClick={() => handleclick('2')}>Javascript React {showProject2 ? "▲" : "▼"}<span>(Opleiding, Fase 2 afgerond 15/12/2025)</span></h2>
            {showProject2 && (
                <>
                    <div className='portfolio-javascript-project'>
                        <ul>
                            <li>
                                Live demo: <i><a href='https://jarnoclaus.github.io/psychology_office_Frontend/'>Live website</a></i> (admin account: laeny.lapierre@hotmail.com admin123)
                            </li>
                            <li>
                                Frontend code: <i><a href='https://github.com/jarnoclaus/psychology_office_Frontend'>Github repository</a></i>
                            </li>
                            <li>
                                Backend code: <i><a href='https://github.com/jarnoclaus/PsychologyOffice'>Github repository</a></i>
                            </li>
                        </ul>
                    </div>
                    <h3>Omschrijving</h3>
                    <p>
                        Eerste kennismaking met React.<br />
                        Het doel van dit project was het ontwikkelen van een eenvoudige webapplicatie met React als front-end.
                        Voor de back-end is gebruikgemaakt van een .NET Web API in combinatie met Entity Framework Core.
                        Als casus heb ik gekozen voor een webapplicatie voor een psychologiepraktijk.
                        De beheerder kan alle afspraken van cliënten beheren, terwijl een cliënt alleen zijn of haar eigen afspraken kan bekijken en toevoegen.
                        De back-end API is online gehost via Render. Vanwege het gebruik van de gratis versie kan de eerste API-aanroep
                        een vertraging van circa één minuut vertonen als gevolg van een cold start.
                        De database wordt gehost via Neon (PostgreSQL) en benaderd met behulp van Npgsql.
                        <br /><br />
                        Het project wordt uitgevoerd in de volgende fasen:
                        <br />
                        <strong>Fase 1:</strong> Opzetten van de back-end API en de front-end applicatie met React.<br />
                        <strong>Fase 2:</strong> Online brengen van de volledige webapplicatie.<br />
                        <strong>Fase 3:</strong> Oplossen van kleine fouten en het uitvoeren van code refactoring.


                    </p>
                </>
            )}
            <h2 onClick={() => handleclick('3')}>Scrum Project {showProject3 ? "▲" : "▼"}<span>(Opleiding, project afgerond 8/12/2025)</span></h2>
            {showProject3 && (
                <>
                    <div className='portfolio-images bestellingen'>
                        <img src={ScrumProject} alt='Bestellingen overzicht' />
                    </div>
                    <h3>Omschrijving</h3>
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



