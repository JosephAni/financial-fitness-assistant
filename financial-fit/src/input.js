import React, { useState } from 'react'
import Link from 'next/link'

export default function Input() {
  const [income, setIncome] = useState(0) 
  const [rent, setRent] = useState(0)
  const [food, setFood] = useState(0)
  // More state variables for other expenses...

  function handleSubmit(e) {
    e.preventDefault()
    // Call API to get financial advice based on input data
  }

  return (
    <div>
      <h1>Enter your financial information</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Monthly income: $  
          <input type="number" value={income} onChange={e => setIncome(e.target.value)} />
        </label>
        <label>
          Monthly rent: $  
          <input type="number" value={rent} onChange={e => setRent(e.target.value)} />
        </label>
        <label>  
          Monthly food costs: $  
          <input type="number" value={food} onChange={e => setFood(e.target.value)} />
        </label>
        {/* More input fields for other expenses */}
        <button type="submit">Get Financial Advice</button>
      </form>
      <Link href="/advice">
        <a>View your financial advice</a> 
      </Link>
    </div>
  )
}