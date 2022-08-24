
const fetchCollection = async () =>{
    try{
        const collection = await fetch('assets/collection.json');
        const movies = await collection.json();
        return movies;
    }
    catch(error){
        console.error(error);
    }
}
const coll = await fetchCollection();
const collection=coll.film;
export{fetchCollection, collection};


