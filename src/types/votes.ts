// Інтерфейс для стану голосів
export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

// Тип для значення голосу
export type VoteType = 'good' | 'neutral' | 'bad'