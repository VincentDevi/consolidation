/*
object = {
    "film_poster" : ,
    "title" : ,
    "genre" : ,
    "release_date": ,
    "description": ,
    "critics":  ,
    "trailer": 
}
*/


let movieList = [
    gun = {
        "film_poster" : "assets/picture/gun2.jpg",
        "title" : "Top Gun",
        "genre" : "Action",
        "release_date" : "25 mai 2022",
        "description" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "critics" :"4/5",
        "trailer" : "un lien"
    },
    bond = {
        "film_poster" : "assets/picture/bond.jpg",
        "title" : "No Time To die",
        "genre" : "Action",
        "release_date" : "30 september 2021",
        "description" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "critics" :"3/5",
        "trailer" : "un lien"
    },
    conjuring ={
        "film_poster": "assets/picture/conjuring.jpg",
        "title" : "Conjuring",
        "genre" : "Horror",
        "release_date" : "21 august 2013",
        "description" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "critics" :"4/5",
        "trailer" : "un lien"
    },
    alice = {
        "film_poster" : "assets/picture/alice.jpg",
        "title" : "Still Alice",
        "genre" : "Drama",
        "release_date" : "5 december 2014",
        "description" : "Alice Howland, professeure de linguistique à l'Université de Columbia, fête son cinquantième anniversaire avec son mari médecin John et leurs trois enfants adultes. Après qu'elle a oublié un mot pendant une conférence et s'est perdue pendant un jogging sur le campus, le médecin d'Alice lui diagnostique un début de maladie d'Alzheimer congénitale. Deux de ses enfants, Anna et Tom, se font dépister. Lydia, sa fille cadette et actrice débutante, décide de ne pas savoir",
        "critics" :"4/5",
        "trailer" : "un lien"
    },
    gump = {
        "film_poster" : "assets/picture/gump.jpg",
        "title" : "Forrest Gump",
        "genre" : "Comedy",
        "release_date" : "6 july 1994",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "critics":"5/5",
        "trailer" : "un lien"
    },
    club = {
        "film_poster" : "assets/picture/club.jpg",
        "title" : "Fight Club",
        "genre" : "Action",
        "release_date": "10 november 1999",
        "description": "une description",
        "critics": "5/5",
        "trailer": "un lien"
    },
    pulp = {
        "film_poster" : "assets/picture/pulp.jpg",
        "title" : "Pulp Fiction",
        "genre" : "Gangster",
        "release_date": "9 november 1994",
        "description": "une description",
        "critics": "5/5",
        "trailer": "un lien"
    }

];
    /*
    let listElement = ["article", "img", "h3", "h4", "div", "h2", "p", "a"];
    for (let i = 0; i < listElement.length; i++){

    }
const objLength = Object.keys(movieList[0]);
let listElement = ["article", "img", "h3", "h4", "div", "h2", "p", "a"];

let getMain = document.querySelector("main");
let mainTable = document.createElement("table");

for (let i = 0; i < 2; i++){
    let rowTable = document.createElement("tr");
    for (let j =0; i< 5; i++){
        let cell = document.createElement("td");
        rowTable.appendChild(cell);
    }
}


let arr2 = ["h2","p","p","h4"];
let arr1 =["img","h3","article","a"];
function createSection(anObject) {
    document.createElement("section");
    for (const i of arr1) {
        document.createElement(i);
        for (let )
    }
}
*/

function cards(movie) {
    let ok = document.querySelector("main");
    ok.className = "center__movie";
    let sec = document.createElement("section");
    sec.className = "center__movie__card";
    ok.appendChild(sec);

    let innerCard = document.createElement("div");
    sec.appendChild(innerCard);
    innerCard.className = "center__movie__card__inner";

    let container = document.createElement("div");
    container.className = "center__movie__card__inner__front";
    innerCard.appendChild(container);;

    let im = document.createElement("img");
    im.className = "center__movie__card__inner__front__poster";
    im.src = movie["film_poster"];
    container.appendChild(im);



    let divi = document.createElement("article");
    innerCard.appendChild(divi);
    divi.className = "center__movie__card__inner__back";

        let genre = document.createElement("h3");
        genre.appendChild(document.createTextNode(movie["genre"]));
        genre.className = "center__movie__card__inner__back__genre";
        divi.appendChild(genre);

        let titre = document.createElement("h2");
        titre.appendChild(document.createTextNode(movie["title"]));
        titre.className = "center__movie__card__inner__back__titre"
        divi.appendChild(titre);

        let date = document.createElement("p");
        date.appendChild(document.createTextNode(movie["release_date"]));
        date.className = "center__movie__card__inner__back__date"
        divi.appendChild(date);

        let desc = document.createElement("p");
        desc.appendChild(document.createTextNode(movie["description"]));
        desc.className = "center__movie__card__inner__back__description"
        divi.appendChild(desc);

        let note = document.createElement("h4");
        note.appendChild(document.createTextNode(movie["critics"]));
        note.className = "center__movie__card__inner__back__note";
        divi.appendChild(note);

        let link = document.createElement("a");
        link.appendChild(document.createTextNode(movie["trailer"]));
        link.className = "center__movie__card__inner__back__link"
        divi.appendChild(link);

}

for (const i of movieList) {
    cards(i);
}