import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  favoritePokemon: number[];
}

interface PropsPokemon {
  id: number;
}

export const FavoritePokemons: FC<Props> = ({ favoritePokemon }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemon.map((id) => {
        return <FavoritePokemon id={id} key={id} />;
      })}
    </Grid.Container>
  );
};

const FavoritePokemon: FC<PropsPokemon> = ({ id }) => {
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={onFavoriteClicked}>
      <Card
        hoverable
        clickable
        css={{
          padding: 10,
        }}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
          width={"100%"}
          height={140}
        ></Card.Image>
      </Card>
    </Grid>
  );
};
