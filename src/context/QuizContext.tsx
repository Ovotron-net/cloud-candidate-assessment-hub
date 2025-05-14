
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { QuizQuestion, awsQuizQuestions } from '../data/quizData';
import { useToast } from '@/components/ui/use-toast';

interface QuizContextType {
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  answers: (number | null)[];
  score: number;
  quizCompleted: boolean;
  selectedOption: number | null;
  answerSubmitted: boolean;
  handleOptionSelect: (optionIndex: number) => void;
  handleNextQuestion: () => void;
  handleSubmitQuiz: () => void;
  restartQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

interface QuizProviderProps {
  children: ReactNode;
}

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [questions] = useState<QuizQuestion[]>(awsQuizQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const { toast } = useToast();

  const handleOptionSelect = (optionIndex: number) => {
    if (!answerSubmitted) {
      setSelectedOption(optionIndex);
    }
  };

  const handleNextQuestion = () => {
    // Save the answer
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedOption;
    setAnswers(newAnswers);

    // Calculate score if answer is correct
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }

    // Move to next question or complete quiz
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
      toast({
        title: "Quiz Completed!",
        description: `Your final score: ${score + (selectedOption === questions[currentQuestionIndex].correctAnswer ? 1 : 0)} out of ${questions.length}`,
      });
    }
  };

  const handleSubmitQuiz = () => {
    setAnswerSubmitted(true);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers(Array(questions.length).fill(null));
    setScore(0);
    setQuizCompleted(false);
    setSelectedOption(null);
    setAnswerSubmitted(false);
  };

  const value = {
    questions,
    currentQuestionIndex,
    answers,
    score,
    quizCompleted,
    selectedOption,
    answerSubmitted,
    handleOptionSelect,
    handleNextQuestion,
    handleSubmitQuiz,
    restartQuiz,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
