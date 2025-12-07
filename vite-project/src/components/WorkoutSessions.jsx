import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          A gym is a place where people exercise to stay fit and healthy.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Our featured bootcamp offers hands-on training to build real-world skills.
          It is designed to help learners grow fast and achieve their professional goals
        </p>
        <div className="bootcamps">
          <div>
            <h4>Introduction to Gym Management System</h4>
            <p>
              A Gym Management System helps gyms handle daily tasks easily and efficiently.
              It keeps everything organized, from member records to workout plans.
            </p>
          </div>
          <div>
            <h4>Member Registration & Tracking</h4>
            <p>
              The system stores member details, attendance, and membership history.
              It allows staff to track progress and ensure a smooth experience.
            </p>
          </div>
          <div>
            <h4>Equipment & Staff Management</h4>
            <p>
              It helps manage gym equipment, maintenance schedules, and staff duties.
              This keeps the gym running smoothly and avoids unnecessary downtime.
            </p>
          </div>
          <div>
            <h4>Payments & Reports</h4>
            <p>
              The system handles membership payments, invoices, and renewal reminders.
              It also generates reports to help owners make better business decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;