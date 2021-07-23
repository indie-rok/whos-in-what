import React, { useState } from 'react';
import DisplayActor from './components/DisplayActor';
import DisplayMovie from './components/DisplayMovie';
import { actorUrl } from './utils/apiUrls';
import { movieUrl } from "./utils/apiUrls";
// import { isElementInArray } from "./tools/isElementInArray";
import useFetch from "./hooks/useFetch";
import './style/CSS/style.css';


function App() {
  //fetch movie
  const { response: movieData, movieError, loading: movieLoading } = useFetch(movieUrl);
  //fetch actor
  const { response: actorData, actorError, loading: actorLoading } = useFetch(actorUrl);
  // Fetch 3rd api
  const apiUrl = `https://api.themoviedb.org/3/movie/${55}?api_key=6d297bdaca2dc66c4fe66393850480f4&append_to_response=credits,`;
  const { response: apiData, apiError, loading: apiLoading } = useFetch(apiUrl);
  
  
  const isLoading = movieLoading || actorLoading || apiLoading;
  const data = movieData || actorData || apiData;
  const error = movieError || actorError || apiError; 
  // const actorId = apiData.credits.cast;
  // const movieId = movieData.results[0].id;
  // const isActorInMovie = isElementInArray(actorId, movieId);

  if (data) {
    // console.log(isActorInMovie);
    // console.log(movieData.results[0].id);
    // console.log(apiData.credits.cast);
  }
  if (isLoading) {
    return <p>I'm loading</p>
  }
  if (!data && !isLoading) {
    return <p>No data </p>
  }
  if (error) {
    return <p>Sorry, wrong request!</p>
  }
  
  return (
    <div>
      <main>
        <section>
          <DisplayActor actorData={actorData} />
        </section>
        <section>
          <DisplayMovie movieData={movieData} />
        </section>
      </main>
    </div>
  );
}

export default App;



