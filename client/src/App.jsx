import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './components/Input/Input';
import Button from './components/Button/Button';

function App() {
  const [age, setAge] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(true);
    setInputValue("");
  };

  const checkHoroscope = (val) => {
    if (val < 1900 || val > 2099) return;

    const horoscopes = [
      "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
      "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
    ];

    const initial = 1900;
    const offset = (val - initial) % 12;
    
    return horoscopes[offset];
  };

  useEffect(() => {
    if (buttonClicked) {
      const horoscope = checkHoroscope(age);
      if (horoscope) {
        setAge(horoscope);
      }
    }
  }, [buttonClicked, age]);

  const handleInputChange = (attr, value) => {
    if (attr === "age") {
      setInputValue(value);
      setAge(value);
      setButtonClicked(false);
    }
  };

  return (
    <>
      <Input attr="age" onInputChange={handleInputChange} value={inputValue}/>
      <Button text="Momento" onClick={handleClick}/>
      {buttonClicked && age && <p>{`Ah, I see. You're a ${age}, you die now.`}</p>}
    </>
  );
}

// fetch logic (NOT USED YET)
const placeholder = async () => {
  await axios
  .get('../public/moment.json')
  .then((response) => {console.log(response.data)})
  .catch((err) => {console.log(err)});
}

export default App;