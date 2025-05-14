
import React from 'react';
import { useQuiz } from '@/context/QuizContext';
import QuizOption from './QuizOption';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const QuizQuestion: React.FC = () => {
  const { 
    questions, 
    currentQuestionIndex, 
    handleNextQuestion, 
    handleSubmitQuiz, 
    selectedOption, 
    answerSubmitted 
  } = useQuiz();
  
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  
  return (
    <Card className="w-full max-w-3xl animate-fade-in">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <Progress value={progress} className="h-2" />
        <CardTitle className="mt-4 text-xl">{currentQuestion.question}</CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-1">
          {currentQuestion.options.map((option, index) => (
            <QuizOption 
              key={index} 
              option={option} 
              index={index} 
              isCorrect={index === currentQuestion.correctAnswer}
            />
          ))}
        </div>
        
        {answerSubmitted && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-md">
            <p className="font-medium text-blue-800">Explanation:</p>
            <p className="text-blue-700">{currentQuestion.explanation}</p>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between">
        {!answerSubmitted ? (
          <Button 
            onClick={handleSubmitQuiz}
            disabled={selectedOption === null}
            className="w-full"
          >
            Check Answer
          </Button>
        ) : (
          <Button 
            onClick={handleNextQuestion}
            className="w-full"
          >
            {currentQuestionIndex === questions.length - 1 ? "Finish Quiz" : "Next Question"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuizQuestion;
