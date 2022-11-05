import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { gameContext } from '../../context/GameContextProvider';

const ResultPage = () => {
  const { correct, questions } = useContext(gameContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="box">
            <h3
              style={{
                fontSize: '76px',
                margin: '0',
              }}
            >
              🎉
            </h3>
            <p>
              Вы ответили правильно на {correct} вопросов из {questions.length}
            </p>
            <button className="main-btn" onClick={() => navigate('/')}>
              Попробовать снова
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
