import PropTypes from 'prop-types';
import Transaction from '../Transaction/Transaction';

import css from './transactions-list.module.css';

const TransactionList = ({ items }) => {
  // console.log(items);
  return (
    <table className="transaction-history">
      <thead>
        <tr className={css.head}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <Transaction itemsArr={items} />
      </tbody>
    </table>
  );
};

TransactionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionList;
