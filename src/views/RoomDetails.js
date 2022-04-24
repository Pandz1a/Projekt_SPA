import { cartManager } from '../cart/cart-manager';
import { Button } from "../common/Button";

export function RoomDetails(id) {

    const section = document.createElement('section');

    section.innerHTML = `
        <h2>Szczegóły</h2>
        <p>Loading...</p>
    `;

    // pobieramy pojedynczy pokoj z json-server
    // np. http://localhost:3000/rooms/2

    fetch(`http://localhost:3000/rooms/${id}`)
        .then(response => response.json())
        .then(room => {
            const article = document.createElement('article');
            const addToCartButton = Button({
                text: 'Add to Cart',
                callback: () => {
                    cartManager.addItem(room);
                },
                class:"oferta-guzik detale-guzik"
            });
            article.innerHTML = `
                <h2>${room.name}</h2>
                <h3> W tym pokoju będziesz miał: <p>🛏️ ${room.beds}</p> </h3> 
                <h3> I jest on dla: 
                <p>💁 ${room.guests}</p> </h3>
                <h3> Zapłacisz: 
                <p>
                    <strong>${room.price.toFixed(2)} PLN</strong>
                </p>
                </h3>
                
            `;
            article.appendChild(addToCartButton);

            section.querySelector('p').remove();
            section.append(article);
        });

    return section;
}


