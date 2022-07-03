import { Td, Tr} from "@chakra-ui/react";
import React from "react";
import "./CharacterListItem.css";

// React component can receive one argument: props
// You can pass data to the react component by using props.
// Props is an object that groups data that is passed to a component.
export const CharacterListItem = ({character, isHeroes}) => {
  const {name, durability, roles, defense, offense} = character;
  return (
    //When you use repeating elements in JSX, you should use key attribute
    //It's required for React to be able to update the element
      <Tr key={name}>
        <Td className="character-name">
          {isHeroes ? `Heroes ${name}` : name}
          </Td>
        <Td isNumeric>{durability}</Td>
        <Td>{roles}</Td>
        <Td>{defense}</Td>
        <Td isNumeric>{offense}</Td>
      </Tr>
    );
  }