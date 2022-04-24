import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';

import { Home } from './views/Home';
import { Nav } from './layout/Nav';
import { Footer } from './layout/Footer';

const main = document.querySelector('main');

// wstawiamy nawigacje przed elementem `main`
main.before( Nav() );

main.append( Home() );

main.after( Footer () );

document.body.addEventListener('navigate', (event) => {
    // przechowuje komponent, czyli funkcje ktora zwroci jakis HTML
    const component = event.detail;

    main.innerHTML = '';
    main.append( component() );
});
