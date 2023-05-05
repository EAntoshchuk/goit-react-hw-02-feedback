import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState(({ good }) => {
      return {
        good: good + 1,
      };
    });
  };

  handleClickNeutral = () => {
    this.setState(({ neutral }) => {
      return {
        neutral: neutral + 1,
      };
    });
  };

  handleClickBad = () => {
    this.setState(({ bad }) => {
      return {
        bad: bad + 1,
      };
    });
  };

  render() {
    return (
      <div className={css.feedback}>
        <h2 className={css.title}>Please leave feedback</h2>
        <div className={css.buttons}>
          <button
            onClick={() => this.handleClickGood(this.good)}
            type="button"
            className={css.btn}
          >
            Good
          </button>
          <button
            onClick={() => this.handleClickNeutral(this.neutral)}
            type="button"
            className={css.btn}
          >
            Neutral
          </button>

          <button
            onClick={() => this.handleClickBad(this.bad)}
            type="button"
            className={css.btn}
          >
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <ul className={css.stats}>
          <li className={css.stats_item}>
            <p className={css.quantity}>Good: {this.state.good}</p>
          </li>
          <li className={css.stats_item}>
            <p className={css.quantity}>Neutral: {this.state.neutral}</p>
          </li>
          <li className={css.stats_item}>
            <p className={css.quantity}>Bad: {this.state.bad}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;

// export default function Feedback() {
//   {
//   }
// return (

// );
// }

// Feedback.propTypes = {
//   state: PropTypes.arrayOf(
//     PropTypes.shape({
//       good: PropTypes.number.isRequired,
//       neutral: PropTypes.number.isRequired,
//       bad: PropTypes.number.isRequired,
//     })
//   ),
// };
