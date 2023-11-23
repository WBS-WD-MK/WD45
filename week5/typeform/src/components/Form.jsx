import React from 'react';
import QuestionControl from './QuestionControl';

const Form = ({
  questions,
  answers,
  handleAnswer,
  currentQuestionIndex,
  handleSubmit,
  handleNext,
  handlePrevious,
}) => {
  const currentQuestion = questions[currentQuestionIndex];
  const answer = answers[currentQuestion.text] || '';
  return (
    <div>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <h4>{currentQuestion.text}</h4>
      <input type="text" name={currentQuestion.text} value={answer} onChange={handleAnswer} />
      <QuestionControl
        isFirstQuestion={currentQuestionIndex === 0}
        isLastQuestion={currentQuestionIndex === questions.length - 1}
        handleSubmit={handleSubmit}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        isDisabled={!answer} // !"" => true !"asdasd" => false
      />
    </div>
  );
};

export default Form;
