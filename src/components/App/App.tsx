import { useState } from 'react';
import type { Votes, VoteType } from '../../types/votes';

import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';

import css from './App.module.css';

export default function App() {
  // Стан для голосів
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функціі для роботи зі станом
  // для оновлення стану голосів
  const handleVote = (type: VoteType) => {
    setVotes(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  // Скидання голосів
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positive = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        // Зробіть так, щоб кнопка Reset відображалась тільки тоді, 
        // коли є хоча б один голос. Для цього використовуйте змінну totalVotes 
        // в компоненті App і передавайте пропс canReset в компонент VoteOptions 
        // зі значенням, яке буде вказувати, чи потрібно відображати кнопку Reset.
        canReset={totalVotes > 0}
      />
      {/* Реалізуйте умовний рендеринг компонентів залежно від значення totalVotes.
      Компонент VoteStats має рендеритись тільки після того, як буде отримано
      хоча б один голос. Тому, якщо значення totalVotes більше нуля, то має
      рендеритись компонент VoteStats. Якщо ж відгуків немає (тобто totalVotes
      дорівнює 0), то має рендеритись компонент Notification. */}
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positive}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
