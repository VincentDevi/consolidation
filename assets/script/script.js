/*
object = {
    "film_poster" : ,
    "title" : ,
    "genre" : ,
    "release_date": ,
    "description": ,
    "critics": 
}
*/


let movieList = [
    gun = {
        "film_poster" : "assets/picture/gun.jpg",
        "title" : "Top Gun",
        "genre" : "Action",
        "release_date" : "25 mai 2022",
        "description" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "critics" :"4/5",
        "trailer" : "un lien"
    },
    bond = {
        "film_poster" : "assets/picture/bond.jpg",
        "tilte" : "No Time To die",
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
        "realease_date" : "5 december 2014",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "critics" :"4/5",
        "trailer" : "un lien"
    },
    gump = {
        film_poster : "assets/picture/gump.jpg",
        title : "Forrest Gump",
        genre : "Comedy",
        release_date : "6 july 1994",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        critics:"5/5",
        "trailer" : "un lien"
    }
];

    let newArticle = document.createElement("article");
    let newimg = document.createElement("img");
    let newH3 = document.createElement("h3");
    let newDiv = document.createElement("div");
    let newH2 = document.createElement("h2");
    let newPara = document.createElement("p");
    let newA = document.createElement("a");
    let newh4 = document.createElement("h4");
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
    let sec = document.createElement("section");
    ok.appendChild(sec);
    let im = document.createElement("img");
    im.appendChild(document.createTextNode(movie["film_poster"]));
    sec.appendChild(im);

    let genre = document.createElement("h3");
    genre.appendChild(document.createTextNode(movie["genre"]));
    sec.appendChild(genre);

    let divi = document.createElement("article");
    sec.appendChild(divi);

        let titre = document.createElement("h2");
        titre.appendChild(document.createTextNode(movie["title"]));
        divi.appendChild(titre);

        let date = document.createElement("p");
        date.appendChild(document.createTextNode(movie["release_date"]));
        divi.appendChild(date);

        let desc = document.createElement("p");
        date.appendChild(document.createTextNode(movie["description"]));
        divi.appendChild(desc);

        let note = document.createElement("h4");
        note.appendChild(document.createTextNode(movie["critics"]));
        divi.appendChild(note);

    let link = document.createElement("a");
    link.appendChild(document.createTextNode(movie["trailer"]));
    sec.appendChild(link);

}

for (const i of movieList) {
    cards(i);
}