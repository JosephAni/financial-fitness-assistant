import { useState } from 'react';

// This is the Income page component
export default function Income() {
  const [goals, setGoals] = useState(0);

  // Handle input change
  const handleInputChange = (e) => {
    setIncome(e.target.value);
  };

  return (
    <div>
      <h1>Enter Your Goals</h1>
      <input type="number" value={income} onChange={handleInputChange} />
    </div>
  );
}