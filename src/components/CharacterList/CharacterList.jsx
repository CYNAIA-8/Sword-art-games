import React from "react";
import { CharacterListItem } from "./CharacterListItem/CharacterListItem";
import { Table, TableCaption, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import "./CharacterList.css";

// Props are passed to the component via attributes
export const CharacterList = ({ characters }) => {
  // returns true if Math.random() is more than 0.5;
  return (
    <Table>
      <TableCaption fontSize={"3xl"} color="orange">Heroes table</TableCaption>
      <Thead>
        <Tr>
          <Th color="black">Name</Th>
          <Th isNumeric color="black">Durability</Th>
          <Th color="black">Roles</Th>
          <Th color="black">Defense</Th>
          <Th isNumeric color="black">Offense</Th>
        </Tr>
      </Thead>
      <Tbody>
        {characters.map((character) => (
          <CharacterListItem
            isHeroes={Math.random() > 0.5}
            character={character}
          />
        ))}
      </Tbody>
    </Table>
  );
};