// src/app/components/Content.tsx
"use client"
import React, { useState, useEffect } from 'react';
import HeroInfo from './HeroInfo';
import heroesList from '../shared/heroes';
import Loader from './Loader';

const Content: React.FC = () => {
    const [listOfHeroes, setListOfHeroes] = useState(heroesList);
    const [favoriteHeroes, setFavoriteHeroes] = useState([1, 5, 6]); // IDs dos heróis favoritos
    const [loading, setLoading] = useState(true); // Estado de loading

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Atualiza o estado de loading após 3 segundos
        }, 3000);

        return () => clearTimeout(timer); // Limpa o timeout se o componente for desmontado
    }, []);

    const changeFavorites = () => {
        const randomIds = new Set<number>();
        while (randomIds.size < 3) {
            const randomId = Math.floor(Math.random() * listOfHeroes.length) + 1; // Gera um ID aleatório
            randomIds.add(randomId);
        }
        setFavoriteHeroes(Array.from(randomIds));
    };

    if (loading) {
        return <Loader />; // Exibe o loader se loading for true
    }
    return (
        <main>
            <h2>Top-3 Heróis</h2>
            <div className="hero-container">
                {listOfHeroes
                    .filter(hero => favoriteHeroes.includes(hero.id)) // Filtra os heróis favoritos
                    .map(hero => (
                        <HeroInfo key={hero.id} image={hero.image} name={hero.name} />
                    ))}
            </div>
            <button onClick={changeFavorites}>Mudar Favoritos</button>
        </main>
    );
};
export default Content;
