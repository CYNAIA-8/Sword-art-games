import React from 'react'

export const sampleComponent = () => {
    const header = (
        //we can only use className in JSX, because class is a reserved word in JS and thats why we can see it is not HTML
        // JSX can have only one parent element (parent is div)
        <div className="App">
          <h1 className='jsx-style'> Hello, Sword Art Gamers</h1>
          <h3>Welcome</h3>
        </div>
      );

      const transformCharacterToListItem = (character: any) => {
        return (
          //When you use repeating elements in JSX, you should use key attribute
          // It's required for React to be able to update the element
          <li key={character.name}>
          <h3>{character.name}</h3>
          <p>{character.health}</p>
          <p>{character.fraction}</p>
          <p>{character.weapon}</p>
          <p>{character.damagePerHit}</p>
        </li>
          );
      };

      // This variable is assigned to a JSX element
  // JSX element starts with parenthesis and ends with a closing parenthesis
  //const characterList = <ul>{characters.map(transformCharacterToListItem)}</ul>;
  
  // JSX is called a javascript XML, this is a syntax extension
  // for rendering HTML in javascript
  // Elements can also be rendered using React.createElement 
  const swordArtHeader = React.createElement(
    'h1',
    {className: 'sword-art-header'},
    'Hello, Sword Art Gamers'
  );
  return <div>sampleComponent</div>;
};
