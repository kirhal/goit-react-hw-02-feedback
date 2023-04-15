import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export class Feedback extends Component {
  state = {
    good: 5,
    neutral: 3,
    bad: 1,
  };

  // constructor() {
  //   super();
  //   this.countTotalFeedback = this.countTotalFeedback.bind(this.state);
  // }

  countTotalFeedback(state) {
    const valuesArr = Object.values(state);
    return valuesArr.reduce((previousValue, elem) => previousValue + elem, 0);
  }
  countPositiveFeedbackPercentage(data) {
    return Math.round(data * 100);
  }

  render() {
    const state = this.state;
    const totalFeedback = this.countTotalFeedback(state);
    const count = state.good / totalFeedback;
    const feedbackPercentage = this.countPositiveFeedbackPercentage(count);

    return (
      <div className="container">
        <h2 className="title">Please leave feedback</h2>
        <ul className={css['buttons-list']}>
          <li>
            <button type="button" className={css.button} name="good">
              Good
            </button>
          </li>
          <li>
            <button type="button" className={css.button} name="neutral">
              Neutral
            </button>
          </li>
          <li>
            <button type="button" className={css.button} name="bad">
              Bad
            </button>
          </li>
        </ul>
        <h2 className="title">Statistics</h2>
        <p className="statistics-item">Good: {this.state.good}</p>
        <p className="statistics-item">Neutral: {this.state.neutral}</p>
        <p className="statistics-item">Bad: {this.state.bad}</p>
        <p className="statistics-item">Total: {totalFeedback}</p>
        <p className="statistics-item">
          Positive feedback: {feedbackPercentage}%
        </p>
      </div>
    );
  }
}
