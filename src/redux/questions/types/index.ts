export interface InitialState {
  currentQuestion: Question;
  questions: Question[];
  answers: Answer[];
}

export interface Question {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface Answer {
  question: number;
  answer: string;
  correct_answer: "Hungarian";
  isCorrect: boolean;
}
