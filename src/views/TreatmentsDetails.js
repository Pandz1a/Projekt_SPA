import { cartManager } from '../cart/cart-manager';
import { Button } from "../common/Button";
import { Treatments } from "./Treatments";


export function TreatmentsDetails(id) {

    const section = document.createElement('section');

    section.innerHTML = `
        <h2>Treatments</h2>
        <p>Loading...</p>
    `;

    // pobieramy pojedynczy pokoj z json-server
    // np. http://localhost:3000/rooms/2

    fetch(`http://localhost:3000/treatments/${id}`)
        .then(response => response.json())
        .then(treatment => {
            const article = document.createElement('article');
            const addToCartButton = Button({
                text: 'Add to Cart',
                callback: () => {
                    cartManager.addItem(Treatments);
                },
                class:"oferta-guzik detale-guzik"
            });

            article.innerHTML = `
                <h3>${treatment.name}</h3>
                <h3> Ten zabieg obejmuje: <p> <p> 💆 ${treatment.area}</p> </h3>
                <h3> Potrwa on: <p> ⌛ ${treatment.time}</p> </h3>
                <h3> Zapłacisz: 
                <p>
                    <strong>${treatment.price.toFixed(2)} PLN</strong>
                </p>
                </h3>
            `;

            article.appendChild(addToCartButton);

            section.querySelector('p').remove();
            section.append(article);
        });

    return section;
}
