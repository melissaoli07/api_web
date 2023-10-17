import React, { useEffect, useState} from "react";
import "./style.css";


const chuckNorrisImage = "https://assets.chucknorris.host/img/avatar/chuck-norris.png";


function App() {
  const [joke, setJoke] = useState('');


  const fetchJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJoke(data.value);
       
      })
      .catch(error => 
        console.error("Error fetching joke:", error));
        
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="App">
      <h1>Chuck Norris Joke</h1>
      <div className="joke-item">
        <img src={chuckNorrisImage} alt="Chuck Norris Icon" />
        <p className="joke-name">{joke}</p>
      </div>
      <button onClick={fetchJoke}>Nova Piada</button>
    </div>  
  );
}

export default App;