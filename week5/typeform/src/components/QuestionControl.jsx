import React from 'react';

const QuestionControl = ({
  isFirstQuestion,
  isLastQuestion,
  handlePrevious,
  handleNext,
  handleSubmit,
  isDisabled,
}) => {
  return (
    <div>
      {!isFirstQuestion && <button onClick={handlePrevious}>Previous</button>}
      {!isLastQuestion && (
        <button onClick={handleNext} disabled={isDisabled}>
          Next
        </button>
      )}
      {isLastQuestion && (
        <button onClick={handleSubmit} disabled={isDisabled}>
          Submit
        </button>
      )}
    </div>
  );
};

export default QuestionControl;
