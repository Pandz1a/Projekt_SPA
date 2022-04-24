import { Button } from "../common/Button";
import { TreatmentsDetails } from "./TreatmentsDetails";
import { cartManager } from '../cart/cart-manager';

export function Treatments() {

    const section = document.createElement('section');

    section.innerHTML = `
        <h2 class="tlonaglowkow">Treatments</h2>
        <p>Loading...</p>
        <ul></ul>
    `;

    // pobieramy masaże z json-server
    fetch('http://localhost:3000/treatments')
        .then(response => response.json())
        .then(treatments => {
            const lis = treatments.map(treatment => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <h4>${treatment.name}</h4>
                    <p>${treatment.price.toFixed(2)} PLN</p>
                    <img class=treatmentimg src="img/treatments/${treatment.photo}"/>
                    <footer></footer>
                `;

                const seeMoreButton = Button({
                    text: 'See More',
                    class:"oferta-guzik",
                    callback: () => {
                        const navigateEvent = new CustomEvent('navigate', {
                            detail: () => TreatmentsDetails(treatment.id)
                        });
                    
                        document.body.dispatchEvent(navigateEvent);
                    }
                });

                const addToCartButton = Button({
                    text: 'Add to Cart',
                    callback: () => {
                        cartManager.addItem(treatment);
                    },
                    class:"oferta-guzik detale-guzik"

                });
                
                // footer jest ostatnim dzieckiem elementu li
                li.lastElementChild.append(seeMoreButton, addToCartButton);

                return li;
            });

            section.querySelector('p').remove();
            section.lastElementChild.append( ...lis );
        });

    return section;
}
