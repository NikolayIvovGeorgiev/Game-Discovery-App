import React from "react";
import useGenres from "../hooks/useGenres";
import { list } from "@chakra-ui/react";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genres) => (
        <li key={genres.id}>{genres.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
