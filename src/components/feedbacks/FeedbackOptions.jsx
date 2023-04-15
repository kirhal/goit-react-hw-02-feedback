import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css['buttons-list']}>
      <li>
        <button
          type="button"
          className={css.button}
          name="good"
          onClick={this.addFeedback}
        >
          Good
        </button>
      </li>
      <li>
        <button
          type="button"
          className={css.button}
          name="neutral"
          onClick={this.addFeedback}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          type="button"
          className={css.button}
          name="bad"
          onClick={this.addFeedback}
        >
          Bad
        </button>
      </li>
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.string.isRequired,
};
