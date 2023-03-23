import React from 'react'

function MovieDisplay({movieSearched}) {
  
    // console.log(movieSearched.Title)
   

    const loaded = ()=>{
        // console.log(movieSearched?.Search[0].Title)
        if(movieSearched){
            return(
        movieSearched.Search.map((movie,index)=>{
            return(
            <div className='movie-container' key={index} onClick = {()=>{}} >
             <div className='poster'><img alt= 'movie poster' className='poster-pic' src={movie.Poster}/></div>
            <div className='movie-information-container'>
            <div className='title'>{movie.Title}</div>
            <div className='type'>{movie.Type}</div>
            <div className='year'>{movie.Year}</div>
        </div>
        </div>
        )    
    })
    )
    }
    else{
        console.log()
        return <h1>NUULL</h1>;
    }
    }
    // const loading = ()=> <> No movie to show yet!</>
    
    return (
        <>

        
        {/* {movieSearched?loaded():loading()} */}
        {/* {movieSearched[0]?loaded():console.log(movieSearched.Title)} */}
        {/* {loaded()} */}

       { loaded()}
        </>
        
  )
}



export default MovieDisplay