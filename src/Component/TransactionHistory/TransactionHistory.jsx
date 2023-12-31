import React from 'react'
import PropTypes from 'prop-types';
import './TransactionHistory.css'

export default function TransactionHistory({items}) {
  return (
 <table class="transaction-history">
  <thead className='transaction-title'>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
<tbody>
    {items.map(({ id, type, amount, currency }) => (
    <tr className='transaction-hey' key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ))}                 
  </tbody>
</table>
  );
}


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
