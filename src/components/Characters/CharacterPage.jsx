import React from 'react';

import AllCharacters from './AllCharacters';
import CharacterPageMain from './CharacterPageMain';

import {useRouteMatch } from 'react-router';

import './Characters.css';

const  CharacterPage = ()=>{

  const Route = useRouteMatch();

  const thisCharacter = Route.url.split('/characters/').pop();
  const clearCharacter = thisCharacter.replace('/', '');

  return (
    <div>
      {AllCharacters.filter(
        (character) => character.urlName === `${clearCharacter}`
      ).map((filteredCharacters) => (
        <CharacterPageMain
          key={filteredCharacters.id}
          thisCharacter={filteredCharacters}
        />
      ))}
    </div>
  );
}

export default CharacterPage;
