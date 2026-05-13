import CardSerie from "../../Componentes/CardSeries/CardSeries.js";
import { Component } from "react";
import { useState, useEffect } from "react"

const ScreenSeries = () => {
    const [personajes, setPersonajes] = useState([]);
    const [personajesCopia, setPersonajesCopia] = useState([]);
    const [pagDos, setPagDos] = useState(2);
    const [valor, setValor] = useState("");

    const evitarSumbit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=bb857f4016bcff3ee72ee89cb409417f")
            .then(response => response.json())
            .then(data => {
                setPersonajes(data.results);
                setPersonajesCopia(data.results);
            })
            .catch(error => console.log(error))
    }, []);

    const cargarMas = () => {
        fetch(`https://api.themoviedb.org/3/tv/popular?page=${pagDos}&api_key=bb857f4016bcff3ee72ee89cb409417f`)
            .then(response => response.json())
            .then(data => {
                setPersonajes(prevPersonajes => prevPersonajes.concat(data.results));
                setPersonajesCopia(prevPersonajesCopia => prevPersonajesCopia.concat(data.results));
                setPagDos(prevPagDos => prevPagDos + 1);
            })
    };

    const filtrarPersonajes = (input) => {
        setValor(input.target.value);
        const inputLower = input.target.value.toLowerCase();
        const filtrado = personajesCopia.filter(
            personaje => personaje.name.toLowerCase().includes(inputLower)
        );
        setPersonajes(filtrado);
    };

    return (
        <>
            <form onSubmit={(e) => evitarSumbit(e)}>
                <label>Nombre: </label>
                <input type="text" onChange={filtrarPersonajes} value={valor}></input>
            </form>
            <h2 className="alert alert-primary">Series</h2>
            <section className="row cards" id="now-playing">
                {
                    personajes.length > 0 ? (
                        personajes.map((personaje) => (
                            <CardSerie
                                key={personaje.id}
                                serie={personaje} />
                        ))
                    ) : (
                        <p>Cargando... </p>
                    )
                }
            </section>
            <button onClick={cargarMas}>Mas series</button>
        </>
    );
};

export default ScreenSeries;
