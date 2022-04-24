import { Home } from '../views/Home';
import { Rooms } from '../views/Rooms';
import { Treatments } from '../views/Treatments';
import { Button } from '../common/Button';
import { Cart } from '../views/Cart';
import { Contakt } from '../views/Contakt';
import { SignIn } from '../views/SignIn';

export const navigateTo = (component) => {
    const navigateEvent = new CustomEvent('navigate', {
        detail: component
    });

    document.body.dispatchEvent(navigateEvent);
};

const navItems = [
    { text: 'Strona główna', component: Home },
    { text: 'Pokoje', component: Rooms },
    { text: 'Zabiegi', component: Treatments },
    { text: 'Kontakt', component: Contakt },
    { text: 'Mój 🛒', component: Cart },
    { class:"logowanie", text: 'Zaloguj się!', component: SignIn }
    
];

export function Nav() {
    const nav = document.createElement('nav');

    const buttons = navItems.map(navItem => {
        return Button({
            text: navItem.text,
            callback: () => {
                navigateTo( navItem.component );
            },
            class:navItem.class
        });
    });

    nav.append( ...buttons );

    return nav;
}
