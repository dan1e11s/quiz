import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gameContext } from '../../context/GameContextProvider';
import '../GamePage/GamePage.css';

const GamePage = () => {
  const { step, question, questions, clickVariant } = useContext(gameContext);
  const navigate = useNavigate();

  return (
    <>
      {step !== questions.length ? (
        <div className="container">
          <div className="wrapper">
            <div className="box">
              <h3>{question.title}</h3>
              {question.variants.map((item, index) => (
                <button
                  onClick={() => clickVariant(index)}
                  key={item}
                  className="variant"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        navigate('/result')
      )}
    </>
  );
};

export default GamePage;
