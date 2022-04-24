// import jquery from "jquery";
// import axios from 'axios';
import { Button } from '../common/Button';
import { navigateTo } from '../layout/Nav';
import { Rooms } from '../views/Rooms';
import { Treatments } from './Treatments';

export function Home() {
    const section = document.createElement('section');
    const guzik = Button({
        text: "Zobacz nasze pokoje!",
        callback: () => {
            navigateTo(Rooms);
        },
        class:"guzik"
    });
    const guzik2 = Button({
        text: "Zobacz nasze zabiegi!",
        callback: () => {
            navigateTo(Treatments);
        },
        class:"guzik"
    });

    section.innerHTML = `
    <div class=homeimg> </div>
    <div class=calymain>
    <div class=powitanie>
        <h2>😍 Witam w SPA! 😍 </h2>
        <p>Chwila dla Ciebie!</p>
        <p>Zapraszamy!</p>
    </div>
    <div class="oferta oferta-pokoj">
        <div class=opis> <h1> Pokoje </h1>
            <h2> Tutaj czas płynie wolniej  &#8658; </h2>
            <p> Wspaniałe pokoje, niesamowite wnętrza, przyjedź i spędź z nami noc swojego życia na samym wybrzeżu Catani. Nasz obiekt znajduję się na przy plaży - w miejscu, które tętni życiem cały rok. </p> 
        </div>
        <div class=obrazek>
        </div>
    </div>
        <br><br>

    <div class="oferta oferta-zabieg"> 
            <div class=obrazek></div>
            <div class=opis> <h1> Zabiegi </h1>
            <h2> &#8656; Pozwól nam o siebie zadbać  </h2>
            <p> Oddaj się w dobre ręce naszych specjalistek SPA i pozwól sobie na cudowne chwile relaksu i&nbsp;wyciszenia. Indywidualnie dobrany masaż lub zabieg przywróci tak potrzebną w dzisiejszych zabieganych czasach równowagę ciała i ducha </p> 
            </div>
    </div>
        <br> <br>


    <div class="oferta oferta-basenisauna"> 
        <div class="obrazek obrazek-lewy"> </div>
            <div class=opis>
            <h1> Basen & Sauny </h1>
            <h2> Mocno rozrzewająca sauna i&nbsp;ciepły basen </h2> 
            <p> Basen i Sauny do dyspozycji wszystkich gości Hotelu. <br>Zwolnij i pozwól sobie na wytchnienie od pośpiechu dnia codziennego. Basen z widokiem na turkusy morza Jońskiego a&nbsp;jacuzzi z widokiem na gwiazdy jest dopełnieniem przyjemnych chwil. </p>
            </div>
            <div class="obrazek obrazek-prawy"> </div>
    </div>

    </div>

    `;

    section.querySelector(".oferta-pokoj .opis").append(guzik);
    section.querySelector(".oferta-zabieg .opis").append(guzik2);

    return section;
}



// export default Home;
