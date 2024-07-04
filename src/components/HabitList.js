import React, { useState } from 'react';

function HabitList({ habits, updateHabitStatus }) {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const handleStatusChange = (index, status) => {
    updateHabitStatus(index, selectedDate, status);
  };

  return (
    <div>
      <label>
        Select Date:
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </label>
      {habits.map((habit, index) => (
        <div key={index} className="habit-item">
          <span>{habit.name}</span>
          <span>Status: {habit.history[selectedDate] || 'None'}</span>
          <button onClick={() => handleStatusChange(index, 'Done')}>Done</button>
          <button onClick={() => handleStatusChange(index, 'Not done')}>Not done</button>
          <button onClick={() => handleStatusChange(index, 'None')}>None</button>
        </div>
      ))}
    </div>
  );
}

export default HabitList;
