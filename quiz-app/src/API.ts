import { shuffleArray } from "./utils";

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
export type Question = {
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };
export async function fetchQuizQuestions(
  amount: number,
  difficulty: Difficulty
) {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=9&type=multiple&difficulty=${difficulty}`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      question.correct_answer,
      ...question.incorrect_answers,
    ]),
  }));
  //   shuffleArray
}
