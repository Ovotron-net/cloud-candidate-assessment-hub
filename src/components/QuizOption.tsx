
import React from 'react';
import { cn } from '@/lib/utils';
import { useQuiz } from '@/context/QuizContext';

interface QuizOptionProps {
  option: string;
  index: number;
  isCorrect: boolean;
}

const QuizOption: React.FC<QuizOptionProps> = ({ option, index, isCorrect }) => {
  const { selectedOption, handleOptionSelect, answerSubmitted } = useQuiz();
  
  const isSelected = selectedOption === index;
  
  return (
    <div
      className={cn(
        "p-4 border rounded-md cursor-pointer mb-3 transition-all duration-200 hover:bg-slate-50",
        isSelected && !answerSubmitted && "border-blue-500 bg-blue-50",
        answerSubmitted && isSelected && isCorrect && "border-green-500 bg-green-50",
        answerSubmitted && isSelected && !isCorrect && "border-red-500 bg-red-50",
        answerSubmitted && !isSelected && isCorrect && "border-green-500 bg-green-50 opacity-70",
        answerSubmitted && "cursor-default"
      )}
      onClick={() => handleOptionSelect(index)}
    >
      <div className="flex items-start">
        <div className={cn(
          "flex items-center justify-center w-6 h-6 rounded-full mr-3 text-sm font-medium",
          isSelected && !answerSubmitted ? "bg-blue-500 text-white" : "bg-slate-200 text-slate-700",
          answerSubmitted && isSelected && isCorrect && "bg-green-500 text-white",
          answerSubmitted && isSelected && !isCorrect && "bg-red-500 text-white",
          answerSubmitted && !isSelected && isCorrect && "bg-green-500 text-white opacity-70",
        )}>
          {String.fromCharCode(65 + index)}
        </div>
        <div className="text-left">{option}</div>
      </div>
    </div>
  );
};

export default QuizOption;
