import{collection} from '/assets/modules/fetchCollection.js';
import {createCard} from '/assets/modules/createCard.js';
import { createArticle, createImage, createInnerCard, createH2,createContainer } from '../modules/createCard.js';
import { addImage } from '../modules/addContentToCard.js';
import{createBackCard} from '/assets/modules/createBackCard.js';


const takeMain = document.getElementById('main');

collection.map(item =>{
    const card = createCard();
    takeMain.appendChild(card);

    const innerCard = createInnerCard();
    card.appendChild(innerCard);

    const container = createContainer();
    innerCard.appendChild(container);

    const image = addImage(item);
    container.appendChild(image);

    const article = createArticle();
    createBackCard(article,item);
    innerCard.appendChild(article);
   
})