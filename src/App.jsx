import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputId, newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputId]: newValue
        }
    })
  }

  return (
    <>
    <Header />
    <UserInput onChangeInput={handleChange} userInputParam={userInput}/>
    <Results input={userInput}/>
    </>
  )
}

export default App