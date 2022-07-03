import "./App.css";
import React, {useState} from "react";
import { Login } from "./Login/Login";
import { CharacterList } from "./CharacterList/CharacterList";
import { useFetch } from "./hooks/useFetch";
import { CharacterSelection } from "./CharacterSelection/CharacterSelection";

// React application can be represented as a tree of React components
// This is a react root component
// This type of components is called functional components
// Functional componets should start with a capital letter, 
// return JSX and be exported from a file // alternate option function App() {}
// try to abstain from default export

// Let's create a functioanlity that only when user logged in as admin,
// we can see the character list, otherwise we see the simple message like
// "You are not logged in"

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState (false);
  const characters = [
    {
      name: "Miya",
      durability: 45,
      roles: "Marksman",
      defense: "Silver bow and arrow",
      offense: 80,
    },
    {
      name: "Balmond",
      durability: 80,
      roles: "Fighter",
      defense: "Battleaxe",
      offense: 75,
    },
    {
      name: "Saber",
      durability: 50,
      roles: "Assassin",
      defense: "Dual wield swords",
      offense: 87,
    },
    {
      name: "Alice",
      durability: 70,
      roles: "Mage and Tank",
      defense: "bloods",
      offense: 50,
    },
    {
      name: "Karina",
      durability: 48,
      roles: "Assassin",
      defense: "Shadow Twinblades",
      offense: 85,
    },
  ];
  const { response, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response) {
    return <> Loading...</>;
  }

  if (error && error instanceof Error){
    // We can use React.Fragment istead of div
    // In React we can't render objects or arrays
    return <>Error: {error.message}</>;
  }

const userNotLoggedIn = (
  <h3 className="not-logged-in">
    Please log in as admin to see Heroes list
    </h3>
);
   return (
    <div className="App">
     {!isLoggedIn ? <Login setLoggedIn={setIsLoggedIn} /> : null}
     {isLoggedIn ? <CharacterList characters={characters}/> : userNotLoggedIn}
     {isLoggedIn ? <CharacterSelection characters={characters}/> : null}
     </div>
   );
   };
