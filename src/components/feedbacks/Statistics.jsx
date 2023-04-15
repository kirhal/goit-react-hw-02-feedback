import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {}

Statistics.propTypes = { message: PropTypes.string.isRequired };
