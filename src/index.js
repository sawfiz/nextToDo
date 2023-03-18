import createElement from './createElement';
import getQuoteOfTheDay from './quote';
import screenController from './screenController';

// Display Quote of the Day
const quoteEl = document.querySelector('.quote');
const quote = getQuoteOfTheDay().split('~');
const quoteTextEl = createElement('div', ['quote-text'], {}, quote[0]);
quoteEl.appendChild(quoteTextEl);
const quoteeEl = createElement('div', ['quotee'], {}, '- ' + quote[1]);
quoteEl.appendChild(quoteeEl);

// Run the main program
screenController();
