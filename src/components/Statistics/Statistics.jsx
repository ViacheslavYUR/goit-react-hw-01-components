import PropTypes from 'prop-types';

import css from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  const elements = stats.map(item => (
    <li key={item.id} className={css.item}>
      <span className={css.label}>{item.label} </span>
      <span className={css.percentage}>{item.percentage}%</span>
    </li>
  ));
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>{elements}</ul>
    </section>
  );
};

export default Statistics;

Statistics.prototype = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
  }),
};
