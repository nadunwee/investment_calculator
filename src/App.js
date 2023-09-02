import Logo from './components/UI/Logo';
import InvestmentForm from './components/InvestmentForm';
import InvestmentTable from './components/InvestmentTable';
import React, { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalCapital: currentSavings + yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Logo />
      <InvestmentForm onCalculate={calculateHandler} />
      {!userInput && <p style={{ textAlign: 'center' }}>No investment Yet</p>}
      {userInput && (
        <InvestmentTable
          data={yearlyData}
          initialInvestment={userInput['current-savings']}
        />
      )}
    </div>
  );
}

export default App;
