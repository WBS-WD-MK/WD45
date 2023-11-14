import React from 'react';
import './students.css';
const Students = ({ students }) => {
  return (
    <ul>
      {students.map(student => (
        <li key={student.email} className={student.isStudent ? 'student' : 'not-student'}>
          {student.name}
        </li>
      ))}
    </ul>
  );
};

export default Students;

