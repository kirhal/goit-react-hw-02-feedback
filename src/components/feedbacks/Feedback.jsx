import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';
import Notification from './Notification';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = evt => {
    const name = evt.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = state => {
    const valuesArr = Object.values(state);
    return valuesArr.reduce((previousValue, elem) => previousValue + elem, 0);
  };
  countPositiveFeedbackPercentage(data) {
    return Math.round(data * 100);
  }

  render() {
    const state = this.state;
    const totalFeedback = this.countTotalFeedback(state);
    const count = state.good / totalFeedback;
    const positivePercentage = this.countPositiveFeedbackPercentage(count);

    return (
      <div className="container">
        <h2 className="title">Please leave feedback</h2>
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
        <h2 className="title">Statistics</h2>
        <p className={css[`statistics-item`]}>Good: {state.good}</p>
        <p className={css[`statistics-item`]}>Neutral: {state.neutral}</p>
        <p className={css[`statistics-item`]}>Bad: {state.bad}</p>
        <p className={css[`statistics-item`]}>Total: {totalFeedback}</p>
        <p className={css[`statistics-item`]}>
          Positive feedback: {positivePercentage}%
        </p>
      </div>
    );
  }
}

//  <Section title="Please leave feedback">
//    FeedbackOptions options={state} onLeaveFeedback={this.addFeedback}/>
//  </Section>

//  <Section title="Statistics">
//    <Notification message="There is no feedback" /> */
//    <Statistics good={state.good} neutral={state.neutral} bad={state.bad} total={totalFeedback} positivePercentage={positivePercentage}/>
//  </Section>