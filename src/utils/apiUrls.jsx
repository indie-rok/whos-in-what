import { randomActorId } from "./ActorsRandomList";
import { randomActorId2 } from "./ActorsRandomList";

//api key
const apiKey = '&api_key=6d297bdaca2dc66c4fe66393850480f4';

//declaration of api urls used in the project
const baseUrl = 'https://api.themoviedb.org/3/';
export const actorUrl = `https://api.themoviedb.org/3/person/${randomActorId}?api_key=6d297bdaca2dc66c4fe66393850480f4&append_to_response=credits`;
export const movieUrl = `${baseUrl}discover/movie?sort_by=popularity.desc${apiKey}&language=fr&with_cast=${randomActorId2}&append_to_response=credits`;
// const movieUrl2 = `https://api.themoviedb.org/3/movie/${mettre ici id du film récupéré}?api_key=6d297bdaca2dc66c4fe66393850480f4&append_to_response=credits,person`;

