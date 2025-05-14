
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface QuizIntroProps {
  onStartQuiz: () => void;
}

const QuizIntro: React.FC<QuizIntroProps> = ({ onStartQuiz }) => {
  return (
    <Card className="w-full max-w-3xl animate-fade-in">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4">
          <div className="p-2 bg-gradient-to-r from-aws-orange to-aws-light-blue rounded-full inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
        </div>
        <CardTitle className="text-3xl font-bold">AWS Services Assessment</CardTitle>
        <CardDescription className="text-lg mt-2">
          Test your knowledge of Amazon Web Services
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-md">
            <h3 className="font-semibold text-blue-800 mb-2">Quiz Instructions:</h3>
            <ul className="list-disc pl-5 text-blue-700 space-y-1">
              <li>This quiz contains 15 multiple-choice questions</li>
              <li>Select the best answer for each question</li>
              <li>You'll receive immediate feedback after each question</li>
              <li>Your final score will be shown at the end</li>
              <li>This assessment covers various AWS services and their use cases</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Topics Covered:</h3>
            <div className="flex flex-wrap gap-2">
              {["Compute", "Storage", "Databases", "Networking", "Containers", "Serverless", "Management Tools"].map((topic) => (
                <span key={topic} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button onClick={onStartQuiz} className="w-full" size="lg">
          Start Assessment
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizIntro;
