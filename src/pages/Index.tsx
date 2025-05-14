
import React, { useState } from 'react';
import { QuizProvider } from '@/context/QuizContext';
import QuizIntro from '@/components/QuizIntro';
import QuizQuestion from '@/components/QuizQuestion';
import QuizResults from '@/components/QuizResults';
import { useQuiz } from '@/context/QuizContext';

const QuizContent = () => {
  const { quizCompleted } = useQuiz();
  
  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      {quizCompleted ? <QuizResults /> : <QuizQuestion />}
    </div>
  );
};

const Index = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  
  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-aws-blue to-aws-bg-gradient-end text-white">
      <div className="container mx-auto py-8 px-4">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">AWS Assessment Quiz</h1>
          <p className="text-lg text-blue-100">Test your knowledge of Amazon Web Services</p>
        </header>
        
        <main className="flex justify-center">
          {!quizStarted ? (
            <QuizIntro onStartQuiz={handleStartQuiz} />
          ) : (
            <QuizProvider>
              <QuizContent />
            </QuizProvider>
          )}
        </main>
        
        <footer className="mt-10 text-center text-sm text-blue-200">
          <p>© 2025 AWS Assessment Tool. All questions designed for educational purposes.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
