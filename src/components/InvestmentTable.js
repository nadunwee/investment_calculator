/* Todo: Show below table conditionally (only once result data is available) 
 Show fallback text if no data is available */
import TableData from './UI/TableData';

const InvestmentTable = (props) => {
  // console.log(props.yearlyDataArray);
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <TableData />
      </tbody>
    </table>
  );
};

export default InvestmentTable;
