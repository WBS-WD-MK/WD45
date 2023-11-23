import React from 'react';

const Result = ({ questions, answers }) => {
  return (
    <div>
      <h2>Thank you for filling the form!</h2>
      <h3>Results</h3>
      {questions.map(question => (
        <p key={question.text}>
          {question.text}: {answers[question.text]}
        </p>
      ))}
    </div>
  );
};

export default Result;
