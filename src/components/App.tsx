import './App.css';
import React, {useState} from "react";
import { Login } from "./Login/Login";
import { CharacterList } from './CharacterList/CharacterList';
import { useFetch } from './hooks/useFetch';

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
  const { response, error } = useFetch(
    "https://jsonplaceholdser.typicode.com/posts"
  );

  if (!response) {
    return <> Loading...</>;
  }

  if (error && error instanceof Error){
    // We can use React.Fragment istead of div
    // In React we can't render objects or arrays
    return <>Error: {error.message}</>;
  }

  if (response) {
    console.log(response);
  }

const userNotLoggedIn = (
  <h3 className="not-logged-in">
    Please log in as admin to see character list
    </h3>
);
   return (
    <div className="App">
     <Login setLoggedIn={setIsLoggedIn}/>
     {isLoggedIn ? <CharacterList /> : userNotLoggedIn}
     </div>
   );
   };
