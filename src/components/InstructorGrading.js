import React, { useState } from "react";
import "../App.css";

const gradingData = [
  { name: "John Smith", scenario: 1, grade: "" },
  { name: "Jane Doe", scenario: 2, grade: "" },
  { name: "Alice Johnson", scenario: 3, grade: "" },
  { name: "Robert Brown", scenario: 1, grade: "" },
  { name: "Emily White", scenario: 2, grade: "" },
  { name: "Michael Davis", scenario: 3, grade: "" },
  { name: "Sarah Wilson", scenario: 1, grade: "" },
  { name: "David Clark", scenario: 2, grade: "" },
  { name: "Laura Martinez", scenario: 3, grade: "" },
  { name: "James Lewis", scenario: 1, grade: "" },
  { name: "Sophia Walker", scenario: 2, grade: "" },
  { name: "Daniel Young", scenario: 3, grade: "" }
];

const scenarios = [
  { id: 1, label: "Scenario 1" },
  { id: 2, label: "Scenario 2" },
  { id: 3, label: "Scenario 3" }
];

const InstructorGrading = () => {
  const [studentGrades, setStudentGrades] = useState(gradingData);

  const handleGradeChange = (index, event) => {
    const newGrade = event.target.value;
    const updatedGrades = [...studentGrades];
    updatedGrades[index].grade = newGrade;
    setStudentGrades(updatedGrades);
  };

  const handleSubmitGrades = () => {
    // Submit the grades to the server or handle them appropriately
    console.log("Grades submitted:", studentGrades);
  };

  return (
    <div>
      <h2>Scenario Grading</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Assigned Scenario</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {studentGrades.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{scenarios.find(scenario => scenario.id === student.scenario)?.label}</td>
                <td>
                  <input
                    type="text"
                    value={student.grade}
                    onChange={(event) => handleGradeChange(index, event)}
                    placeholder="Enter grade"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-container">
          <button className="submit-button" onClick={handleSubmitGrades}>
            Submit Grades
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorGrading;
