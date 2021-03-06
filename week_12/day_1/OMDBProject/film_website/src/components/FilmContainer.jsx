import React from 'react'
import { useState, useEffect } from 'react'
import Films from "./Films.jsx";
import Header from "./Header.jsx";
import "../styles/Films.css";
import "../styles/FilmContainer.css";

export default function FilmContainer() {
    const [films, setFilms] = useState([]);
	const [userInput, setUserInput] = useState("");

	useEffect(() => {
		getFilmsDefault();
	}, []);

	const changeInput = (event) => {
		setUserInput(event.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		getFilms()		
	}

	const getFilmsDefault = async () => {
		const filmData = await fetch(
			"http://www.omdbapi.com/?apikey=446be3ac&s=horror"
		);
		const filmDataJson = await filmData.json();
		setFilms(filmDataJson.Search);
		};

	const getFilms = async () => {
		const filmData = await fetch(
			`http://www.omdbapi.com/?apikey=446be3ac&s=${userInput}`
		);
		const filmDataJson = await filmData.json();
		setFilms(filmDataJson.Search);
		};
	
    return (
		<div className="film__divContainer">
			<Header 
				userInput={userInput} 
				setUserInput={setUserInput} 
				changeInput={changeInput}
				handleSubmit={handleSubmit}		
 			/>
			<h1 className="film__resultsHeader">Search Results</h1>
			<div className="film__cardDataMap">
					{films.map((film) => (
						<Films film={film}/>
					))}
       		</div>
		</div>
    )
}
