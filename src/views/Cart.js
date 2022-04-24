import { cartManager } from "../cart/cart-manager"; 
import { Button } from "../common/Button";
import { navigateTo } from "../layout/Nav";

export function Cart() {

    const section = document.createElement('section');
    section.innerHTML = `
        <h2 class="tlozakupy">Zakupy</h2>
        <p class="koszyk">Twój koszyk 🛒 </p>
    `;

    const table = document.createElement('table');
    table.classList.add('tabela');

    table.innerHTML = `
        <tr>
            <td>Nazwa</td>
            <td>Cena</td>
            <td>🛒</td>
        </tr>
    `;

    const allItems = cartManager.getAllItems();

    const tableRows = allItems.map(item => {
        const tr = document.createElement('tr');
        const removeButton = Button({
            text: 'Usuń',
            callback: () => {
                cartManager.removeItem(item);
                navigateTo(Cart);
            },
        });
        let daty= "";
        if(item.dataOd && item.dataDo){
            daty=item.dataOd+" - "+item.dataDo;
        }
        tr.innerHTML = `
            <td>${item.name} ${daty}</td>
            <td>${item.price.toFixed(2)} PLN</td>
            <td class='usun'>
            
            </td>
        `;

        tr.querySelector('.usun').appendChild(removeButton);

        return tr;
    });

    table.append( ...tableRows );
    section.append(table);

    return section;
    
}
