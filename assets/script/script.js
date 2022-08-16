


// let movieList = [
//     gun = {
//         "film_poster" : "assets/picture/gun2.jpg",
//         "title" : "Top Gun",
//         "genre" : "Action",
//         "release_date" : "25 mai 2022",
//         "description" :"After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
//         "critics" :"4/5",
//         "trailer" : "un lien"
//     },
//     bond = {
//         "film_poster" : "assets/picture/bond.jpg",
//         "title" : "No Time To die",
//         "genre" : "Action",
//         "release_date" : "30 september 2021",
//         "description" :"Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
//         "critics" :"3/5",
//         "trailer" : "Trailer"
//     },
//     conjuring ={
//         "film_poster": "assets/picture/conjuring.jpg",
//         "title" : "Conjuring",
//         "genre" : "Horror",
//         "release_date" : "21 august 2013",
//         "description" :"Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
//         "critics" :"4/5",
//         "trailer" : "link"
//     },
//     alice = {
//         "film_poster" : "assets/picture/alice.jpg",
//         "title" : "Still Alice",
//         "genre" : "Drama",
//         "release_date" : "5 december 2014",
//         "description" : "Alice Howland is a renowned linguistics professor happily married with three grown children. All that begins to change when she strangely starts to forget words and then more. When her doctor diagnoses her with Early-onset Alzheimer's Disease, Alice and her family's lives face a harrowing challenge as this terminal degenerative neurological ailment slowly progresses to an inevitable conclusion they all dread. Along the way, Alice struggles to not only to fight the inner decay, but to make the most of her remaining time to find the love and peace to make simply living worthwhile",
//         "critics" :"4/5",
//         "trailer" : "un lien"
//     },
//     gump = {
//         "film_poster" : "assets/picture/gump.jpg",
//         "title" : "Forrest Gump",
//         "genre" : "Comedy",
//         "release_date" : "6 july 1994",
//         "description" : "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
//         "critics":"5/5",
//         "trailer" : "un lien"
//     },
//     club = {
//         "film_poster" : "assets/picture/club.jpg",
//         "title" : "Fight Club",
//         "genre" : "Action",
//         "release_date": "10 november 1999",
//         "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
//         "critics": "5/5",
//         "trailer": "un lien"
//     },
//     pulp = {
//         "film_poster" : "assets/picture/pulp.jpg",
//         "title" : "Pulp Fiction",
//         "genre" : "Gangster",
//         "release_date": "9 november 1994",
//         "description": "Pulp Fiction's narrative is told out of chronological order, and follows three main interrelated stories that each have a different protagonist: Vincent Vega, a hitman; Butch Coolidge, a prizefighter; and Jules Winnfield, Vincent's business partner. ",
//         "critics": "5/5",
//         "trailer": "un lien"
//     },
//     peur = {
//         "film_poster" : "assets/picture/peur.jpg",
//         "title" : "La Cité de la peur",
//         "genre" : "Comedy",
//         "release_date" : "9 march  1994",
//         "description" : "Odile Deray, a press agent, comes to the Cannes Film Festival to present the film 'Red is Dead'. Unfortunately, the film is so weak that no one wants to hear about it. However, when the projectionists of the film in question die each in turn in strange circumstances, `Red is Dead' benefits from an incredible publicity. Serge Karamazov is then charged with protecting the new projectionist of the film.",
//         "critics": "5/5",
//         "trailer" : "a link" 
//     },
//     park = {
//         "film_poster" : "assets/picture/park.jpg",
//         "title" : "Jurassic Park",
//         "genre" : "Action",
//         "release_date" : "20 october 1993",
//         "description" : "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
//         "critics" : "4/5",
//         "trailer" : "a link"
//     },
//     ghost = {
//         "film_poster" : "assets/picture/ghost1.jpg",
//         "title" : "Ghost Buster",
//         "genre" : "Fantasy",
//         "release_date" : "8 june 1984",
//         "description" : "Three parapsychologists forced out of their university funding set up shop as a unique ghost removal service in New York City, attracting frightened yet skeptical customers.",
//         "critics" : "5/5",
//         "trailer" : " a link"
//     }

fetch('assets/collection.json')
    .then ((response) => response.json())
    .catch((error) => {
        console.log('ERROR !!!! ', error);
    })
    .then ((datas) =>{
        const data = Object.keys(datas);
        console.log(data);
        const movieList = datas[data];
        console.log(movieList);
        for (const i of movieList) {
            cards(i);
        }
    })





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


