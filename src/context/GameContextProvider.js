import axios from 'axios';
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const gameContext = createContext();

const questions = [
  {
    title: 'Как зовут меня?',
    variants: ['Daniel', 'Defo', 'Daniel Defo'],
    correct: 0,
  },
  {
    title: 'Сколько мне лет?',
    variants: [20, 19, 18],
    correct: 1,
  },
  {
    title: 'Когда у меня день рождение?',
    variants: ['23го сентября', '24го сентября', '25го сентября'],
    correct: 2,
  },
  {
    title: 'Какой мой любимый день недели?',
    variants: ['Воскресенье', 'Пятница', 'Вторник'],
    correct: 1,
  },
  {
    title: 'Куда я хотел бы отправиться в путешествие?',
    variants: ['Мальдивы', 'Париж', 'Антарктида'],
    correct: 2,
  },
  {
    title: 'Какая игра нравится мне больше всего?',
    variants: ['FIFA', 'PUBG', 'Clash Royale'],
    correct: 0,
  },
  {
    title: 'Что я считаю важным?',
    variants: ['Деньги', 'Счастье', 'Здоровье'],
    correct: 2,
  },
  {
    title: 'Сколько у меня было серьёзных отношений?',
    variants: [0, 2, 5],
    correct: 0,
  },
  {
    title: 'Какой вид спорта я люблю больше всего?',
    variants: ['Шахматы', 'Футбол', 'UFC'],
    correct: 1,
  },
  {
    title: 'Какой фрукт я люблю больше всего?',
    variants: ['Банан', 'Яблоко', 'Клубника'],
    correct: 0,
  },
  {
    title: 'Чего я боюсь больше всего?',
    variants: ['Пауков и жуков', 'Глубины', 'Высоты'],
    correct: 2,
  },
  {
    title: 'Какая моя любимая еда?',
    variants: ['Манты', 'Пицца', 'Wok лагман'],
    correct: 2,
  },
  {
    title: 'Что я больше всего использую?',
    variants: ['Tik Tok', 'Instagram', 'You Tube'],
    correct: 2,
  },
  {
    title: 'О каком автомобиле я мечтаю?',
    variants: ['Cadillac Escalade', 'Nissan Skyline', 'Mercedes-Bens W124'],
    correct: 0,
  },
  {
    title: 'Какой мой любимый сериал?',
    variants: ['5:32', 'Кухня', 'Зомбеты'],
    correct: 1,
  },
];

const GameContextProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const question = questions[step];

  const [correct, setCorrect] = useState(0);

  function clickVariant(index) {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
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
        clickVariant,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameContextProvider;
