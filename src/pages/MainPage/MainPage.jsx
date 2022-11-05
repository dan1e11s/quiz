import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../MainPage/MainPage.css';
import { gameContext } from '../../context/GameContextProvider';

const MainPage = () => {
  const { getQuestions, setStep, setCorrect } = useContext(gameContext);
  const navigate = useNavigate();

  useEffect(() => {
    getQuestions();
    setStep(0);
    setCorrect(0);
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="box">
          <h3>Привет🤗</h3>
          <p>Давай проверим насколько хорошо ты меня знаешь</p>
          <button className="main-btn" onClick={() => navigate('/game')}>
            Начать!
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
