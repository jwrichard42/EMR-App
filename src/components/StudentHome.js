// components/StudentHome.js
import React from "react";
import Button from '@mui/material/Button';

const StudentHome = () => {
  return (
    <div className="student-home">
      <h2>Student Home</h2>
      <section>
        <h3>Current Exams</h3>
        <div>
          <p>OSCE 2 - Class Name - Due Date</p>
          <Button variant="contained">Start Exam</Button>
        </div>
      </section>
      <section>
        <h3>Upcoming Exams</h3>
        <div>
          <p>OSCE 3 - Class Name - Due Date</p>
        </div>
      </section>
      <section>
        <h3>Past Exams</h3>
        <div>
          <p>OSCE 1 - Class Name - Due Date | Grade: X/XX</p>
          <Button variant="contained">View Exam</Button>
        </div>
      </section>
    </div>
  );
};

export default StudentHome;
