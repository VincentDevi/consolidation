import { createDescription, createH2,createH4,createImage, createLink, createReleaseDate, createTitle } from "./createCard.js";

const addGenre = (content) =>{
    const h2Element=createH2();
    h2Element.textContent = content.genre;
    return h2Element;
}
const addImage = (content) =>{
    const image = createImage();
    image.setAttribute('src',content.film_poster);
    return image;
}

const addReleaseDate = (content) =>{
    const release = createReleaseDate();
    release.textContent = content.release_date
    return release;
}

const addDescription = (content) =>{
    const description = createDescription();
    description.textContent = content.description;
    return description;
}
const addTitle = (content) =>{
    const title = createTitle();
    title.textContent = content.title;
    return title;
}

const addCritics = (content) =>{
    const note = createH4();
    note.textContent = content.critics;
    return note;
} 
const addTrailer = (content) =>{
    const trailer = createLink();
    trailer.setAttribute('href','#');
    trailer.textContent = content.trailer;
    return trailer;
}


export{addImage,addReleaseDate,addGenre,addDescription,addTitle,addCritics,addTrailer};