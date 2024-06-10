import App from './modules/example';
import { createElement } from 'lwc';

const app = createElement('example', { is: App });
document.body.appendChild(app);