import React, { useState } from "react";
import '../App.css';

const scenarios = [
  { id: 1, label: "Scenario 1" },
  { id: 2, label: "Scenario 2" },
  { id: 3, label: "Scenario 3" }
];

const data = [
  { name: "John Smith", scenario: 1 },
  { name: "Jane Doe", scenario: 2 },
  { name: "Alice Johnson", scenario: 3 },
  { name: "Robert Brown", scenario: 1 },
  { name: "Emily White", scenario: 2 },
  { name: "Michael Davis", scenario: 3 },
  { name: "Sarah Wilson", scenario: 1 },
  { name: "David Clark", scenario: 2 },
  { name: "Laura Martinez", scenario: 3 },
  { name: "James Lewis", scenario: 1 },
  { name: "Sophia Walker", scenario: 2 },
  { name: "Daniel Young", scenario: 3 }
];


const InstructorHome = () => {
  const [studentData, setStudentData] = useState(data);

  const handleScenarioChange = (index, event) => {
    const newScenario = parseInt(event.target.value);
    const updatedData = [...studentData];
    updatedData[index].scenario = newScenario;
    setStudentData(updatedData);
  };

  return (
    <div>
      <h2>Scenario Assignment</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Scenario</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((val, key) => (
              <tr key={key}>
                <td>{val.name}</td>
                <td>
                  <select
                    value={val.scenario}
                    onChange={(event) => handleScenarioChange(key, event)}
                  >
                    {scenarios.map((scenario) => (
                      <option key={scenario.id} value={scenario.id}>
                        {scenario.label}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-container">
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorHome;
