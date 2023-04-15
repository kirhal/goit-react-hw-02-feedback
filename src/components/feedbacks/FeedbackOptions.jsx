import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  const keysArr = Object.key(options);
  return (
    <ul className={css['buttons-list']}>
      {keysArr.map(elem => {
        <li key={elem}>
          <button
            type="button"
            className={css.button}
            name={elem}
            onClick={onLeaveFeedback}
          >
            {elem}
          </button>
        </li>;
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.string.isRequired,
};
