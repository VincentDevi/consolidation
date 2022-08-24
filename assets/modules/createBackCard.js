import { addCritics, addDescription, addGenre, addReleaseDate, addTitle, addTrailer } from "./addContentToCard.js";

const createBackCard = (mainElement,obj) =>{
    mainElement.appendChild(addGenre(obj));
    mainElement.appendChild(addTitle(obj));
    mainElement.appendChild(addReleaseDate(obj));
    mainElement.appendChild(addDescription(obj));
    mainElement.appendChild(addCritics(obj));
    mainElement.appendChild(addTrailer(obj));
    return mainElement;

}
export{createBackCard};