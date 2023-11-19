import { useState } from 'react';

// This is the Income page component
export default function Income() {
  const [advice, setAdvice] = useState(0);

  // Handle input change
  const handleInputChange = (e) => {
    setIncome(e.target.value);
  };

  return (
    <div>
      <h1>Enter Your Income</h1>
      <input type="string" value={income} onChange={handleInputChange} />
    </div>
  );
}