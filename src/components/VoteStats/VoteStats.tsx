import type { Votes } from '../../types/votes';
import css from './VoteStats.module.css';

interface VoteStatsProps {
  votes: Votes;
}

export default function VoteStats({ votes }: VoteStatsProps) {
  const total = votes.good + votes.neutral + votes.bad;
  const positive = total ? ((votes.good / total) * 100).toFixed(1) : 0;

  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={css.stat}>
        Total: <strong>{total}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{positive}%</strong>
      </p>
    </div>
  );
}
