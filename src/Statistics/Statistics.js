import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <ul className={`list ${s.container}`}>
        <li className={s.item}>
          <p>{good}</p>
          <span>GOOD:</span>
        </li>
        <li className={s.item}>
          <p>{neutral}</p>
          <span>NEUTRAL:</span>
        </li>
        <li className={s.item}>
          <p>{bad}</p>
          <span>BAD:</span>
        </li>
        <li className={s.item}>
          <p>{total}</p>
          <span>TOTAL</span>
        </li>
        <li className={s.item}>
          <p>{positivePercentage}%</p>
          <span>POSITIVE FEEDBACK</span>
        </li>
      </ul>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
