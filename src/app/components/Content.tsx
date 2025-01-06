import React, { useState, useEffect } from "react";
import HeroInfo from "./HeroInfo";
import Loader from "./Loader";
import heroesList from "../shared/heroes";
import "../page.module.css";

const Content: React.FC = () => {
  const [listOfHeroes, setListOfHeroes] = useState(heroesList);
  const [favoriteHeroes, setFavoriteHeroes] = useState([1, 5, 6]);
  const [loading, setLoading] = useState(true);
  const changeFavorites = () => {
    const generateRandomIds = (count: number, max: number): number[] => {
      const ids = new Set<number>();
      while (ids.size < count) {
        ids.add(Math.floor(Math.random() * max) + 1);
      }
      return Array.from(ids);
    };
    const newFavorites = generateRandomIds(3, heroesList.length);
    setFavoriteHeroes(newFavorites);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <main className="content">
      {loading && <Loader />}
      {!loading && (
        <>
          <h2 className="content-title">Top-3 Heróis Favoritos</h2>
          <button className="change-favorites-btn" onClick={changeFavorites}>
            Mudar Favoritos
          </button>
          <div className="heroes-container">
            {listOfHeroes
              .filter((hero) => favoriteHeroes.includes(hero.id))
              .map((hero) => (
                <HeroInfo key={hero.id} name={hero.name} img={hero.img} />
              ))}
          </div>
        </>
      )}
    </main>
  );
};
export default Content;

