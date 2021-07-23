import { Fragment } from 'react';
// import IsElementInArray from "./IsElementInArray";


function DisplayMovie({movieData}) {
    return (
        <Fragment>
            <section>
                <div className='flex'>
                    <h2>{movieData.results[0].title}</h2>
                    <h2>{movieData.results[0].id}</h2>
                </div>
                {/* <img src={`https://image.tmdb.org/t/p/w500/${data.results[0].poster_path}`}
                    alt='affiche du film' /> */}
            </section>
        </Fragment>
    )
};
export default DisplayMovie;