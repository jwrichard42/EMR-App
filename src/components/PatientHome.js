import React from "react";
import '../App.css';
import Button from '@mui/material/Button';

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

const PatientHome = () => {
  return (
    <div>
      <h2>Simulated Patient Home</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Scenario</th>
            <th>View Exam</th>
          </tr>
        </thead>
        <tbody>
            {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.scenario}</td>
                            <td className="table-button-container"><Button variant="contained" >View Exam</Button></td>
                        </tr>
                    )
            })}
        </tbody>
      </table>
    </div>
  );
};

export default PatientHome;
