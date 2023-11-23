import { useState } from 'react';

import './App.css';
import Result from './components/Result';
import Form from './components/Form';

function App() {
  const [questions] = useState([
    {
      id: 1,
      text: 'What is your name?',
    },
    {
      id: 2,
      text: 'How old are you?',
    },
    {
      id: 3,
      text: 'Where are you from?',
    },
  ]);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const handleAnswer = e => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    setShowResult(!showResult);
  };
  const handleNext = () => {
    setCurrentQuestionIndex(i => i + 1);
  };
  const handlePrevious = () => {
    setCurrentQuestionIndex(i => i - 1);
  };
  return (
    <>
      {showResult ? (
        <Result questions={questions} answers={answers} />
      ) : (
        <Form
          questions={questions}
          answers={answers}
          handleAnswer={handleAnswer}
          currentQuestionIndex={currentQuestionIndex}
          handleSubmit={handleSubmit}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      )}
    </>
  );
}

export default App;
