
import React from 'react';
import { useQuiz } from '@/context/QuizContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, XCircle } from 'lucide-react';

const QuizResults: React.FC = () => {
  const { questions, answers, score, restartQuiz } = useQuiz();
  const percentage = (score / questions.length) * 100;
  
  const getScoreColor = () => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  const getProgressColor = () => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  const getScoreMessage = () => {
    if (percentage >= 80) return 'Excellent! You have a strong understanding of AWS services.';
    if (percentage >= 60) return 'Good job! You have a decent understanding of AWS services.';
    if (percentage >= 40) return 'You have a basic understanding of AWS services. More study recommended.';
    return 'You should spend more time studying AWS services.';
  };

  return (
    <Card className="w-full max-w-3xl animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Quiz Results</CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="text-center mb-6">
          <p className="text-4xl font-bold mb-2">
            <span className={getScoreColor()}>
              {score}
            </span> 
            <span className="text-gray-500">
              /{questions.length}
            </span>
          </p>
          
          <div className="w-full mb-2">
            <Progress value={percentage} className={`h-2 ${getProgressColor()}`} />
          </div>
          
          <p className="text-gray-700 mt-2">
            {getScoreMessage()}
          </p>
        </div>
        
        <div className="space-y-4 mt-8">
          <h3 className="font-medium text-lg">Question Review:</h3>
          
          {questions.map((question, index) => (
            <div 
              key={index} 
              className="p-4 border rounded-md bg-slate-50"
            >
              <div className="flex items-start">
                {answers[index] === question.correctAnswer ? (
                  <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                ) : (
                  <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" size={20} />
                )}
                <div>
                  <p className="font-medium">{question.question}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-medium">Your answer:</span> {answers[index] !== null ? question.options[answers[index]] : 'No answer'}
                  </p>
                  <p className="text-sm text-green-600 mt-1">
                    <span className="font-medium">Correct answer:</span> {question.options[question.correctAnswer]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter>
        <Button onClick={restartQuiz} className="w-full">
          Restart Quiz
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizResults;
