import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul>
      <li>
        <p className={css[`statistics-item`]}>Good: {good}</p>
      </li>
      <li>
        <p className={css[`statistics-item`]}>Neutral: {neutral}</p>
      </li>
      <li>
        <p className={css[`statistics-item`]}>Bad: {bad}</p>
      </li>
      <li>
        <p className={css[`statistics-item`]}>Total: {total}</p>
      </li>
      <li>
        <p className={css[`statistics-item`]}>
          Positive feedback: {positivePercentage}%
        </p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
