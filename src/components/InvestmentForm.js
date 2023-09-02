import '../index.css';
import React, { useState } from 'react';

const InvestmentForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState('');
  const [yearlySavings, setYearlySavings] = useState('');
  const [interest, setInterest] = useState('');
  const [duration, setDuration] = useState('');

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  const currentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
  };
  const yearlySavingsHandler = (event) => {
    setYearlySavings(event.target.value);
  };
  const interestHandler = (event) => {
    setInterest(event.target.value);
  };
  const durationHandler = (event) => {
    setDuration(event.target.value);
  };

  const removeValuesFromInputFields = () => {
    setCurrentSavings('');
    setYearlySavings('');
    setInterest('');
    setDuration('');
  };

  const calculateBtnHandler = () => {
    const inputValues = {
      'current-savings': currentSavings,
      'yearly-contribution': yearlySavings,
      'expected-return': interest,
      duration: duration,
    };

    props.onCalculate(inputValues);

    removeValuesFromInputFields();
  };
  const resetBtnHandler = () => {
    removeValuesFromInputFields();
  };

  return (
    <form onSubmit={formSubmitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={currentSavingsHandler}
            value={currentSavings}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={yearlySavingsHandler}
            value={yearlySavings}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={interestHandler}
            value={interest}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={durationHandler}
            value={duration}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetBtnHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button onClick={calculateBtnHandler} type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
