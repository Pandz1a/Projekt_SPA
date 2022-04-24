import { Button } from "../common/Button";
import { RoomDetails } from "./RoomDetails";
import { cartManager } from '../cart/cart-manager';

export function Rooms() {

    const section = document.createElement('section');

    section.innerHTML = `
        <h2 class="tlonaglowkow">Rooms</h2>
        <p>Loading...</p>
        <ul class="rwd-container"></ul>
    `;

    // pobieramy pokoje z json-server
    fetch('http://localhost:3000/rooms')
        .then(response => response.json())
        .then(rooms => {
            const lis = rooms.map(room => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <h4>${room.name}</h4>
                    <p>${room.price.toFixed(2)} PLN</p>
                    <img class=roomimg src="img/rooms/${room.photo}"/>
                    <div class="kalendarz"> 
                        <p>data <br> przyjazdu</p>
                        <input name="od" type="date"/> 
                        <p>data <br> wyjazdu</p>
                        <input name="do" type="date"/> 
                    </div>
                    <footer>
                    </footer>
                `;

                const seeMoreButton = Button({
                    text: 'See More',
                    class:"oferta-guzik",
                    callback: () => {
                        const navigateEvent = new CustomEvent('navigate', {
                            detail: () => RoomDetails(room.id)
                            /* 
                                LUB
                                detail: function () {
                                    return RoomDetails(room.id);
                                }
                            */
                        });
                    
                        document.body.dispatchEvent(navigateEvent);
                    }
                });

                const addToCartButton = Button({
                    text: 'Add to Cart',
                    callback: () => {
                        let dataOd = li.querySelector("input[name=od]").value;
                        let dataDo = li.querySelector("input[name=do]").value;
                        if(dataOd.length === 0 || dataDo.length ===0){
                            alert("Wybierz czas wizyty u nas");
                        }else if(new Date(dataOd)<=new Date){
                            alert("należy dokonywać rezerwacji z jednodniowym wyprzedzeniem :)");
                        }else if(new Date(dataOd) > new Date(dataDo)){
                            alert("data wyjazdu nie może być wcześniejsza niż przyjazdu!!!!!!!!!");
                        }else{
                            room.dataOd=dataOd;
                            room.dataDo=dataDo;
                            cartManager.addItem(room);
                        }
                    },
                    class:"oferta-guzik"
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

