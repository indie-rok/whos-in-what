import React from 'react';
import DisplayMovie from './components/DisplayMovie';
import DisplayActor from './components/DisplayActor';
import { movieUrl } from "./utils/apiUrls";
import { actorUrl } from './utils/apiUrls';
import './style/CSS/style.css';


import useFetch from "./hooks/useFetch";

function App() {
  //fetch movie
  const { response: movieData, movieError, loading: movieLoading } = useFetch(movieUrl);
  //fetch actor
  const { response: actorData, actorError, loading: actorLoading } = useFetch(actorUrl);

  
  // Fetch 3rd api
    
  const isLoading = movieLoading || actorLoading;
  const data = movieData || actorData;
  const error = movieError || actorError;
    
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
          <DisplayActor actorData={actorData}/>
        </section>
        <section>
          <DisplayMovie movieData={movieData}
            // id={data.results[0].id}
          />
        </section>
      </main>
    </div>
  );
}

export default App;



