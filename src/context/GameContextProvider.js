import axios from 'axios';
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const gameContext = createContext();

const GameContextProvider = ({ children }) => {
  const API = 'https://quiz-kg.herokuapp.com/api';

  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);

  const [step, setStep] = useState(0);
  const question = questions[step];

  const [correct, setCorrect] = useState(0);

  function clickVariant(index) {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  }

  async function getQuestions() {
    let res = await axios(API);
    setQuestions(res.data);
    // navigate('/game');
  }

  return (
    <gameContext.Provider
      value={{
        step,
        question,
        questions,
        correct,

        setStep,
        setCorrect,
        getQuestions,
        clickVariant,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameContextProvider;
