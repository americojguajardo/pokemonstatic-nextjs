import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children: React.ReactNode; // 👈️ added type for children
  title?: string;
}

// const origin = (typeof window === undefined) ? '' : window.location.origin;
let origin: string;
if (typeof window !== "undefined") {
  origin = window.location.origin;
}

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Pokémon App"}</title>
        <meta name="author" content="Americo Guajardo" />
        <meta
          name="description"
          content={`Información sobre el Pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta
          property="og:title"
          content={`Información sobre el Pokémon ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la info sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
