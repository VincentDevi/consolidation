const createCard = () =>{
    const setSecttion = document.createElement('section');
    setSecttion.classList.add('center__movie__card');
    return setSecttion;

}

const createInnerCard = () =>{
    const setDiv = document.createElement('div');
    setDiv.classList.add('center__movie__card__inner');
    return setDiv;
}

const createContainer = () =>{
    const setContainer = document.createElement('div');
    setContainer.classList.add('center__movie__card__inner__front');
    return setContainer;
}

const createImage = () =>{
    const setImage = document.createElement('img');
    setImage.classList.add('center__movie__card__inner__front__poster');
    return setImage;
}

// back of the card here

const createArticle = () =>{
    const setArticle = document.createElement('article');
    setArticle.classList.add('center__movie__card__inner__back');
    return setArticle;
}

const createH2 = () =>{
    const setH2 = document.createElement('h2');
    setH2.classList.add('center__movie__card__inner__back__genre');
    return setH2;
}

const createReleaseDate = () =>{
    const setReleaseDate = document.createElement('p');
    setReleaseDate.classList.add('center__movie__card__inner__back__date');
    return setReleaseDate;
}

const createDescription = () =>{
    const setDescription = document.createElement('p');
    setDescription.classList.add('center__movie__inner__back__description');
    return setDescription;
}

const createTitle = () =>{
    const setH1 = document.createElement('h1');
    setH1.classList.add('center__movie__card__inner__back__titre');
    return setH1;
}
const createH4 = () =>{
    const setH4 = document.createElement('h4');
    setH4.classList.add('center__movie__inner__back__note');
    return setH4;
}
const createLink = () =>{
    const setA = document.createElement('a');
    setA.classList.add('center__movie__inner__back__link');
    return setA;
}
export {createCard,createInnerCard,createImage,createArticle,createLink,createH2,createH4,createReleaseDate,createTitle,createDescription, createContainer};