import React, { useState } from 'react';
import HabitForm from './HabitForm';
import HabitList from './HabitList';

function HabitTracker() {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits([...habits, { name: habit, history: {} }]);
  };

  const updateHabitStatus = (index, date, status) => {
    const newHabits = habits.slice();
    newHabits[index].history[date] = status;
    setHabits(newHabits);
  };

  return (
    <div className="App">
      <h1>Habit Tracker</h1>
      <HabitForm addHabit={addHabit} />
      <HabitList habits={habits} updateHabitStatus={updateHabitStatus} />
    </div>
  );
}

export default HabitTracker;
