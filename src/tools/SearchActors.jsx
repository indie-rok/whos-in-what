//This little tool is going to help us to build a library of actors, to make the game more personalization and fun
//We use the Search method of tmdb Api

import useFetch from "../hooks/useFetch";
const actorName = 'Jodie Foster';

const apiUrl = `https://api.themoviedb.org/3/search/person?api_key=6d297bdaca2dc66c4fe66393850480f4&language=en-US&query=%27${actorName}%27&page=1&include_adult=false`;

function DisplayActorInfos() {
    const { response: data} = useFetch(apiUrl)

    if (data) {
        // console.log(data.results[0].name);
        // console.log(data.results[0].id);
    }

    return (
        <div>

        </div>
    )
};
export default DisplayActorInfos;