import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { FavoritePokemons } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoritesPage = () => {
  const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemon(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favorite Pokémon">
      {favoritePokemon.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favoritePokemon={favoritePokemon} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
