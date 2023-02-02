import PropTypes from 'prop-types';

// import css from './transaction.module.css';

const Transaction = ({ itemsArr }) => {
  // console.log(itemsArr);

  const itemLine = itemsArr.map(({ id, type, amount, currency }) => {
    return (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });
  return itemLine;
};
export default Transaction;

Transaction.propTypes = {
  itemsArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
