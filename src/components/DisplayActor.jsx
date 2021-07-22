import { Fragment } from 'react';

function DisplayActor({actorData}) {

    console.log(actorData);
    return (
        <Fragment>
            <section>
                <div className='flex'>
                    <h2>{actorData.name}</h2>
                    <h2>{actorData.id}</h2>
                </div>
                <img src={`https://image.tmdb.org/t/p/w500/${actorData.profile_path}`}
                    alt='actor portrait' />
            </section>
        </Fragment>
    )
};
export default DisplayActor;