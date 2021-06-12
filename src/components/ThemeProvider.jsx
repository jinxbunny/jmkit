import React, { useState, createContext} from 'react';
import './Theme.css';
import './Buttons.css';

const initialState = 'light';

export const Context = createContext();

const ThemeProvider = ({ children }) => {
const storedTheme = localStorage.getItem('myTheme');

const body = document.body;

const [thisTheme, setTheme] = useState(initialState);

window.addEventListener('load', (event) => {
    if (storedTheme) {
    setTheme(storedTheme);
    body.classList.add(storedTheme);
    }
  });

  return (
    <Context.Provider value={[thisTheme, setTheme]}>
      {children}
    </Context.Provider>
  );
};



export default ThemeProvider;