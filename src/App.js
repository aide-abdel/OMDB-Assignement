import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";
import React,{ useState } from "react";


function App() {

  const apiKey = "4da475d4";
  const[movie,setMovie] = useState(null);

  const getMovie = async(searchTerm) =>{

    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`);

    const data = await response.json();
    console.log(data);
    setMovie(data);
  }

    
    React.useEffect(()=>{getMovie("Clueless")},[])



  return (
    <div >

      <Form movieSearch= {getMovie}/>

      <MovieDisplay movieSearched={movie} />
    </div>
  );
}

export default App;
